import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as O}from"./Button-DirECuRH.js";import{P as ln}from"./Popover-Bmp3DcW1.js";import{D as dn}from"./Dialog-C3SCykZ4.js";import{I as un}from"./Input-CMwa0OIu.js";import{within as u,userEvent as i,expect as a,fireEvent as k,waitFor as L}from"./index-DgAF9SIF.js";import{b as v,s as w,a as b}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-0MVldSzJ.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:n,onOpenChange:e,commands:t,title:c="Command Palette",description:l="Quickly search and execute workspace actions.",ariaLabel:p,ariaLabelledBy:h,searchAriaLabel:E="Search commands",resultsAriaLabel:K="Command results",closeOnSelect:qe=!0,clearQueryOnEscape:De=!0,closeOnEscape:F=!0,closeOnOutsidePointer:Le=!0,onEscapeKeyDown:Re,onPointerDownOutside:Ie,closeLabel:_a,placeholder:Wa="Search commands...",loading:D=!1,loadingContent:$="Loading commands...",emptyMessage:Ne="No commands found.",onQueryChange:C,onCloseReason:R,getResultsStatusText:Ke=yn}){const[I,Se]=r.useState(""),[U,T]=r.useState(0),Ja=r.useRef(null),q=r.useRef(null),M=r.useRef(null),Fe=r.useRef(n);r.useRef(null),r.useRef(null),r.useRef(null);const j=r.useId(),$e=r.useId(),Ue=r.useRef(null),Xa=H(E,"Search commands"),Ya=H(K,"Command results"),Za=H(_a,"Close dialog"),Me=H(h),en=Me===void 0?H(p):void 0,Ve=r.useMemo(()=>wn($),[$]),tn=Xe($)?$:"Loading commands...",an=Xe(Ne)?Ne:"No commands found.",V=r.useCallback(s=>{M.current=s,R==null||R(s)},[R]),Ge=r.useCallback(s=>{V(s),e(!1),M.current=null},[V,e]),nn=r.useCallback(s=>{!s&&n&&M.current===null&&(R==null||R("close-button")),M.current=null,e(s)},[R,e,n]);r.useEffect(()=>{!n&&Fe.current&&(Se(s=>(s.length>0&&(C==null||C("")),"")),T(0)),Fe.current=n},[C,n]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]);const Ae=r.useMemo(()=>Je(I.trim()),[I]),y=r.useMemo(()=>Ae?t.filter(s=>{const g=[mn(s),...s.keywords??[]].join(" ");return Je(g).includes(Ae)}):t,[t,Ae]),on=r.useMemo(()=>{const s=new Map;return y.map((d,g)=>{const B=s.get(d.key)??0;return s.set(d.key,B+1),B===0?d.key:`${d.key}__dup-${g}`})},[y]),G=r.useMemo(()=>y.reduce((s,d)=>d.disabled?s:s+1,0),[y]),S=!D&&G>1,ze=!D&&G>0,Pe=!D&&y.length>0,sn=r.useMemo(()=>{const s=[];return S&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp"),ze&&s.push("Enter"),(F||De&&I.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[ze,S,De,F,I.length]),rn=r.useMemo(()=>D?Ve:Ke({query:I,visibleCount:y.length,enabledCount:G,totalCount:t.length}),[t.length,G,y.length,Ke,D,I,Ve]),A=r.useMemo(()=>y.reduce((s,d,g)=>(d.disabled||s.push(g),s),[]),[y]),P=A[0]??-1,Qe=A[A.length-1]??-1,f=r.useMemo(()=>{if(U<0)return-1;const s=y[U];return!s||s.disabled?-1:U},[U,y]);r.useEffect(()=>{var d;if(y.length===0){q.current=null,T(-1);return}const s=q.current;if(s){const g=y.findIndex(B=>!B.disabled&&B.key===s);if(g>=0){T(g);return}}T(P),q.current=P>=0?((d=y[P])==null?void 0:d.key)??null:null},[y,P]),r.useEffect(()=>{var s;if(f<0){q.current=null;return}q.current=((s=y[f])==null?void 0:s.key)??null},[y,f]),r.useEffect(()=>{if(!n||f<0)return;const s=Ue.current;if(!s)return;const d=s.ownerDocument.getElementById(`${j}-option-${f}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[j,n,f]);const He=r.useCallback(s=>{var g;const d=y[s];!d||d.disabled||((g=d.onSelect)==null||g.call(d),qe&&Ge("item-select"))},[qe,Ge,y]),_e=s=>{var g;if(y.length===0)return;let d=f<0?s===1?-1:0:f;for(let B=0;B<y.length;B+=1)if(d=(d+s+y.length)%y.length,!((g=y[d])!=null&&g.disabled)){T(d);return}},We=s=>{if(A.length===0)return;const d=A.indexOf(f);if(d<0){T(s===1?P:Qe);return}const g=Math.min(A.length-1,Math.max(0,d+s*5));T(A[g]??P)};return o.jsx(dn,{open:n,onOpenChange:nn,title:c,description:l,ariaLabel:en,ariaLabelledBy:Me,closeLabel:Za,size:"md",closeOnEscape:F,closeOnOutsidePointer:Le,onEscapeKeyDown:s=>{Re==null||Re(s),!(s.defaultPrevented||!F)&&V("escape-key")},onPointerDownOutside:s=>{Ie==null||Ie(s),!(s.defaultPrevented||!Le)&&V("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(un,{ref:Ja,"data-autofocus":"",role:"combobox","aria-busy":D||void 0,"aria-expanded":Pe,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":Pe?j:void 0,"aria-activedescendant":!D&&f>=0?`${j}-option-${f}`:void 0,"aria-describedby":$e,"aria-keyshortcuts":sn,placeholder:Wa,value:I,onChange:s=>{Se(s.target.value),C==null||C(s.target.value)},onKeyDown:s=>{if(!pn(s)&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"){if(s.repeat)return;De&&I.length>0&&(s.preventDefault(),Se(""),C==null||C(""));return}if(s.key==="ArrowDown"){if(!S)return;s.preventDefault(),_e(1);return}if(s.key==="ArrowUp"){if(!S)return;s.preventDefault(),_e(-1);return}if(s.key==="Home"){if(!S)return;s.preventDefault(),T(P);return}if(s.key==="End"){if(!S)return;s.preventDefault(),T(Qe);return}if(s.key==="PageDown"){if(!S)return;s.preventDefault(),We(1);return}if(s.key==="PageUp"){if(!S)return;s.preventDefault(),We(-1);return}if(s.key==="Enter"&&!D&&f>=0){if(s.preventDefault(),s.repeat)return;He(f)}}},"aria-label":Xa}),o.jsx("p",{id:$e,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:rn}),D?o.jsx("p",{"data-testid":"command-palette-loading-content",style:{margin:0,color:"var(--aurora-text-secondary)"},children:tn}):Pe?o.jsx("div",{id:j,ref:Ue,role:"listbox","aria-label":Ya,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:y.map((s,d)=>{const g=d===f,B=H(s.ariaLabelledBy),cn=B?void 0:H(s.ariaLabel);return o.jsx("div",{id:`${j}-option-${d}`,role:"option","aria-selected":g,"aria-disabled":s.disabled||void 0,"aria-labelledby":B,"aria-label":cn,"aria-keyshortcuts":s.disabled?void 0:"Enter Space","aria-posinset":d+1,"aria-setsize":y.length,tabIndex:-1,onPointerDown:x=>{x.pointerType==="mouse"||!bn(x.button)||x.ctrlKey||x.preventDefault()},onMouseDown:x=>{x.button!==0||x.ctrlKey||x.preventDefault()},onMouseEnter:()=>{s.disabled||T(d)},onClick:()=>{s.disabled||He(d)},onKeyDown:x=>{if(!s.disabled&&!(x.altKey||x.ctrlKey||x.metaKey)&&(x.key==="Enter"||x.key===" "||x.key==="Space"||x.key==="Spacebar")){if(x.preventDefault(),x.repeat)return;He(d)}},style:{border:"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},on[d]??`${s.key}__dup-${d}`)})}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:an})]})})}function mn(n){if(typeof n.textValue=="string"){const e=N(n.textValue);if(e.length>0)return e}return N(Te(n.label))}function Je(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function pn(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function yn({query:n,visibleCount:e,enabledCount:t,totalCount:c}){const l=n.trim();return l.length===0?t!==c?`${t} of ${c} command${c===1?"":"s"} available.`:`${c} command${c===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function wn(n){const e=N(Te(n));return e.length>0?e:"Loading commands..."}function Xe(n){return n==null||typeof n=="boolean"?!1:typeof n=="string"?n.trim().length>0:!0}function Te(n){if(typeof n=="string")return n;if(typeof n=="number")return String(n);if(Array.isArray(n))return N(n.map(t=>Te(t)).filter(t=>t.length>0).join(" "));if(!r.isValidElement(n))return"";const e=n.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?N(e["aria-label"]):Te(e.children)}function H(n,e){return typeof n=="string"&&n.trim().length>0?n.trim():e}function bn(n){return typeof n!="number"||n<=0}function N(n){return n.replace(/\s+/g," ").trim()}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const je=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Yn={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:je}};function Oe(n,e){const t=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),n.dispatchEvent(t)}function za(){const[n,e]=r.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:je,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function gn(){const[n,e]=r.useState(!1),[t,c]=r.useState("none");return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:w,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:b,children:t})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>c("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>c("Open Theme Pack")}]})]})}function vn(){const[n,e]=r.useState(!0),[t,c]=r.useState("None"),l=je.map(p=>({...p,onSelect:()=>c(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Last AI action: ",o.jsx("strong",{style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,commands:l})]})}function Qa(){const[n,e]=r.useState(!0),[t,c]=r.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:b,children:t||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:c,getResultsStatusText:({query:l,visibleCount:p,enabledCount:h})=>l.trim().length===0?"Command search ready.":`${h}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function hn(){const[n,e]=r.useState(!0),[t,c]=r.useState(!0),[l,p]=r.useState(0);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:w,children:["Executed commands while ready:"," ",o.jsx("strong",{"data-testid":"loading-selection-count",style:b,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>c(h=>!h),children:t?"Finish loading commands":"Re-enable loading commands"}),o.jsx(O,{size:"sm",variant:"ghost",onClick:()=>e(!0),children:"Reopen loading palette"}),o.jsx(m,{open:n,onOpenChange:e,loading:t,loadingContent:"Syncing AI workflow commands...",closeOnSelect:!1,commands:[{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>p(h=>h+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"],onSelect:()=>p(h=>h+1)}]})]})}function xn(){const[n,e]=r.useState(!0),[t,c]=r.useState("none"),[l,p]=r.useState("N/A"),h=r.useCallback(E=>{p(K=>K==="N/A"?E:`${K} -> ${E}`)},[]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:w,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:b,children:t})]}),o.jsxs("p",{style:w,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:b,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(m,{open:n,onOpenChange:E=>{e(E),E||h("open:false")},onCloseReason:E=>{c(E),h(`reason:${E}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>h("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>h("select")}]})]})}function kn(){const[n,e]=r.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function fn(){const[n,e]=r.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}]})}function Bn(){const[n,e]=r.useState(!0),[t,c]=r.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>c(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>c(l=>l+1)}],placeholder:"Try searching publish..."})]})}function En(){const[n,e]=r.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Cn(){const[n,e]=r.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function Tn(){const[n,e]=r.useState(!0);return o.jsxs(v,{children:[o.jsx("h3",{id:"deploy-command-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Deploy Release"}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Fallback deploy command",ariaLabelledBy:"deploy-command-heading",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})]})}function Dn(){const[n,e]=r.useState(!0),[t,c]=r.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>c(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>c(l=>l+1)}]})]})}function Rn(){const[n,e]=r.useState(!0),[t,c]=r.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>c(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function In(){const[n,e]=r.useState(!1);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:w,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:n?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:n,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Sn(){const[n,e]=r.useState(!1),[t,c]=r.useState(!0);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:w,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:w,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:b,children:t?"enabled":"disabled"})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:n?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>c(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function An(){const[n,e]=r.useState(!0),[t,c]=r.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:b,children:n?"open":"closed"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:c,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Pn(){const[n,e]=r.useState(!0),[t,c]=r.useState(""),[l,p]=r.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:b,children:n?"open":"closed"})]}),o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:b,children:l})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:c,onEscapeKeyDown:()=>p(h=>h+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Hn(){const[n,e]=r.useState(!0),[t,c]=r.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:b,children:t||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:c,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function On(){const[n,e]=r.useState(!0),[t,c]=r.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>c("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>c("send-report")}]})]})}function jn(){const[n,e]=r.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function qn(){const[n,e]=r.useState(!0),[t,c]=r.useState(0),[l,p]=r.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:b,children:t})]}),o.jsxs("p",{style:w,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:b,children:l||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:b,children:n?"open":"closed"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>c(h=>h+1)}]})]})}function Ln(){const[n,e]=r.useState(!0),[t,c]=r.useState(0);return r.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,onEscapeKeyDown:()=>c(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function Nn(){const[n,e]=r.useState(!1);return o.jsx(v,{align:"start",children:o.jsx(ln,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...w},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(m,{open:n,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const z={render:()=>o.jsx(za,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const c=e.getByRole("option",{name:"Publish Release"});await a(c).toHaveAttribute("aria-disabled","true"),await a(c).toHaveAttribute("tabindex","-1")}},Q={render:()=>o.jsx(gn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await L(()=>{a(t).toHaveFocus()}),await i.type(t,"run"),await a(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},_={render:()=>o.jsx(vn,{})},W={render:()=>o.jsx(Qa,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},J={render:()=>o.jsx(hn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await a(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await a(t).toHaveAttribute("aria-busy","true"),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).toHaveAttribute("aria-keyshortcuts","Escape"),await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands..."),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Finish loading commands"})),await i.click(e.getByRole("button",{name:"Reopen loading palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await a(t).not.toHaveAttribute("aria-busy"),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(e.getByRole("listbox",{name:"Command results"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.getByTestId("loading-selection-count")).toHaveTextContent("1")}},X={args:{open:!0,loading:!0,loadingContent:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings"}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands..."),await a(e.getByRole("status")).toHaveTextContent("Loading commands...")}},Y={args:{open:!0,emptyMessage:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"no-match"),await a(e.getByText("No commands found.")).toBeInTheDocument()}},Z={args:{open:!0,loading:!0,loadingContent:0,onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("0"),await a(e.getByRole("status")).toHaveTextContent("0")}},ee={render:()=>o.jsx(xn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=n.ownerDocument;await a(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await a(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await i.click(t.body),await a(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"}));const c=e.getByRole("dialog",{name:"Command Palette"});await a(c).toBeInTheDocument(),await a(c).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close dialog"});await a(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.click(l),await a(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},te={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"Command Palette",description:"Shift+Tab from search input should restore close-button focus ring fallback.",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),c=await e.findByRole("button",{name:"Close dialog"});await i.click(t),await a(t).toHaveFocus(),await i.tab({shift:!0}),await a(c).toHaveFocus(),await a(c.getAttribute("style")).toContain("var(--aurora-focus-ring)"),k.mouseDown(c,{button:0,ctrlKey:!0}),await a(c.getAttribute("style")).toContain("var(--aurora-focus-ring)")}},ae={render:()=>o.jsx(Qa,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await a(l).toBeTruthy(),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",l),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.clear(t),await i.type(t,"no-match"),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).not.toHaveAttribute("aria-controls"),await a(t).not.toHaveAttribute("aria-activedescendant"),await i.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",p.getAttribute("id")),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},ne={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},oe={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await a(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await a(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},se={render:()=>o.jsxs(v,{align:"start",children:[o.jsx("h3",{id:"command-palette-heading",style:{margin:0},children:"AI release command center"}),o.jsx(m,{open:!0,onOpenChange:()=>{},title:o.jsx("span",{"aria-hidden":!0,children:"⌘"}),ariaLabel:"Fallback AI command center",ariaLabelledBy:"command-palette-heading",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]})]}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("dialog",{name:"AI release command center"});await a(t).toHaveAttribute("aria-labelledby","command-palette-heading"),await a(t).not.toHaveAttribute("aria-label")}},re={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:0,description:0,commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),c=(await e.findByRole("dialog",{name:"0"})).getAttribute("aria-describedby");await a(c).toBeTruthy(),await a(e.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},ce={render:()=>o.jsx(kn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await a(t).toHaveAttribute("aria-keyshortcuts","Escape");for(const c of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:c,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await a(l.defaultPrevented).toBe(!1)}}},ie={render:()=>o.jsx(fn,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-keyshortcuts","Enter Escape");const c=t.getAttribute("aria-activedescendant");a(c).toBeTruthy();for(const l of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const p=new KeyboardEvent("keydown",{key:l,bubbles:!0,cancelable:!0});t.dispatchEvent(p),await a(p.defaultPrevented).toBe(!1)}await a(t.getAttribute("aria-activedescendant")).toBe(c)}},le={render:()=>o.jsx(Bn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const c=e.getByRole("option",{name:"Publish Release"});await a(c).toHaveAttribute("aria-disabled","true"),await a(c).not.toHaveAttribute("aria-keyshortcuts"),await i.click(c),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("executed-count")).toHaveTextContent("0")}},de={render:()=>o.jsx(za,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("option",{name:"Create Spec"}),c=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(c),a(c.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),a(l.defaultPrevented).toBe(!0)}},ue={render:()=>o.jsx(En,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await a(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},me={render:()=>o.jsx(Cn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox");await a(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},pe={render:()=>o.jsx(Tn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox"),c=e.getByRole("option",{name:"Deploy Release"});await a(c).toHaveAttribute("aria-labelledby","deploy-command-heading"),await a(c).not.toHaveAttribute("aria-label"),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ye={render:()=>o.jsx(Dn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),k.keyDown(t,{key:"Enter",repeat:!1}),await L(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),k.keyDown(t,{key:"Enter",repeat:!0}),await L(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},we={render:()=>o.jsx(Rn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await a(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await i.keyboard("{Control>}{Enter}{/Control}"),await i.keyboard("{Meta>}{Space}{/Meta}"),k.keyDown(t,{key:"Enter",repeat:!0}),k.keyDown(t,{key:"Spacebar",altKey:!0}),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await a(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},be={render:()=>o.jsx(In,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await a(t).toBeInTheDocument(),await a(t).not.toHaveAttribute("aria-keyshortcuts"),await a(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await a(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await a(t).toBeInTheDocument()}},ge={render:()=>o.jsx(Sn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=n.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),k.pointerDown(t.body),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const c=e.getByRole("combobox",{name:"Search commands"});await i.clear(c),await i.type(c,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await a(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},ve={render:()=>o.jsx(An,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("query-value")).toHaveTextContent("N/A"),await a(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("open-state")).toHaveTextContent("closed")}},he={render:()=>o.jsx(Pn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),k.keyDown(t,{key:"Escape",repeat:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},xe={render:()=>o.jsx(Hn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.type(t,"release"),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await a(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),k.keyDown(t,{key:"Escape",ctrlKey:!0}),k.keyDown(t,{key:"Escape",altKey:!0}),k.keyDown(t,{key:"Escape",metaKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),k.keyDown(t,{key:"Escape",shiftKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},ke={render:()=>o.jsx(On,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.clear(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1"));const c=t.getAttribute("aria-activedescendant");a(c).toBeTruthy();const l=n.ownerDocument.getElementById(c);await a(l).toBeInTheDocument(),await a(l).toHaveAttribute("role","option"),await a(l).not.toHaveAttribute("aria-disabled","true"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},fe={render:()=>o.jsx(jn,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.keyboard("{PageDown}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),k.keyDown(t,{key:"PageDown",ctrlKey:!0}),k.keyDown(t,{key:"End",metaKey:!0}),k.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),k.keyDown(t,{key:"ArrowUp",metaKey:!0}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),await i.keyboard("{PageUp}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},Be={render:()=>o.jsx(qn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.type(t,"deploy"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),k.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),k.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),k.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Oe(t,"Escape"),Oe(t,"ArrowDown"),Oe(t,"Enter"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await a(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},Ee={render:()=>o.jsx(Ln,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},Ce={render:()=>o.jsx(Nn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await i.click(t),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Open nested palette"})),await a(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await L(()=>{a(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await L(()=>{a(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await a(t).toHaveFocus()}};var Ye,Ze,et;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(et=(Ze=z.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;Q.parameters={...Q.parameters,docs:{...(tt=Q.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=Q.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,st,rt;_.parameters={..._.parameters,docs:{...(ot=_.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(rt=(st=_.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ct,it,lt;W.parameters={...W.parameters,docs:{...(ct=W.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(it=W.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var dt,ut,mt;J.parameters={...J.parameters,docs:{...(dt=J.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=J.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var pt,yt,wt;X.parameters={...X.parameters,docs:{...(pt=X.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(wt=(yt=X.parameters)==null?void 0:yt.docs)==null?void 0:wt.source}}};var bt,gt,vt;Y.parameters={...Y.parameters,docs:{...(bt=Y.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=Y.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var ht,xt,kt;Z.parameters={...Z.parameters,docs:{...(ht=Z.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(kt=(xt=Z.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var ft,Bt,Et;ee.parameters={...ee.parameters,docs:{...(ft=ee.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Et=(Bt=ee.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var Ct,Tt,Dt;te.parameters={...te.parameters,docs:{...(Ct=te.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Dt=(Tt=te.parameters)==null?void 0:Tt.docs)==null?void 0:Dt.source}}};var Rt,It,St;ae.parameters={...ae.parameters,docs:{...(Rt=ae.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(St=(It=ae.parameters)==null?void 0:It.docs)==null?void 0:St.source}}};var At,Pt,Ht;ne.parameters={...ne.parameters,docs:{...(At=ne.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ht=(Pt=ne.parameters)==null?void 0:Pt.docs)==null?void 0:Ht.source}}};var Ot,jt,qt;oe.parameters={...oe.parameters,docs:{...(Ot=oe.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(qt=(jt=oe.parameters)==null?void 0:jt.docs)==null?void 0:qt.source}}};var Lt,Nt,Kt;se.parameters={...se.parameters,docs:{...(Lt=se.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Kt=(Nt=se.parameters)==null?void 0:Nt.docs)==null?void 0:Kt.source}}};var Ft,$t,Ut;re.parameters={...re.parameters,docs:{...(Ft=re.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Ut=($t=re.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var Mt,Vt,Gt;ce.parameters={...ce.parameters,docs:{...(Mt=ce.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Gt=(Vt=ce.parameters)==null?void 0:Vt.docs)==null?void 0:Gt.source}}};var zt,Qt,_t;ie.parameters={...ie.parameters,docs:{...(zt=ie.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(_t=(Qt=ie.parameters)==null?void 0:Qt.docs)==null?void 0:_t.source}}};var Wt,Jt,Xt;le.parameters={...le.parameters,docs:{...(Wt=le.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Xt=(Jt=le.parameters)==null?void 0:Jt.docs)==null?void 0:Xt.source}}};var Yt,Zt,ea;de.parameters={...de.parameters,docs:{...(Yt=de.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(ea=(Zt=de.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;ue.parameters={...ue.parameters,docs:{...(ta=ue.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(na=(aa=ue.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var oa,sa,ra;me.parameters={...me.parameters,docs:{...(oa=me.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ra=(sa=me.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var ca,ia,la;pe.parameters={...pe.parameters,docs:{...(ca=pe.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(la=(ia=pe.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var da,ua,ma;ye.parameters={...ye.parameters,docs:{...(da=ye.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(ua=ye.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var pa,ya,wa;we.parameters={...we.parameters,docs:{...(pa=we.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(wa=(ya=we.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var ba,ga,va;be.parameters={...be.parameters,docs:{...(ba=be.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(ga=be.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var ha,xa,ka;ge.parameters={...ge.parameters,docs:{...(ha=ge.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(ka=(xa=ge.parameters)==null?void 0:xa.docs)==null?void 0:ka.source}}};var fa,Ba,Ea;ve.parameters={...ve.parameters,docs:{...(fa=ve.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(Ea=(Ba=ve.parameters)==null?void 0:Ba.docs)==null?void 0:Ea.source}}};var Ca,Ta,Da;he.parameters={...he.parameters,docs:{...(Ca=he.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Da=(Ta=he.parameters)==null?void 0:Ta.docs)==null?void 0:Da.source}}};var Ra,Ia,Sa;xe.parameters={...xe.parameters,docs:{...(Ra=xe.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Sa=(Ia=xe.parameters)==null?void 0:Ia.docs)==null?void 0:Sa.source}}};var Aa,Pa,Ha;ke.parameters={...ke.parameters,docs:{...(Aa=ke.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ha=(Pa=ke.parameters)==null?void 0:Pa.docs)==null?void 0:Ha.source}}};var Oa,ja,qa;fe.parameters={...fe.parameters,docs:{...(Oa=fe.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(qa=(ja=fe.parameters)==null?void 0:ja.docs)==null?void 0:qa.source}}};var La,Na,Ka;Be.parameters={...Be.parameters,docs:{...(La=Be.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Ka=(Na=Be.parameters)==null?void 0:Na.docs)==null?void 0:Ka.source}}};var Fa,$a,Ua;Ee.parameters={...Ee.parameters,docs:{...(Fa=Ee.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(Ua=($a=Ee.parameters)==null?void 0:$a.docs)==null?void 0:Ua.source}}};var Ma,Va,Ga;Ce.parameters={...Ce.parameters,docs:{...(Ma=Ce.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
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
}`,...(Ga=(Va=Ce.parameters)==null?void 0:Va.docs)==null?void 0:Ga.source}}};const Zn=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","LoadingState","BlankLoadingContentFallback","BlankEmptyMessageFallback","NumericFeedbackCopySemantics","CloseReasonTelemetry","CloseButtonFocusIntentReentry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","LabelledByPrecedence","NumericTitleDescriptionSemantics","DisabledOnlyResults","SingleActionableShortcutHints","DisabledCommandGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","IconOnlyCommandLabelledByPrecedence","PersistentSelection","OptionActivationKeyGuard","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler","NestedDismissOrder"];export{_ as AiInteractionFlow,Y as BlankEmptyMessageFallback,X as BlankLoadingContentFallback,te as CloseButtonFocusIntentReentry,ee as CloseReasonTelemetry,le as DisabledCommandGuard,ce as DisabledOnlyResults,ae as EmptyStateAriaControlsLifecycle,ve as EscapeClearsQueryFirst,Ee as EscapePreemptedByGlobalHandler,he as EscapeRepeatGuard,xe as EscapeShortcutHintPrecision,ge as GuardedDismissEvents,pe as IconOnlyCommandLabelledByPrecedence,me as IconOnlyCommandNaming,Be as ImeCompositionGuard,se as LabelledByPrecedence,J as LoadingState,oe as LocalizedDialogCopy,ne as LocalizedResultsLabel,Ce as NestedDismissOrder,be as NonDismissible,Z as NumericFeedbackCopySemantics,re as NumericTitleDescriptionSemantics,Q as OpenFromTriggerKeyboardFirst,we as OptionActivationKeyGuard,de as OptionMouseDownPolicy,fe as PagedKeyboardNavigation,ye as PersistentSelection,W as QueryTelemetry,ke as RefinedSearchKeepsActiveCommand,z as SearchCommands,ie as SingleActionableShortcutHints,ue as TextValueAndAccentSearch,Zn as __namedExportsOrder,Yn as default};
