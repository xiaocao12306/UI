import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as H}from"./Button-COG9o64O.js";import{P as Ea}from"./Popover-D0i9U560.js";import{D as Ca}from"./Dialog-I_j2Ms3q.js";import{I as Ta}from"./Input-o58Aer5Z.js";import{within as p,userEvent as c,expect as a,fireEvent as x,waitFor as L}from"./index-DgAF9SIF.js";import{b as h,s as w,a as v}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-CvOMiBFU.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function u({open:n,onOpenChange:e,commands:t,title:i="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:m="Search commands",resultsAriaLabel:g="Command results",closeOnSelect:B=!0,clearQueryOnEscape:j=!0,closeOnEscape:K=!0,closeOnOutsidePointer:Re=!0,onEscapeKeyDown:be,onPointerDownOutside:xe,closeLabel:ya,placeholder:wa="Search commands...",loading:T=!1,loadingContent:he="Loading commands...",emptyMessage:va="No commands found.",onQueryChange:E,onCloseReason:D,getResultsStatusText:Ie=Ia}){const[R,fe]=r.useState(""),[U,C]=r.useState(0),ga=r.useRef(null),q=r.useRef(null),$=r.useRef(null),Se=r.useRef(n);r.useRef(null),r.useRef(null),r.useRef(null);const O=r.useId(),Ae=r.useId(),Pe=r.useRef(null),ba=M(m,"Search commands"),xa=M(g,"Command results"),ha=M(ya,"Close dialog"),He=r.useMemo(()=>Sa(he),[he]),F=r.useCallback(s=>{$.current=s,D==null||D(s)},[D]),je=r.useCallback(s=>{F(s),e(!1),$.current=null},[F,e]),fa=r.useCallback(s=>{!s&&n&&$.current===null&&(D==null||D("close-button")),$.current=null,e(s)},[D,e,n]);r.useEffect(()=>{!n&&Se.current&&(fe(s=>(s.length>0&&(E==null||E("")),"")),C(0)),Se.current=n},[E,n]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]);const ke=r.useMemo(()=>Ne(R.trim()),[R]),y=r.useMemo(()=>ke?t.filter(s=>{const b=[Da(s),...s.keywords??[]].join(" ");return Ne(b).includes(ke)}):t,[t,ke]),Be=r.useMemo(()=>y.reduce((s,d)=>d.disabled?s:s+1,0),[y]),I=!T&&Be>0,Ee=!T&&y.length>0,ka=r.useMemo(()=>{const s=[];return I&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp","Enter"),(K||j&&R.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[I,j,K,R.length]),Ba=r.useMemo(()=>T?He:Ie({query:R,visibleCount:y.length,enabledCount:Be,totalCount:t.length}),[t.length,Be,y.length,Ie,T,R,He]),S=r.useMemo(()=>y.reduce((s,d,b)=>(d.disabled||s.push(b),s),[]),[y]),A=S[0]??-1,Oe=S[S.length-1]??-1,k=r.useMemo(()=>{if(U<0)return-1;const s=y[U];return!s||s.disabled?-1:U},[U,y]);r.useEffect(()=>{var d;if(y.length===0){q.current=null,C(-1);return}const s=q.current;if(s){const b=y.findIndex(P=>!P.disabled&&P.key===s);if(b>=0){C(b);return}}C(A),q.current=A>=0?((d=y[A])==null?void 0:d.key)??null:null},[y,A]),r.useEffect(()=>{var s;if(k<0){q.current=null;return}q.current=((s=y[k])==null?void 0:s.key)??null},[y,k]),r.useEffect(()=>{if(!n||k<0)return;const s=Pe.current;if(!s)return;const d=s.ownerDocument.getElementById(`${O}-option-${k}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[O,n,k]);const Ce=r.useCallback(s=>{var b;const d=y[s];!d||d.disabled||((b=d.onSelect)==null||b.call(d),B&&je("item-select"))},[B,je,y]),qe=s=>{var b;if(y.length===0)return;let d=k<0?s===1?-1:0:k;for(let P=0;P<y.length;P+=1)if(d=(d+s+y.length)%y.length,!((b=y[d])!=null&&b.disabled)){C(d);return}},Le=s=>{if(S.length===0)return;const d=S.indexOf(k);if(d<0){C(s===1?A:Oe);return}const b=Math.min(S.length-1,Math.max(0,d+s*5));C(S[b]??A)};return o.jsx(Ca,{open:n,onOpenChange:fa,title:i,description:l,closeLabel:ha,size:"md",closeOnEscape:K,closeOnOutsidePointer:Re,onEscapeKeyDown:s=>{be==null||be(s),!(s.defaultPrevented||!K)&&F("escape-key")},onPointerDownOutside:s=>{xe==null||xe(s),!(s.defaultPrevented||!Re)&&F("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(Ta,{ref:ga,"data-autofocus":"",role:"combobox","aria-busy":T||void 0,"aria-expanded":Ee,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":Ee?O:void 0,"aria-activedescendant":!T&&k>=0?`${O}-option-${k}`:void 0,"aria-describedby":Ae,"aria-keyshortcuts":ka,placeholder:wa,value:R,onChange:s=>{fe(s.target.value),E==null||E(s.target.value)},onKeyDown:s=>{if(!Ra(s)&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"){if(s.repeat)return;j&&R.length>0&&(s.preventDefault(),fe(""),E==null||E(""));return}if(s.key==="ArrowDown"){if(!I)return;s.preventDefault(),qe(1);return}if(s.key==="ArrowUp"){if(!I)return;s.preventDefault(),qe(-1);return}if(s.key==="Home"){if(!I)return;s.preventDefault(),C(A);return}if(s.key==="End"){if(!I)return;s.preventDefault(),C(Oe);return}if(s.key==="PageDown"){if(!I)return;s.preventDefault(),Le(1);return}if(s.key==="PageUp"){if(!I)return;s.preventDefault(),Le(-1);return}if(s.key==="Enter"&&!T&&k>=0){if(s.preventDefault(),s.repeat)return;Ce(k)}}},"aria-label":ba}),o.jsx("p",{id:Ae,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Ba}),T?o.jsx("p",{"data-testid":"command-palette-loading-content",style:{margin:0,color:"var(--aurora-text-secondary)"},children:he}):Ee?o.jsx("div",{id:O,ref:Pe,role:"listbox","aria-label":xa,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:y.map((s,d)=>{const b=d===k,P=M(s.ariaLabel);return o.jsx("div",{id:`${O}-option-${d}`,role:"option","aria-selected":b,"aria-disabled":s.disabled||void 0,"aria-label":P,"aria-posinset":d+1,"aria-setsize":y.length,tabIndex:-1,onPointerDown:f=>{f.pointerType==="mouse"||f.button!==0||f.preventDefault()},onMouseDown:f=>{f.button===0&&f.preventDefault()},onMouseEnter:()=>{s.disabled||C(d)},onClick:()=>{s.disabled||Ce(d)},onKeyDown:f=>{if(!s.disabled&&!(f.altKey||f.ctrlKey||f.metaKey)&&(f.key==="Enter"||f.key===" "||f.key==="Space"||f.key==="Spacebar")){if(f.preventDefault(),f.repeat)return;Ce(d)}},style:{border:"1px solid var(--aurora-border-default)",background:b?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},s.key)})}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:va})]})})}function Da(n){if(typeof n.textValue=="string"){const e=N(n.textValue);if(e.length>0)return e}return N(ge(n.label))}function Ne(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function Ra(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ia({query:n,visibleCount:e,enabledCount:t,totalCount:i}){const l=n.trim();return l.length===0?t!==i?`${t} of ${i} command${i===1?"":"s"} available.`:`${i} command${i===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function Sa(n){const e=N(ge(n));return e.length>0?e:"Loading commands..."}function ge(n){if(typeof n=="string")return n;if(typeof n=="number")return String(n);if(Array.isArray(n))return N(n.map(t=>ge(t)).filter(t=>t.length>0).join(" "));if(!r.isValidElement(n))return"";const e=n.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?N(e["aria-label"]):ge(e.children)}function M(n,e){return typeof n=="string"&&n.trim().length>0?n.trim():e}function N(n){return n.replace(/\s+/g," ").trim()}u.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:`| "close-button"
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
}`,computed:!1}}}};const De=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],un={title:"AI/CommandPalette",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:De}};function Te(n,e){const t=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),n.dispatchEvent(t)}function ma(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,commands:De,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Aa(){const[n,e]=r.useState(!1),[t,i]=r.useState("none");return o.jsxs(h,{align:"start",children:[o.jsxs("p",{style:w,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:v,children:t})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>i("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>i("Open Theme Pack")}]})]})}function Pa(){const[n,e]=r.useState(!0),[t,i]=r.useState("None"),l=De.map(m=>({...m,onSelect:()=>i(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Last AI action:"," ",o.jsx("strong",{style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,commands:l})]})}function pa(){const[n,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:v,children:t||"N/A"})]}),o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:i,getResultsStatusText:({query:l,visibleCount:m,enabledCount:g})=>l.trim().length===0?"Command search ready.":`${g}/${m} actionable AI workflow match${m===1?"":"es"} for ${l}`})]})}function Ha(){const[n,e]=r.useState(!0),[t,i]=r.useState(!0),[l,m]=r.useState(0);return o.jsxs(h,{align:"start",children:[o.jsxs("p",{style:w,children:["Executed commands while ready:"," ",o.jsx("strong",{"data-testid":"loading-selection-count",style:v,children:l})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>i(g=>!g),children:t?"Finish loading commands":"Re-enable loading commands"}),o.jsx(H,{size:"sm",variant:"ghost",onClick:()=>e(!0),children:"Reopen loading palette"}),o.jsx(u,{open:n,onOpenChange:e,loading:t,loadingContent:"Syncing AI workflow commands...",closeOnSelect:!1,commands:[{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>m(g=>g+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"],onSelect:()=>m(g=>g+1)}]})]})}function ja(){const[n,e]=r.useState(!0),[t,i]=r.useState("none"),[l,m]=r.useState("N/A"),g=r.useCallback(B=>{m(j=>j==="N/A"?B:`${j} -> ${B}`)},[]);return o.jsxs(h,{align:"start",children:[o.jsxs("p",{style:w,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:v,children:t})]}),o.jsxs("p",{style:w,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:v,children:l})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>{m("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(u,{open:n,onOpenChange:B=>{e(B),B||g("open:false")},onCloseReason:B=>{i(B),g(`reason:${B}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>g("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>g("select")}]})]})}function Oa(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function qa(){const[n,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>i(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>i(l=>l+1)}],placeholder:"Try searching publish..."})]})}function La(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Na(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function Ka(){const[n,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>i(l=>l+1)}]})]})}function Ua(){const[n,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function $a(){const[n,e]=r.useState(!1);return o.jsxs(h,{align:"start",children:[o.jsx("p",{style:w,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:n?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(u,{open:n,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Fa(){const[n,e]=r.useState(!1),[t,i]=r.useState(!0);return o.jsxs(h,{align:"start",children:[o.jsx("p",{style:w,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:w,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:v,children:t?"enabled":"disabled"})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:n?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>i(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ma(){const[n,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:v,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:v,children:n?"open":"closed"})]}),o.jsx(u,{open:n,onOpenChange:e,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Va(){const[n,e]=r.useState(!0),[t,i]=r.useState(""),[l,m]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:v,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:v,children:n?"open":"closed"})]}),o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:v,children:l})]}),o.jsx(u,{open:n,onOpenChange:e,onQueryChange:i,onEscapeKeyDown:()=>m(g=>g+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Ga(){const[n,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:v,children:t||"N/A"})]}),o.jsx(u,{open:n,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function za(){const[n,e]=r.useState(!0),[t,i]=r.useState("none");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>i("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>i("send-report")}]})]})}function Qa(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function _a(){const[n,e]=r.useState(!0),[t,i]=r.useState(0),[l,m]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:v,children:t})]}),o.jsxs("p",{style:w,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:v,children:l||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:v,children:n?"open":"closed"})]}),o.jsx(u,{open:n,onOpenChange:e,onQueryChange:m,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>i(g=>g+1)}]})]})}function Wa(){const[n,e]=r.useState(!0),[t,i]=r.useState(0);return r.useEffect(()=>{const l=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,onEscapeKeyDown:()=>i(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function Ja(){const[n,e]=r.useState(!1);return o.jsx(h,{align:"start",children:o.jsx(Ea,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...w},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(u,{open:n,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const V={render:()=>o.jsx(ma,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await a(i).toHaveAttribute("aria-disabled","true"),await a(i).toHaveAttribute("tabindex","-1")}},G={render:()=>o.jsx(Aa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await L(()=>{a(t).toHaveFocus()}),await c.type(t,"run"),await a(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await c.keyboard("{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},z={render:()=>o.jsx(Pa,{})},Q={render:()=>o.jsx(pa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await a(e.getByText("release")).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},_={render:()=>o.jsx(Ha,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await a(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await a(t).toHaveAttribute("aria-busy","true"),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).toHaveAttribute("aria-keyshortcuts","Escape"),await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands..."),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await a(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Finish loading commands"})),await c.click(e.getByRole("button",{name:"Reopen loading palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await a(t).not.toHaveAttribute("aria-busy"),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(e.getByRole("listbox",{name:"Command results"})).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await a(e.getByTestId("loading-selection-count")).toHaveTextContent("1")}},W={render:()=>o.jsx(ja,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=n.ownerDocument;await a(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await c.click(await e.findByRole("option",{name:"Create Spec"})),await a(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await a(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(t.body),await a(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"}));const i=e.getByRole("dialog",{name:"Command Palette"});await a(i).toBeInTheDocument(),await a(i).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close dialog"});await a(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await c.click(l),await a(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},J={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:"Command Palette",description:"Shift+Tab from search input should restore close-button focus ring fallback.",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),i=await e.findByRole("button",{name:"Close dialog"});await c.click(t),await a(t).toHaveFocus(),await c.tab({shift:!0}),await a(i).toHaveFocus(),await a(i.getAttribute("style")).toContain("var(--aurora-focus-ring)")}},X={render:()=>o.jsx(pa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await a(l).toBeTruthy(),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",l),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await c.clear(t),await c.type(t,"no-match"),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).not.toHaveAttribute("aria-controls"),await a(t).not.toHaveAttribute("aria-activedescendant"),await c.clear(t);const m=await e.findByRole("listbox",{name:"Command results"});await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",m.getAttribute("id")),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},Y={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await a(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},Z={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await a(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await a(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},ee={render:()=>o.jsx(Oa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await a(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await a(t).toHaveAttribute("aria-keyshortcuts","Escape");for(const i of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:i,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await a(l.defaultPrevented).toBe(!1)}}},te={render:()=>o.jsx(qa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await a(i).toHaveAttribute("aria-disabled","true"),await c.click(i),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("executed-count")).toHaveTextContent("0")}},ae={render:()=>o.jsx(ma,{}),play:async({canvasElement:n})=>{const t=await p(n.ownerDocument.body).findByRole("option",{name:"Create Spec"}),i=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(i),a(i.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),a(l.defaultPrevented).toBe(!0)}},ne={render:()=>o.jsx(La,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"cafe"),await a(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},oe={render:()=>o.jsx(Na,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox");await a(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await c.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},se={render:()=>o.jsx(Ka,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),x.keyDown(t,{key:"Enter",repeat:!1}),await L(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),x.keyDown(t,{key:"Enter",repeat:!0}),await L(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},re={render:()=>o.jsx(Ua,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await c.keyboard("{Control>}{Enter}{/Control}"),await c.keyboard("{Meta>}{Space}{/Meta}"),x.keyDown(t,{key:"Enter",repeat:!0}),x.keyDown(t,{key:"Spacebar",altKey:!0}),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Enter}"),await a(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},ce={render:()=>o.jsx($a,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await c.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await a(t).toBeInTheDocument(),await a(t).not.toHaveAttribute("aria-keyshortcuts"),await a(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.keyboard("{Escape}"),await a(t).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Outside target"})),await a(t).toBeInTheDocument()}},ie={render:()=>o.jsx(Fa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=n.ownerDocument;await c.click(await e.findByRole("button",{name:"Open guarded palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),x.pointerDown(t.body),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const i=e.getByRole("combobox",{name:"Search commands"});await c.clear(i),await c.type(i,"unlock"),await c.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await a(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await c.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},le={render:()=>o.jsx(Ma,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await a(e.getByTestId("query-value")).toHaveTextContent("release"),await c.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("query-value")).toHaveTextContent("N/A"),await a(e.getByTestId("open-state")).toHaveTextContent("open"),await c.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("open-state")).toHaveTextContent("closed")}},de={render:()=>o.jsx(Va,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),x.keyDown(t,{key:"Escape",repeat:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},ue={render:()=>o.jsx(Ga,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.type(t,"release"),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),x.keyDown(t,{key:"Escape",ctrlKey:!0}),x.keyDown(t,{key:"Escape",altKey:!0}),x.keyDown(t,{key:"Escape",metaKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),x.keyDown(t,{key:"Escape",shiftKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},me={render:()=>o.jsx(za,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.type(t,"search"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await c.clear(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1"));const i=t.getAttribute("aria-activedescendant");a(i).toBeTruthy();const l=n.ownerDocument.getElementById(i);await a(l).toBeInTheDocument(),await a(l).toHaveAttribute("role","option"),await a(l).not.toHaveAttribute("aria-disabled","true"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},pe={render:()=>o.jsx(Qa,{}),play:async({canvasElement:n})=>{const t=await p(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await c.click(t),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await c.keyboard("{PageDown}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),x.keyDown(t,{key:"PageDown",ctrlKey:!0}),x.keyDown(t,{key:"End",metaKey:!0}),x.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),x.keyDown(t,{key:"ArrowUp",metaKey:!0}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),await c.keyboard("{PageUp}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},ye={render:()=>o.jsx(_a,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.click(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await c.type(t,"deploy"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),x.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),x.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),x.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Te(t,"Escape"),Te(t,"ArrowDown"),Te(t,"Enter"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await a(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},we={render:()=>o.jsx(Wa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},ve={render:()=>o.jsx(Ja,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await c.click(t),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Open nested palette"})),await a(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await L(()=>{a(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await L(()=>{a(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await a(t).toHaveFocus()}};var Ke,Ue,$e;V.parameters={...V.parameters,docs:{...(Ke=V.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Fe,Me,Ve;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ge,ze,Qe;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Qe=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Qe.source}}};var _e,We,Je;Q.parameters={...Q.parameters,docs:{...(_e=Q.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Je=(We=Q.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;_.parameters={..._.parameters,docs:{...(Xe=_.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var et,tt,at;W.parameters={...W.parameters,docs:{...(et=W.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=W.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,ot,st;J.parameters={...J.parameters,docs:{...(nt=J.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
  }
}`,...(st=(ot=J.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,ct,it;X.parameters={...X.parameters,docs:{...(rt=X.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(ct=X.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var lt,dt,ut;Y.parameters={...Y.parameters,docs:{...(lt=Y.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ut=(dt=Y.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var mt,pt,yt;Z.parameters={...Z.parameters,docs:{...(mt=Z.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(pt=Z.parameters)==null?void 0:pt.docs)==null?void 0:yt.source}}};var wt,vt,gt;ee.parameters={...ee.parameters,docs:{...(wt=ee.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(gt=(vt=ee.parameters)==null?void 0:vt.docs)==null?void 0:gt.source}}};var bt,xt,ht;te.parameters={...te.parameters,docs:{...(bt=te.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(ht=(xt=te.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var ft,kt,Bt;ae.parameters={...ae.parameters,docs:{...(ft=ae.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Bt=(kt=ae.parameters)==null?void 0:kt.docs)==null?void 0:Bt.source}}};var Et,Ct,Tt;ne.parameters={...ne.parameters,docs:{...(Et=ne.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Tt=(Ct=ne.parameters)==null?void 0:Ct.docs)==null?void 0:Tt.source}}};var Dt,Rt,It;oe.parameters={...oe.parameters,docs:{...(Dt=oe.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(It=(Rt=oe.parameters)==null?void 0:Rt.docs)==null?void 0:It.source}}};var St,At,Pt;se.parameters={...se.parameters,docs:{...(St=se.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Pt=(At=se.parameters)==null?void 0:At.docs)==null?void 0:Pt.source}}};var Ht,jt,Ot;re.parameters={...re.parameters,docs:{...(Ht=re.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  render: () => <OptionActivationKeyGuardPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const option = await canvas.findByRole("option", {
      name: "Run Lint"
    });
    option.focus();
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
}`,...(Ot=(jt=re.parameters)==null?void 0:jt.docs)==null?void 0:Ot.source}}};var qt,Lt,Nt;ce.parameters={...ce.parameters,docs:{...(qt=ce.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Nt=(Lt=ce.parameters)==null?void 0:Lt.docs)==null?void 0:Nt.source}}};var Kt,Ut,$t;ie.parameters={...ie.parameters,docs:{...(Kt=ie.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...($t=(Ut=ie.parameters)==null?void 0:Ut.docs)==null?void 0:$t.source}}};var Ft,Mt,Vt;le.parameters={...le.parameters,docs:{...(Ft=le.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Vt=(Mt=le.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};var Gt,zt,Qt;de.parameters={...de.parameters,docs:{...(Gt=de.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Qt=(zt=de.parameters)==null?void 0:zt.docs)==null?void 0:Qt.source}}};var _t,Wt,Jt;ue.parameters={...ue.parameters,docs:{...(_t=ue.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Jt=(Wt=ue.parameters)==null?void 0:Wt.docs)==null?void 0:Jt.source}}};var Xt,Yt,Zt;me.parameters={...me.parameters,docs:{...(Xt=me.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(Zt=(Yt=me.parameters)==null?void 0:Yt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;pe.parameters={...pe.parameters,docs:{...(ea=pe.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=pe.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var na,oa,sa;ye.parameters={...ye.parameters,docs:{...(na=ye.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(sa=(oa=ye.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var ra,ca,ia;we.parameters={...we.parameters,docs:{...(ra=we.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(ca=we.parameters)==null?void 0:ca.docs)==null?void 0:ia.source}}};var la,da,ua;ve.parameters={...ve.parameters,docs:{...(la=ve.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ua=(da=ve.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};const mn=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","LoadingState","CloseReasonTelemetry","CloseButtonFocusIntentReentry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","PersistentSelection","OptionActivationKeyGuard","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler","NestedDismissOrder"];export{z as AiInteractionFlow,J as CloseButtonFocusIntentReentry,W as CloseReasonTelemetry,te as DisabledCommandGuard,ee as DisabledOnlyResults,X as EmptyStateAriaControlsLifecycle,le as EscapeClearsQueryFirst,we as EscapePreemptedByGlobalHandler,de as EscapeRepeatGuard,ue as EscapeShortcutHintPrecision,ie as GuardedDismissEvents,oe as IconOnlyCommandNaming,ye as ImeCompositionGuard,_ as LoadingState,Z as LocalizedDialogCopy,Y as LocalizedResultsLabel,ve as NestedDismissOrder,ce as NonDismissible,G as OpenFromTriggerKeyboardFirst,re as OptionActivationKeyGuard,ae as OptionMouseDownPolicy,pe as PagedKeyboardNavigation,se as PersistentSelection,Q as QueryTelemetry,me as RefinedSearchKeepsActiveCommand,V as SearchCommands,ne as TextValueAndAccentSearch,mn as __namedExportsOrder,un as default};
