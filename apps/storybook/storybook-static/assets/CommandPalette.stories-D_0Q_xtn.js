import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as O}from"./Button-B21ouHNm.js";import{P as $n}from"./Popover-D2imkB1S.js";import{D as Vn}from"./Dialog-CQoMJNsg.js";import{I as Un}from"./Input-DCFTlK0_.js";import{within as u,userEvent as i,expect as a,fireEvent as h,waitFor as K}from"./index-DgAF9SIF.js";import{b as v,s as y,a as g}from"./storyShowcase-Bw5VyCj0.js";import"./focusTabbable-gnwmp6b7.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:n,onOpenChange:e,commands:t,title:r="Command Palette",description:l="Quickly search and execute workspace actions.",ariaLabel:p,ariaLabelledBy:w,searchAriaLabel:B="Search commands",resultsAriaLabel:F="Command results",closeOnSelect:Ge=!0,clearQueryOnEscape:Pe=!0,closeOnEscape:$=!0,closeOnOutsidePointer:ze=!0,onEscapeKeyDown:Oe,onSearchKeyDown:je,onPointerDownOutside:Le,closeLabel:Cn,placeholder:Tn="Search commands...",loading:C=!1,loadingContent:V="Loading commands...",emptyMessage:Qe="No commands found.",disabledResultsMessage:_e="Matching commands are currently unavailable.",onQueryChange:T,onCloseReason:D,getResultsStatusText:We=zn}){const[S,qe]=c.useState(""),[U,R]=c.useState(0),Rn=c.useRef(null),q=c.useRef(null),G=c.useRef(null),Je=c.useRef(n);c.useRef(null),c.useRef(null),c.useRef(null);const j=c.useId(),Ne=c.useId(),Xe=c.useId(),Ye=c.useRef(null),Dn=P(B,"Search commands"),Sn=P(F,"Command results"),In=P(Cn,"Close dialog"),Ze=P(w),Hn=Ze===void 0?P(p):void 0,et=c.useMemo(()=>Qn(V),[V]),An=$e(V)?V:"Loading commands...",Pn=$e(Qe)?Qe:"No commands found.",On=$e(_e)?_e:"Matching commands are currently unavailable.",z=c.useCallback(s=>{G.current=s,D==null||D(s)},[D]),tt=c.useCallback(s=>{z(s),e(!1),G.current=null},[z,e]),jn=c.useCallback(s=>{!s&&n&&G.current===null&&(D==null||D("close-button")),G.current=null,e(s)},[D,e,n]);c.useEffect(()=>{!n&&Je.current&&(qe(s=>(s.length>0&&(T==null||T("")),"")),R(0)),Je.current=n},[T,n]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]);const Ke=c.useMemo(()=>it(S.trim()),[S]),b=c.useMemo(()=>Ke?t.filter(s=>{const k=[ct(s),...s.keywords??[]].join(" ");return it(k).includes(Ke)}):t,[t,Ke]),Ln=c.useMemo(()=>{const s=new Map;return b.map((d,k)=>{const E=s.get(d.key)??0;return s.set(d.key,E+1),E===0?d.key:`${d.key}__dup-${k}`})},[b]),N=c.useMemo(()=>b.reduce((s,d)=>d.disabled?s:s+1,0),[b]),at=!C&&b.length>0&&N===0,I=!C&&N>1,nt=!C&&N>0,Me=!C&&b.length>0,qn=c.useMemo(()=>{const s=[];return I&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp"),nt&&s.push("Enter"),($||Pe&&S.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[nt,I,Pe,$,S.length]),Nn=c.useMemo(()=>C?et:We({query:S,visibleCount:b.length,enabledCount:N,totalCount:t.length}),[t.length,N,b.length,We,C,S,et]),Kn=at?`${Ne} ${Xe}`:Ne,H=c.useMemo(()=>b.reduce((s,d,k)=>(d.disabled||s.push(k),s),[]),[b]),A=H[0]??-1,ot=H[H.length-1]??-1,f=c.useMemo(()=>{if(U<0)return-1;const s=b[U];return!s||s.disabled?-1:U},[U,b]);c.useEffect(()=>{var d;if(b.length===0){q.current=null,R(-1);return}const s=q.current;if(s){const k=b.findIndex(E=>!E.disabled&&E.key===s);if(k>=0){R(k);return}}R(A),q.current=A>=0?((d=b[A])==null?void 0:d.key)??null:null},[b,A]),c.useEffect(()=>{var s;if(f<0){q.current=null;return}q.current=((s=b[f])==null?void 0:s.key)??null},[b,f]),c.useEffect(()=>{if(!n||f<0)return;const s=Ye.current;if(!s)return;const d=s.ownerDocument.getElementById(`${j}-option-${f}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[j,n,f]);const Fe=c.useCallback(s=>{const d=b[s];!d||d.disabled||d.onSelect&&(d.onSelect(),Ge&&tt("item-select"))},[Ge,tt,b]),st=s=>{var k;if(b.length===0)return;let d=f<0?s===1?-1:0:f;for(let E=0;E<b.length;E+=1)if(d=(d+s+b.length)%b.length,!((k=b[d])!=null&&k.disabled)){R(d);return}},rt=s=>{if(H.length===0)return;const d=H.indexOf(f);if(d<0){R(s===1?A:ot);return}const k=Math.min(H.length-1,Math.max(0,d+s*5));R(H[k]??A)};return o.jsx(Vn,{open:n,onOpenChange:jn,title:r,description:l,ariaLabel:Hn,ariaLabelledBy:Ze,closeLabel:In,size:"md",closeOnEscape:$,closeOnOutsidePointer:ze,onEscapeKeyDown:s=>{Oe==null||Oe(s),!(s.defaultPrevented||!$)&&z("escape-key")},onPointerDownOutside:s=>{Le==null||Le(s),!(s.defaultPrevented||!ze)&&z("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(Un,{ref:Rn,"data-autofocus":"",role:"combobox","aria-busy":C||void 0,"aria-expanded":Me,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":Me?j:void 0,"aria-activedescendant":!C&&f>=0?`${j}-option-${f}`:void 0,"aria-describedby":Kn,"aria-keyshortcuts":qn,placeholder:Tn,value:S,onChange:s=>{qe(s.target.value),T==null||T(s.target.value)},onKeyDown:s=>{if(je==null||je(s),!Gn(s)&&!s.defaultPrevented&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"){if(s.repeat)return;Pe&&S.length>0&&(s.preventDefault(),qe(""),T==null||T(""));return}if(s.key==="ArrowDown"){if(!I)return;s.preventDefault(),st(1);return}if(s.key==="ArrowUp"){if(!I)return;s.preventDefault(),st(-1);return}if(s.key==="Home"){if(!I||!lt(s))return;s.preventDefault(),R(A);return}if(s.key==="End"){if(!I||!lt(s))return;s.preventDefault(),R(ot);return}if(s.key==="PageDown"){if(!I)return;s.preventDefault(),rt(1);return}if(s.key==="PageUp"){if(!I)return;s.preventDefault(),rt(-1);return}if(s.key==="Enter"&&!C&&f>=0){if(s.preventDefault(),s.repeat)return;Fe(f)}}},"aria-label":Dn}),o.jsx("p",{id:Ne,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Nn}),C?o.jsx("p",{"data-testid":"command-palette-loading-content",style:{margin:0,color:"var(--aurora-text-secondary)"},children:An}):Me?o.jsxs(o.Fragment,{children:[o.jsx("div",{id:j,ref:Ye,role:"listbox","aria-label":Sn,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:b.map((s,d)=>{const k=d===f,E=P(s.ariaLabelledBy),Mn=M(s.label).trim().length>0,Fn=E?void 0:P(s.ariaLabel,Mn?void 0:ct(s));return o.jsx("div",{id:`${j}-option-${d}`,role:"option","aria-selected":k,"aria-disabled":s.disabled||void 0,"aria-labelledby":E,"aria-label":Fn,"aria-keyshortcuts":s.disabled?void 0:"Enter Space","aria-posinset":d+1,"aria-setsize":b.length,tabIndex:-1,onPointerDown:x=>{x.pointerType==="mouse"||!_n(x.button)||x.ctrlKey||x.preventDefault()},onMouseDown:x=>{x.button!==0||x.ctrlKey||x.preventDefault()},onMouseEnter:()=>{s.disabled||R(d)},onClick:()=>{s.disabled||Fe(d)},onKeyDown:x=>{if(!s.disabled&&!x.defaultPrevented&&!(x.altKey||x.ctrlKey||x.metaKey)&&(x.key==="Enter"||x.key===" "||x.key==="Space"||x.key==="Spacebar")){if(x.preventDefault(),x.repeat)return;Fe(d)}},style:{border:"1px solid var(--aurora-border-default)",background:k?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},Ln[d]??`${s.key}__dup-${d}`)})}),at?o.jsx("p",{id:Xe,"data-testid":"command-palette-disabled-results-message",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:On}):null]}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:Pn})]})})}function ct(n){if(typeof n.textValue=="string"){const e=L(n.textValue);if(e.length>0)return e}if(typeof n.ariaLabel=="string"){const e=L(n.ariaLabel);if(e.length>0)return e}return L(M(n.label))}function it(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function Gn(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function lt(n){if(n.key!=="Home"&&n.key!=="End")return!0;const e=n.currentTarget,t=e.selectionStart,r=e.selectionEnd;return t===null||r===null?!0:t!==r?!1:n.key==="Home"?t===0:r===e.value.length}function zn({query:n,visibleCount:e,enabledCount:t,totalCount:r}){const l=n.trim();return l.length===0?t!==r?`${t} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function Qn(n){const e=L(M(n));return e.length>0?e:"Loading commands..."}function $e(n){return n==null||typeof n=="boolean"?!1:typeof n=="string"?n.trim().length>0:!0}function M(n){if(typeof n=="string")return n;if(typeof n=="number")return String(n);if(Array.isArray(n))return L(n.map(t=>M(t)).filter(t=>t.length>0).join(" "));if(!c.isValidElement(n))return"";const e=n.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?L(e["aria-label"]):M(e.children)}function P(n,e){return typeof n=="string"&&n.trim().length>0?n.trim():e}function _n(n){return typeof n!="number"||n<=0}function L(n){return n.replace(/\s+/g," ").trim()}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onSearchKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},disabledResultsMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Matching commands are currently unavailable."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:`| "close-button"
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
}`,computed:!1}}}};const Ue=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],qo={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:Ue}};function Ve(n,e){const t=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),n.dispatchEvent(t)}function fn(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:Ue,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Wn(){const[n,e]=c.useState(!1),[t,r]=c.useState("none");return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:g,children:t})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>r("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>r("Open Theme Pack")}]})]})}function Jn(){const[n,e]=c.useState(!0),[t,r]=c.useState("None"),l=Ue.map(p=>({...p,onSelect:()=>r(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last AI action: ",o.jsx("strong",{style:g,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,commands:l})]})}function En(){const[n,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:g,children:t||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"],onSelect:()=>{}}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:l,visibleCount:p,enabledCount:w})=>l.trim().length===0?"Command search ready.":`${w}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function Xn(){const[n,e]=c.useState(!0),[t,r]=c.useState(!0),[l,p]=c.useState(0);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Executed commands while ready:"," ",o.jsx("strong",{"data-testid":"loading-selection-count",style:g,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>r(w=>!w),children:t?"Finish loading commands":"Re-enable loading commands"}),o.jsx(O,{size:"sm",variant:"ghost",onClick:()=>e(!0),children:"Reopen loading palette"}),o.jsx(m,{open:n,onOpenChange:e,loading:t,loadingContent:"Syncing AI workflow commands...",closeOnSelect:!1,commands:[{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>p(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"],onSelect:()=>p(w=>w+1)}]})]})}function Yn(){const[n,e]=c.useState(!0),[t,r]=c.useState("none"),[l,p]=c.useState("N/A"),w=c.useCallback(B=>{p(F=>F==="N/A"?B:`${F} -> ${B}`)},[]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:g,children:t})]}),o.jsxs("p",{style:y,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:g,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(m,{open:n,onOpenChange:B=>{e(B),B||w("open:false")},onCloseReason:B=>{r(B),w(`reason:${B}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>w("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>w("select")}]})]})}function Zn(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function eo(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}]})}function to(){const[n,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:g,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(l=>l+1)}],placeholder:"Try searching publish..."})]})}function ao(){const[n,e]=c.useState(!0),[t,r]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"missing-handler-close-reason",style:g,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,onCloseReason:l=>r(l),commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"]},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r("item-select")}],placeholder:"Try searching run..."})]})}function no(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function oo(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function so(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release"},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release"}],placeholder:"Try searching rollback..."})}function ro(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function co(){const[n,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("h3",{id:"deploy-command-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Deploy Release"}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Fallback deploy command",ariaLabelledBy:"deploy-command-heading",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})]})}function io(){const[n,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:g,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(l=>l+1)}]})]})}function lo(){const[n,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:g,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function uo(){const[n,e]=c.useState(!1);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:n?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:n,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function mo(){const[n,e]=c.useState(!1),[t,r]=c.useState(!0);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:y,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:g,children:t?"enabled":"disabled"})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:n?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function po(){const[n,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:g,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:g,children:n?"open":"closed"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function yo(){const[n,e]=c.useState(!0),[t,r]=c.useState(""),[l,p]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:g,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:g,children:n?"open":"closed"})]}),o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:g,children:l})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:r,onEscapeKeyDown:()=>p(w=>w+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function wo(){const[n,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:g,children:t||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function bo(){const[n,e]=c.useState(!0),[t,r]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:g,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}function go(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function vo(){const[n,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("p",{style:y,children:"With caret in the middle of query text, Home/End should keep native cursor behavior and avoid overriding active command focus."}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"release-checklist",label:"Release Checklist",keywords:["release"]},{key:"release-notes",label:"Release Notes",keywords:["release"]},{key:"release-pipeline",label:"Release Pipeline",keywords:["release"]}]})]})}function ho(){const[n,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:g,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:g,children:l||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:g,children:n?"open":"closed"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>r(w=>w+1)}]})]})}function xo(){const[n,e]=c.useState(!0),[t,r]=c.useState(0);return c.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:g,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,onEscapeKeyDown:()=>r(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function ko(){const[n,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return c.useEffect(()=>{const w=B=>{(B.key==="Enter"||B.key==="Escape")&&B.preventDefault()};return document.addEventListener("keydown",w,!0),()=>{document.removeEventListener("keydown",w,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-preempt-selection-count",style:g,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-preempt-query-value",style:g,children:l||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:p,commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>r(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function Bo(){const[n,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-local-preempt-selection-count",style:g,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-local-preempt-query-value",style:g,children:l||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:p,onSearchKeyDown:w=>{(w.key==="Enter"||w.key==="Escape")&&w.preventDefault()},commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>r(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function fo(){const[n,e]=c.useState(!1);return o.jsx(v,{align:"start",children:o.jsx($n,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...y},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(m,{open:n,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const Q={render:()=>o.jsx(fn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await a(r).toHaveAttribute("aria-disabled","true"),await a(r).toHaveAttribute("tabindex","-1")}},_={render:()=>o.jsx(Wn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await K(()=>{a(t).toHaveFocus()}),await i.type(t,"run"),await a(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},W={render:()=>o.jsx(Jn,{})},J={render:()=>o.jsx(En,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},X={render:()=>o.jsx(Xn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await a(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await a(t).toHaveAttribute("aria-busy","true"),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).toHaveAttribute("aria-keyshortcuts","Escape"),await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands..."),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Finish loading commands"})),await i.click(e.getByRole("button",{name:"Reopen loading palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await a(t).not.toHaveAttribute("aria-busy"),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(e.getByRole("listbox",{name:"Command results"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.getByTestId("loading-selection-count")).toHaveTextContent("1")}},Y={args:{open:!0,loading:!0,loadingContent:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings"}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands..."),await a(e.getByRole("status")).toHaveTextContent("Loading commands...")}},Z={args:{open:!0,emptyMessage:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"no-match"),await a(e.getByText("No commands found.")).toBeInTheDocument()}},ee={args:{open:!0,loading:!0,loadingContent:0,onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("0"),await a(e.getByRole("status")).toHaveTextContent("0")}},te={render:()=>o.jsx(Yn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=n.ownerDocument;await a(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await a(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await i.click(t.body),await a(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"}));const r=e.getByRole("dialog",{name:"Command Palette"});await a(r).toBeInTheDocument(),await a(r).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close dialog"});await a(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.click(l),await a(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},ae={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"Command Palette",description:"Shift+Tab from search input should restore close-button focus ring fallback.",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),r=await e.findByRole("button",{name:"Close dialog"});await i.click(t),await a(t).toHaveFocus(),await i.tab({shift:!0}),await a(r).toHaveFocus(),await a(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),h.mouseDown(r,{button:0,ctrlKey:!0}),await a(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}},ne={render:()=>o.jsx(En,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await a(l).toBeTruthy(),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",l),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.clear(t),await i.type(t,"no-match"),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).not.toHaveAttribute("aria-controls"),await a(t).not.toHaveAttribute("aria-activedescendant"),await i.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",p.getAttribute("id")),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},oe={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},se={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await a(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await a(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},re={render:()=>o.jsxs(v,{align:"start",children:[o.jsx("h3",{id:"command-palette-heading",style:{margin:0},children:"AI release command center"}),o.jsx(m,{open:!0,onOpenChange:()=>{},title:o.jsx("span",{"aria-hidden":!0,children:"⌘"}),ariaLabel:"Fallback AI command center",ariaLabelledBy:"command-palette-heading",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]})]}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("dialog",{name:"AI release command center"});await a(t).toHaveAttribute("aria-labelledby","command-palette-heading"),await a(t).not.toHaveAttribute("aria-label")}},ce={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:0,description:0,commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),r=(await e.findByRole("dialog",{name:"0"})).getAttribute("aria-describedby");await a(r).toBeTruthy(),await a(e.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},ie={render:()=>o.jsx(Zn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await a(t).toHaveAttribute("aria-keyshortcuts","Escape"),await a(e.getByTestId("command-palette-disabled-results-message")).toHaveTextContent("Matching commands are currently unavailable.");for(const r of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:r,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await a(l.defaultPrevented).toBe(!1)}}},le={render:()=>o.jsx(eo,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-keyshortcuts","Enter Escape");const r=t.getAttribute("aria-activedescendant");a(r).toBeTruthy();for(const l of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const p=new KeyboardEvent("keydown",{key:l,bubbles:!0,cancelable:!0});t.dispatchEvent(p),await a(p.defaultPrevented).toBe(!1)}await a(t.getAttribute("aria-activedescendant")).toBe(r)}},de={render:()=>o.jsx(to,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await a(r).toHaveAttribute("aria-disabled","true"),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await i.click(r),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("executed-count")).toHaveTextContent("0")}},ue={render:()=>o.jsx(ao,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"run"),await i.click(e.getByRole("option",{name:"Run E2E Smoke"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("missing-handler-close-reason")).toHaveTextContent("none")}},me={render:()=>o.jsx(fn,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("option",{name:"Create Spec"}),r=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(r),a(r.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),a(l.defaultPrevented).toBe(!0)}},pe={render:()=>o.jsx(no,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await a(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},ye={render:()=>o.jsx(oo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox");await a(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},we={render:()=>o.jsx(so,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await a(r).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},be={render:()=>o.jsx(ro,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await a(r).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ge={render:()=>o.jsx(co,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await a(r).toHaveAttribute("aria-labelledby","deploy-command-heading"),await a(r).not.toHaveAttribute("aria-label"),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ve={render:()=>o.jsx(io,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),h.keyDown(t,{key:"Enter",repeat:!1}),await K(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),h.keyDown(t,{key:"Enter",repeat:!0}),await K(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},he={render:()=>o.jsx(lo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await a(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await i.keyboard("{Control>}{Enter}{/Control}"),await i.keyboard("{Meta>}{Space}{/Meta}"),h.keyDown(t,{key:"Enter",repeat:!0}),h.keyDown(t,{key:"Spacebar",altKey:!0}),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await a(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},xe={render:()=>o.jsx(uo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await a(t).toBeInTheDocument(),await a(t).not.toHaveAttribute("aria-keyshortcuts"),await a(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await a(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await a(t).toBeInTheDocument()}},ke={render:()=>o.jsx(mo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=n.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),h.pointerDown(t.body),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await i.clear(r),await i.type(r,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await a(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},Be={render:()=>o.jsx(po,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("query-value")).toHaveTextContent("N/A"),await a(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("open-state")).toHaveTextContent("closed")}},fe={render:()=>o.jsx(yo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),h.keyDown(t,{key:"Escape",repeat:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},Ee={render:()=>o.jsx(wo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.type(t,"release"),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await a(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),h.keyDown(t,{key:"Escape",ctrlKey:!0}),h.keyDown(t,{key:"Escape",altKey:!0}),h.keyDown(t,{key:"Escape",metaKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),h.keyDown(t,{key:"Escape",shiftKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},Ce={render:()=>o.jsx(bo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.clear(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1"));const r=t.getAttribute("aria-activedescendant");a(r).toBeTruthy();const l=n.ownerDocument.getElementById(r);await a(l).toBeInTheDocument(),await a(l).toHaveAttribute("role","option"),await a(l).not.toHaveAttribute("aria-disabled","true"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Te={render:()=>o.jsx(go,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.keyboard("{PageDown}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),h.keyDown(t,{key:"PageDown",ctrlKey:!0}),h.keyDown(t,{key:"End",metaKey:!0}),h.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),h.keyDown(t,{key:"ArrowUp",metaKey:!0}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),await i.keyboard("{PageUp}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},Re={render:()=>o.jsx(vo,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.type(t,"release"),await i.keyboard("{ArrowDown}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1")),t.setSelectionRange(2,2),h.keyDown(t,{key:"Home"}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1")),h.keyDown(t,{key:"End"}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1"))}},De={render:()=>o.jsx(ho,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.type(t,"deploy"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),h.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),h.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),h.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Ve(t,"Escape"),Ve(t,"ArrowDown"),Ve(t,"Enter"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await a(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},Se={render:()=>o.jsx(xo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},Ie={render:()=>o.jsx(ko,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await a(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await a(e.getByTestId("command-preempt-selection-count")).toHaveTextContent("0"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},He={render:()=>o.jsx(Bo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await a(e.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await a(e.getByTestId("command-local-preempt-selection-count")).toHaveTextContent("0"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Ae={render:()=>o.jsx(fo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await i.click(t),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Open nested palette"})),await a(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await K(()=>{a(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await K(()=>{a(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await a(t).toHaveFocus()}};var dt,ut,mt;Q.parameters={...Q.parameters,docs:{...(dt=Q.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=Q.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var pt,yt,wt;_.parameters={..._.parameters,docs:{...(pt=_.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(wt=(yt=_.parameters)==null?void 0:yt.docs)==null?void 0:wt.source}}};var bt,gt,vt;W.parameters={...W.parameters,docs:{...(bt=W.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(vt=(gt=W.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var ht,xt,kt;J.parameters={...J.parameters,docs:{...(ht=J.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(kt=(xt=J.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var Bt,ft,Et;X.parameters={...X.parameters,docs:{...(Bt=X.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Et=(ft=X.parameters)==null?void 0:ft.docs)==null?void 0:Et.source}}};var Ct,Tt,Rt;Y.parameters={...Y.parameters,docs:{...(Ct=Y.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Rt=(Tt=Y.parameters)==null?void 0:Tt.docs)==null?void 0:Rt.source}}};var Dt,St,It;Z.parameters={...Z.parameters,docs:{...(Dt=Z.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(It=(St=Z.parameters)==null?void 0:St.docs)==null?void 0:It.source}}};var Ht,At,Pt;ee.parameters={...ee.parameters,docs:{...(Ht=ee.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Pt=(At=ee.parameters)==null?void 0:At.docs)==null?void 0:Pt.source}}};var Ot,jt,Lt;te.parameters={...te.parameters,docs:{...(Ot=te.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Lt=(jt=te.parameters)==null?void 0:jt.docs)==null?void 0:Lt.source}}};var qt,Nt,Kt;ae.parameters={...ae.parameters,docs:{...(qt=ae.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Kt=(Nt=ae.parameters)==null?void 0:Nt.docs)==null?void 0:Kt.source}}};var Mt,Ft,$t;ne.parameters={...ne.parameters,docs:{...(Mt=ne.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...($t=(Ft=ne.parameters)==null?void 0:Ft.docs)==null?void 0:$t.source}}};var Vt,Ut,Gt;oe.parameters={...oe.parameters,docs:{...(Vt=oe.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Gt=(Ut=oe.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};var zt,Qt,_t;se.parameters={...se.parameters,docs:{...(zt=se.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(_t=(Qt=se.parameters)==null?void 0:Qt.docs)==null?void 0:_t.source}}};var Wt,Jt,Xt;re.parameters={...re.parameters,docs:{...(Wt=re.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Xt=(Jt=re.parameters)==null?void 0:Jt.docs)==null?void 0:Xt.source}}};var Yt,Zt,ea;ce.parameters={...ce.parameters,docs:{...(Yt=ce.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(ea=(Zt=ce.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;ie.parameters={...ie.parameters,docs:{...(ta=ie.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(na=(aa=ie.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var oa,sa,ra;le.parameters={...le.parameters,docs:{...(oa=le.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ra=(sa=le.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var ca,ia,la;de.parameters={...de.parameters,docs:{...(ca=de.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(la=(ia=de.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var da,ua,ma;ue.parameters={...ue.parameters,docs:{...(da=ue.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(ua=ue.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var pa,ya,wa;me.parameters={...me.parameters,docs:{...(pa=me.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(wa=(ya=me.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var ba,ga,va;pe.parameters={...pe.parameters,docs:{...(ba=pe.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(ga=pe.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var ha,xa,ka;ye.parameters={...ye.parameters,docs:{...(ha=ye.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(ka=(xa=ye.parameters)==null?void 0:xa.docs)==null?void 0:ka.source}}};var Ba,fa,Ea;we.parameters={...we.parameters,docs:{...(Ba=we.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(Ea=(fa=we.parameters)==null?void 0:fa.docs)==null?void 0:Ea.source}}};var Ca,Ta,Ra;be.parameters={...be.parameters,docs:{...(Ca=be.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Ra=(Ta=be.parameters)==null?void 0:Ta.docs)==null?void 0:Ra.source}}};var Da,Sa,Ia;ge.parameters={...ge.parameters,docs:{...(Da=ge.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
}`,...(Ia=(Sa=ge.parameters)==null?void 0:Sa.docs)==null?void 0:Ia.source}}};var Ha,Aa,Pa;ve.parameters={...ve.parameters,docs:{...(Ha=ve.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Pa=(Aa=ve.parameters)==null?void 0:Aa.docs)==null?void 0:Pa.source}}};var Oa,ja,La;he.parameters={...he.parameters,docs:{...(Oa=he.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(La=(ja=he.parameters)==null?void 0:ja.docs)==null?void 0:La.source}}};var qa,Na,Ka;xe.parameters={...xe.parameters,docs:{...(qa=xe.parameters)==null?void 0:qa.docs,source:{originalSource:`{
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
}`,...(Ka=(Na=xe.parameters)==null?void 0:Na.docs)==null?void 0:Ka.source}}};var Ma,Fa,$a;ke.parameters={...ke.parameters,docs:{...(Ma=ke.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
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
}`,...($a=(Fa=ke.parameters)==null?void 0:Fa.docs)==null?void 0:$a.source}}};var Va,Ua,Ga;Be.parameters={...Be.parameters,docs:{...(Va=Be.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Ga=(Ua=Be.parameters)==null?void 0:Ua.docs)==null?void 0:Ga.source}}};var za,Qa,_a;fe.parameters={...fe.parameters,docs:{...(za=fe.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(_a=(Qa=fe.parameters)==null?void 0:Qa.docs)==null?void 0:_a.source}}};var Wa,Ja,Xa;Ee.parameters={...Ee.parameters,docs:{...(Wa=Ee.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Xa=(Ja=Ee.parameters)==null?void 0:Ja.docs)==null?void 0:Xa.source}}};var Ya,Za,en;Ce.parameters={...Ce.parameters,docs:{...(Ya=Ce.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
}`,...(en=(Za=Ce.parameters)==null?void 0:Za.docs)==null?void 0:en.source}}};var tn,an,nn;Te.parameters={...Te.parameters,docs:{...(tn=Te.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(nn=(an=Te.parameters)==null?void 0:an.docs)==null?void 0:nn.source}}};var on,sn,rn;Re.parameters={...Re.parameters,docs:{...(on=Re.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(rn=(sn=Re.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var cn,ln,dn;De.parameters={...De.parameters,docs:{...(cn=De.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(dn=(ln=De.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var un,mn,pn;Se.parameters={...Se.parameters,docs:{...(un=Se.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(pn=(mn=Se.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};var yn,wn,bn;Ie.parameters={...Ie.parameters,docs:{...(yn=Ie.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(bn=(wn=Ie.parameters)==null?void 0:wn.docs)==null?void 0:bn.source}}};var gn,vn,hn;He.parameters={...He.parameters,docs:{...(gn=He.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedLocallyPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.type(input, "open");
    await expect(canvas.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("command-local-preempt-selection-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(hn=(vn=He.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var xn,kn,Bn;Ae.parameters={...Ae.parameters,docs:{...(xn=Ae.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(Bn=(kn=Ae.parameters)==null?void 0:kn.docs)==null?void 0:Bn.source}}};const No=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","LoadingState","BlankLoadingContentFallback","BlankEmptyMessageFallback","NumericFeedbackCopySemantics","CloseReasonTelemetry","CloseButtonFocusIntentReentry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","LabelledByPrecedence","NumericTitleDescriptionSemantics","DisabledOnlyResults","SingleActionableShortcutHints","DisabledCommandGuard","MissingSelectHandlerGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","IconOnlyCommandAriaLabelSearchFallback","IconOnlyCommandTextValueFallback","IconOnlyCommandLabelledByPrecedence","PersistentSelection","OptionActivationKeyGuard","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","HomeEndCaretPriority","ImeCompositionGuard","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","NestedDismissOrder"];export{W as AiInteractionFlow,Z as BlankEmptyMessageFallback,Y as BlankLoadingContentFallback,ae as CloseButtonFocusIntentReentry,te as CloseReasonTelemetry,de as DisabledCommandGuard,ie as DisabledOnlyResults,ne as EmptyStateAriaControlsLifecycle,Be as EscapeClearsQueryFirst,Se as EscapePreemptedByGlobalHandler,fe as EscapeRepeatGuard,Ee as EscapeShortcutHintPrecision,ke as GuardedDismissEvents,Re as HomeEndCaretPriority,we as IconOnlyCommandAriaLabelSearchFallback,ge as IconOnlyCommandLabelledByPrecedence,ye as IconOnlyCommandNaming,be as IconOnlyCommandTextValueFallback,De as ImeCompositionGuard,re as LabelledByPrecedence,X as LoadingState,se as LocalizedDialogCopy,oe as LocalizedResultsLabel,Ie as ManagedKeysPreemptedByGlobalHandler,He as ManagedKeysPreemptedByLocalHandler,ue as MissingSelectHandlerGuard,Ae as NestedDismissOrder,xe as NonDismissible,ee as NumericFeedbackCopySemantics,ce as NumericTitleDescriptionSemantics,_ as OpenFromTriggerKeyboardFirst,he as OptionActivationKeyGuard,me as OptionMouseDownPolicy,Te as PagedKeyboardNavigation,ve as PersistentSelection,J as QueryTelemetry,Ce as RefinedSearchKeepsActiveCommand,Q as SearchCommands,le as SingleActionableShortcutHints,pe as TextValueAndAccentSearch,No as __namedExportsOrder,qo as default};
