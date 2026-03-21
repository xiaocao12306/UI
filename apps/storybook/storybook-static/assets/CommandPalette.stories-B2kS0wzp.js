import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as q}from"./Button-BMxlc9Nj.js";import{P as ua}from"./Popover-BBqjLa8s.js";import{D as ma}from"./Dialog-K52S8dow.js";import{I as pa}from"./Input-D3M9Xqpz.js";import{within as p,expect as a,userEvent as c,fireEvent as b,waitFor as O}from"./index-DgAF9SIF.js";import{b as h,s as w,a as v}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-CvOMiBFU.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function u({open:n,onOpenChange:e,commands:t,title:i="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:y="Search commands",resultsAriaLabel:k="Command results",closeOnSelect:B=!0,clearQueryOnEscape:A=!0,closeOnEscape:N=!0,closeOnOutsidePointer:ke=!0,onEscapeKeyDown:ye,onPointerDownOutside:we,closeLabel:ta,placeholder:aa="Search commands...",emptyMessage:na="No commands found.",onQueryChange:T,onCloseReason:D,getResultsStatusText:Be=va}){const[R,ve]=r.useState(""),[L,E]=r.useState(0),oa=r.useRef(null),j=r.useRef(null),K=r.useRef(null),Te=r.useRef(n);r.useRef(null),r.useRef(null),r.useRef(null);const H=r.useId(),Ee=r.useId(),Ce=r.useRef(null),sa=U(y,"Search commands"),ra=U(k,"Command results"),ca=U(ta,"Close dialog"),$=r.useCallback(s=>{K.current=s,D==null||D(s)},[D]),De=r.useCallback(s=>{$(s),e(!1),K.current=null},[$,e]),ia=r.useCallback(s=>{!s&&n&&K.current===null&&(D==null||D("close-button")),K.current=null,e(s)},[D,e,n]);r.useEffect(()=>{!n&&Te.current&&(ve(s=>(s.length>0&&(T==null||T("")),"")),E(0)),Te.current=n},[T,n]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]);const ge=r.useMemo(()=>Pe(R.trim()),[R]),m=r.useMemo(()=>ge?t.filter(s=>{const g=[ya(s),...s.keywords??[]].join(" ");return Pe(g).includes(ge)}):t,[t,ge]),C=r.useMemo(()=>m.reduce((s,d)=>d.disabled?s:s+1,0),[m]),be=m.length>0,la=r.useMemo(()=>{const s=[];return C>0&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp","Enter"),(N||A&&R.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[A,N,C,R.length]),da=r.useMemo(()=>Be({query:R,visibleCount:m.length,enabledCount:C,totalCount:t.length}),[t.length,C,m.length,Be,R]),I=r.useMemo(()=>m.reduce((s,d,g)=>(d.disabled||s.push(g),s),[]),[m]),S=I[0]??-1,Re=I[I.length-1]??-1,f=r.useMemo(()=>{if(L<0)return-1;const s=m[L];return!s||s.disabled?-1:L},[L,m]);r.useEffect(()=>{var d;if(m.length===0){j.current=null,E(-1);return}const s=j.current;if(s){const g=m.findIndex(P=>!P.disabled&&P.key===s);if(g>=0){E(g);return}}E(S),j.current=S>=0?((d=m[S])==null?void 0:d.key)??null:null},[m,S]),r.useEffect(()=>{var s;if(f<0){j.current=null;return}j.current=((s=m[f])==null?void 0:s.key)??null},[m,f]),r.useEffect(()=>{if(!n||f<0)return;const s=Ce.current;if(!s)return;const d=s.ownerDocument.getElementById(`${H}-option-${f}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[H,n,f]);const xe=r.useCallback(s=>{var g;const d=m[s];!d||d.disabled||((g=d.onSelect)==null||g.call(d),B&&De("item-select"))},[B,De,m]),Ie=s=>{var g;if(m.length===0)return;let d=f<0?s===1?-1:0:f;for(let P=0;P<m.length;P+=1)if(d=(d+s+m.length)%m.length,!((g=m[d])!=null&&g.disabled)){E(d);return}},Se=s=>{if(I.length===0)return;const d=I.indexOf(f);if(d<0){E(s===1?S:Re);return}const g=Math.min(I.length-1,Math.max(0,d+s*5));E(I[g]??S)};return o.jsx(ma,{open:n,onOpenChange:ia,title:i,description:l,closeLabel:ca,size:"md",closeOnEscape:N,closeOnOutsidePointer:ke,onEscapeKeyDown:s=>{ye==null||ye(s),!(s.defaultPrevented||!N)&&$("escape-key")},onPointerDownOutside:s=>{we==null||we(s),!(s.defaultPrevented||!ke)&&$("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(pa,{ref:oa,"data-autofocus":"",role:"combobox","aria-expanded":be,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":be?H:void 0,"aria-activedescendant":f>=0?`${H}-option-${f}`:void 0,"aria-describedby":Ee,"aria-keyshortcuts":la,placeholder:aa,value:R,onChange:s=>{ve(s.target.value),T==null||T(s.target.value)},onKeyDown:s=>{if(!wa(s)&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"){if(s.repeat)return;A&&R.length>0&&(s.preventDefault(),ve(""),T==null||T(""));return}if(s.key==="ArrowDown"){if(C===0)return;s.preventDefault(),Ie(1);return}if(s.key==="ArrowUp"){if(C===0)return;s.preventDefault(),Ie(-1);return}if(s.key==="Home"){if(C===0)return;s.preventDefault(),E(S);return}if(s.key==="End"){if(C===0)return;s.preventDefault(),E(Re);return}if(s.key==="PageDown"){if(C===0)return;s.preventDefault(),Se(1);return}if(s.key==="PageUp"){if(C===0)return;s.preventDefault(),Se(-1);return}if(s.key==="Enter"&&f>=0){if(s.preventDefault(),s.repeat)return;xe(f)}}},"aria-label":sa}),o.jsx("p",{id:Ee,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:da}),be?o.jsx("div",{id:H,ref:Ce,role:"listbox","aria-label":ra,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:m.map((s,d)=>{const g=d===f,P=U(s.ariaLabel);return o.jsx("div",{id:`${H}-option-${d}`,role:"option","aria-selected":g,"aria-disabled":s.disabled||void 0,"aria-label":P,"aria-posinset":d+1,"aria-setsize":m.length,tabIndex:-1,onPointerDown:x=>{x.pointerType==="mouse"||x.button!==0||x.preventDefault()},onMouseDown:x=>{x.button===0&&x.preventDefault()},onMouseEnter:()=>{s.disabled||E(d)},onClick:()=>{s.disabled||xe(d)},onKeyDown:x=>{if(!s.disabled&&!(x.altKey||x.ctrlKey||x.metaKey)&&(x.key==="Enter"||x.key===" "||x.key==="Space"||x.key==="Spacebar")){if(x.preventDefault(),x.repeat)return;xe(d)}},style:{border:"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},s.key)})}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:na})]})})}function ya(n){if(typeof n.textValue=="string"){const e=pe(n.textValue);if(e.length>0)return e}return pe(he(n.label))}function Pe(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function wa(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function va({query:n,visibleCount:e,enabledCount:t,totalCount:i}){const l=n.trim();return l.length===0?t!==i?`${t} of ${i} command${i===1?"":"s"} available.`:`${i} command${i===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function he(n){if(typeof n=="string")return n;if(typeof n=="number")return String(n);if(Array.isArray(n))return pe(n.map(t=>he(t)).filter(t=>t.length>0).join(" "));if(!r.isValidElement(n))return"";const e=n.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?pe(e["aria-label"]):he(e.children)}function U(n,e){return typeof n=="string"&&n.trim().length>0?n.trim():e}function pe(n){return n.replace(/\s+/g," ").trim()}u.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const fe=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Wa={title:"AI/CommandPalette",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:fe}};function Zt(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,commands:fe,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function ga(){const[n,e]=r.useState(!1),[t,i]=r.useState("none");return o.jsxs(h,{align:"start",children:[o.jsxs("p",{style:w,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:v,children:t})]}),o.jsx(q,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>i("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>i("Open Theme Pack")}]})]})}function ba(){const[n,e]=r.useState(!0),[t,i]=r.useState("None"),l=fe.map(y=>({...y,onSelect:()=>i(typeof y.textValue=="string"?y.textValue:typeof y.label=="string"?y.label:y.key)}));return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Last AI action:"," ",o.jsx("strong",{style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,commands:l})]})}function ea(){const[n,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:v,children:t||"N/A"})]}),o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:i,getResultsStatusText:({query:l,visibleCount:y,enabledCount:k})=>l.trim().length===0?"Command search ready.":`${k}/${y} actionable AI workflow match${y===1?"":"es"} for ${l}`})]})}function xa(){const[n,e]=r.useState(!0),[t,i]=r.useState("none"),[l,y]=r.useState("N/A"),k=r.useCallback(B=>{y(A=>A==="N/A"?B:`${A} -> ${B}`)},[]);return o.jsxs(h,{align:"start",children:[o.jsxs("p",{style:w,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:v,children:t})]}),o.jsxs("p",{style:w,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:v,children:l})]}),o.jsx(q,{size:"sm",variant:"outline",onClick:()=>{y("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(u,{open:n,onOpenChange:B=>{e(B),B||k("open:false")},onCloseReason:B=>{i(B),k(`reason:${B}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>k("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>k("select")}]})]})}function ha(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function fa(){const[n,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>i(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>i(l=>l+1)}],placeholder:"Try searching publish..."})]})}function ka(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Ba(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function Ta(){const[n,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>i(l=>l+1)}]})]})}function Ea(){const[n,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function Ca(){const[n,e]=r.useState(!1);return o.jsxs(h,{align:"start",children:[o.jsx("p",{style:w,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(q,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:n?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(u,{open:n,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Da(){const[n,e]=r.useState(!1),[t,i]=r.useState(!0);return o.jsxs(h,{align:"start",children:[o.jsx("p",{style:w,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:w,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:v,children:t?"enabled":"disabled"})]}),o.jsx(q,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:n?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>i(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ra(){const[n,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:v,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:v,children:n?"open":"closed"})]}),o.jsx(u,{open:n,onOpenChange:e,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Ia(){const[n,e]=r.useState(!0),[t,i]=r.useState(""),[l,y]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:v,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:v,children:n?"open":"closed"})]}),o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:v,children:l})]}),o.jsx(u,{open:n,onOpenChange:e,onQueryChange:i,onEscapeKeyDown:()=>y(k=>k+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Sa(){const[n,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:v,children:t||"N/A"})]}),o.jsx(u,{open:n,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Pa(){const[n,e]=r.useState(!0),[t,i]=r.useState("none");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>i("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>i("send-report")}]})]})}function Aa(){const[n,e]=r.useState(!0);return o.jsx(u,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Ha(){const[n,e]=r.useState(!0),[t,i]=r.useState(0),[l,y]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:v,children:t})]}),o.jsxs("p",{style:w,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:v,children:l||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:v,children:n?"open":"closed"})]}),o.jsx(u,{open:n,onOpenChange:e,onQueryChange:y,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>i(k=>k+1)}]})]})}function ja(){const[n,e]=r.useState(!0),[t,i]=r.useState(0);return r.useEffect(()=>{const l=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(h,{children:[o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:v,children:t})]}),o.jsx(u,{open:n,onOpenChange:e,onEscapeKeyDown:()=>i(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function Oa(){const[n,e]=r.useState(!1);return o.jsx(h,{align:"start",children:o.jsx(ua,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...w},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(q,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(u,{open:n,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const M={render:()=>o.jsx(Zt,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await a(i).toHaveAttribute("aria-disabled","true"),await a(i).toHaveAttribute("tabindex","-1")}},V={render:()=>o.jsx(ga,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await O(()=>{a(t).toHaveFocus()}),await c.type(t,"run"),await a(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await c.keyboard("{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},F={render:()=>o.jsx(ba,{})},G={render:()=>o.jsx(ea,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await a(e.getByText("release")).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},z={render:()=>o.jsx(xa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=n.ownerDocument;await a(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await c.click(await e.findByRole("option",{name:"Create Spec"})),await a(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await a(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(t.body),await a(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"}));const i=e.getByRole("dialog",{name:"Command Palette"});await a(i).toBeInTheDocument(),await a(i).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close dialog"});await a(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await c.click(l),await a(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},Q={render:()=>o.jsx(ea,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await a(l).toBeTruthy(),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",l),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await c.clear(t),await c.type(t,"no-match"),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).not.toHaveAttribute("aria-controls"),await a(t).not.toHaveAttribute("aria-activedescendant"),await c.clear(t);const y=await e.findByRole("listbox",{name:"Command results"});await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",y.getAttribute("id")),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},_={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await a(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},W={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await a(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await a(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},J={render:()=>o.jsx(ha,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await a(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await a(t).toHaveAttribute("aria-keyshortcuts","Escape");for(const i of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:i,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await a(l.defaultPrevented).toBe(!1)}}},X={render:()=>o.jsx(fa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await a(i).toHaveAttribute("aria-disabled","true"),await c.click(i),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("executed-count")).toHaveTextContent("0")}},Y={render:()=>o.jsx(Zt,{}),play:async({canvasElement:n})=>{const t=await p(n.ownerDocument.body).findByRole("option",{name:"Create Spec"}),i=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(i),a(i.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),a(l.defaultPrevented).toBe(!0)}},Z={render:()=>o.jsx(ka,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"cafe"),await a(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},ee={render:()=>o.jsx(Ba,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox");await a(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await c.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},te={render:()=>o.jsx(Ta,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),b.keyDown(t,{key:"Enter",repeat:!1}),await O(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),b.keyDown(t,{key:"Enter",repeat:!0}),await O(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},ae={render:()=>o.jsx(Ea,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await c.keyboard("{Control>}{Enter}{/Control}"),await c.keyboard("{Meta>}{Space}{/Meta}"),b.keyDown(t,{key:"Enter",repeat:!0}),b.keyDown(t,{key:"Spacebar",altKey:!0}),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Enter}"),await a(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},ne={render:()=>o.jsx(Ca,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await c.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await a(t).toBeInTheDocument(),await a(t).not.toHaveAttribute("aria-keyshortcuts"),await a(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.keyboard("{Escape}"),await a(t).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Outside target"})),await a(t).toBeInTheDocument()}},oe={render:()=>o.jsx(Da,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=n.ownerDocument;await c.click(await e.findByRole("button",{name:"Open guarded palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),b.pointerDown(t.body),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const i=e.getByRole("combobox",{name:"Search commands"});await c.clear(i),await c.type(i,"unlock"),await c.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await a(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await c.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},se={render:()=>o.jsx(Ra,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await a(e.getByTestId("query-value")).toHaveTextContent("release"),await c.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("query-value")).toHaveTextContent("N/A"),await a(e.getByTestId("open-state")).toHaveTextContent("open"),await c.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("open-state")).toHaveTextContent("closed")}},re={render:()=>o.jsx(Ia,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),b.keyDown(t,{key:"Escape",repeat:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},ce={render:()=>o.jsx(Sa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.type(t,"release"),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),b.keyDown(t,{key:"Escape",ctrlKey:!0}),b.keyDown(t,{key:"Escape",altKey:!0}),b.keyDown(t,{key:"Escape",metaKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),b.keyDown(t,{key:"Escape",shiftKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},ie={render:()=>o.jsx(Pa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.type(t,"search"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await c.clear(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1"));const i=t.getAttribute("aria-activedescendant");a(i).toBeTruthy();const l=n.ownerDocument.getElementById(i);await a(l).toBeInTheDocument(),await a(l).toHaveAttribute("role","option"),await a(l).not.toHaveAttribute("aria-disabled","true"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},le={render:()=>o.jsx(Aa,{}),play:async({canvasElement:n})=>{const t=await p(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await c.click(t),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await c.keyboard("{PageDown}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),b.keyDown(t,{key:"PageDown",ctrlKey:!0}),b.keyDown(t,{key:"End",metaKey:!0}),b.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),b.keyDown(t,{key:"ArrowUp",metaKey:!0}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),await c.keyboard("{PageUp}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},de={render:()=>o.jsx(Ha,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.click(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await c.type(t,"deploy"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),b.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),b.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),b.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await a(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},ue={render:()=>o.jsx(ja,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},me={render:()=>o.jsx(Oa,{}),play:async({canvasElement:n})=>{const e=p(n.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await c.click(t),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Open nested palette"})),await a(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await O(()=>{a(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await O(()=>{a(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await a(t).toHaveFocus()}};var Ae,He,je;M.parameters={...M.parameters,docs:{...(Ae=M.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(je=(He=M.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var Oe,qe,Ne;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ne=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Le,Ke,$e;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...($e=(Ke=F.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var Ue,Me,Ve;G.parameters={...G.parameters,docs:{...(Ue=G.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Fe,Ge,ze;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(ze=(Ge=z.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Qe,_e,We;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(We=(_e=Q.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Je,Xe,Ye;_.parameters={..._.parameters,docs:{...(Je=_.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=_.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;W.parameters={...W.parameters,docs:{...(Ze=W.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=W.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;J.parameters={...J.parameters,docs:{...(at=J.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=J.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,ct;X.parameters={...X.parameters,docs:{...(st=X.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(rt=X.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var it,lt,dt;Y.parameters={...Y.parameters,docs:{...(it=Y.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(dt=(lt=Y.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,pt;Z.parameters={...Z.parameters,docs:{...(ut=Z.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(mt=Z.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var yt,wt,vt;ee.parameters={...ee.parameters,docs:{...(yt=ee.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(vt=(wt=ee.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};var gt,bt,xt;te.parameters={...te.parameters,docs:{...(gt=te.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(xt=(bt=te.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var ht,ft,kt;ae.parameters={...ae.parameters,docs:{...(ht=ae.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(kt=(ft=ae.parameters)==null?void 0:ft.docs)==null?void 0:kt.source}}};var Bt,Tt,Et;ne.parameters={...ne.parameters,docs:{...(Bt=ne.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Et=(Tt=ne.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var Ct,Dt,Rt;oe.parameters={...oe.parameters,docs:{...(Ct=oe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Rt=(Dt=oe.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source}}};var It,St,Pt;se.parameters={...se.parameters,docs:{...(It=se.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Pt=(St=se.parameters)==null?void 0:St.docs)==null?void 0:Pt.source}}};var At,Ht,jt;re.parameters={...re.parameters,docs:{...(At=re.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(jt=(Ht=re.parameters)==null?void 0:Ht.docs)==null?void 0:jt.source}}};var Ot,qt,Nt;ce.parameters={...ce.parameters,docs:{...(Ot=ce.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Nt=(qt=ce.parameters)==null?void 0:qt.docs)==null?void 0:Nt.source}}};var Lt,Kt,$t;ie.parameters={...ie.parameters,docs:{...(Lt=ie.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...($t=(Kt=ie.parameters)==null?void 0:Kt.docs)==null?void 0:$t.source}}};var Ut,Mt,Vt;le.parameters={...le.parameters,docs:{...(Ut=le.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Vt=(Mt=le.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};var Ft,Gt,zt;de.parameters={...de.parameters,docs:{...(Ft=de.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(zt=(Gt=de.parameters)==null?void 0:Gt.docs)==null?void 0:zt.source}}};var Qt,_t,Wt;ue.parameters={...ue.parameters,docs:{...(Qt=ue.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Wt=(_t=ue.parameters)==null?void 0:_t.docs)==null?void 0:Wt.source}}};var Jt,Xt,Yt;me.parameters={...me.parameters,docs:{...(Jt=me.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Yt=(Xt=me.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};const Ja=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","PersistentSelection","OptionActivationKeyGuard","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler","NestedDismissOrder"];export{F as AiInteractionFlow,z as CloseReasonTelemetry,X as DisabledCommandGuard,J as DisabledOnlyResults,Q as EmptyStateAriaControlsLifecycle,se as EscapeClearsQueryFirst,ue as EscapePreemptedByGlobalHandler,re as EscapeRepeatGuard,ce as EscapeShortcutHintPrecision,oe as GuardedDismissEvents,ee as IconOnlyCommandNaming,de as ImeCompositionGuard,W as LocalizedDialogCopy,_ as LocalizedResultsLabel,me as NestedDismissOrder,ne as NonDismissible,V as OpenFromTriggerKeyboardFirst,ae as OptionActivationKeyGuard,Y as OptionMouseDownPolicy,le as PagedKeyboardNavigation,te as PersistentSelection,G as QueryTelemetry,ie as RefinedSearchKeepsActiveCommand,M as SearchCommands,Z as TextValueAndAccentSearch,Ja as __namedExportsOrder,Wa as default};
