import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as H}from"./Button-B21ouHNm.js";import{P as eo}from"./Popover-CI5AwEb2.js";import{D as to}from"./Dialog-Cbs75tsL.js";import{I as no}from"./Input-DCFTlK0_.js";import{within as d,userEvent as i,expect as n,fireEvent as g,waitFor as A}from"./index-DgAF9SIF.js";import{b as v,s as y,a as b}from"./storyShowcase-DlKirntE.js";import"./focusTabbable-gnwmp6b7.js";import"./bodyScrollLock-DU3WNas9.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function u({open:a,onOpenChange:e,commands:t,title:s="Command Palette",description:l="Quickly search and execute workspace actions.",ariaLabel:p,ariaLabelledBy:w,searchAriaLabel:B="Search commands",resultsAriaLabel:U="Command results",closeOnSelect:Je=!0,clearQueryOnEscape:Ne=!0,closeOnEscape:V=!0,closeOnOutsidePointer:Xe=!0,onEscapeKeyDown:Me,onSearchKeyDown:Fe,onCloseButtonKeyDown:Ka,onPointerDownOutside:$e,closeLabel:Na,placeholder:Ma="Search commands...",loading:E=!1,loadingContent:G="Loading commands...",emptyMessage:Ze="No commands found.",disabledResultsMessage:et="Matching commands are currently unavailable.",onQueryChange:C,onCloseReason:D,getResultsStatusText:tt=ao}){const[S,Ue]=c.useState(""),[z,T]=c.useState(0),Fa=c.useRef(null),M=c.useRef(null),Q=c.useRef(null),nt=c.useRef(a);c.useRef(null),c.useRef(null),c.useRef(null);const q=c.useId(),Ve=c.useId(),at=c.useId(),ot=c.useRef(null),$a=L(B,"Search commands"),Ua=L(U,"Command results"),Va=L(Na,"Close command palette"),st=L(w),Ga=st===void 0?L(p):void 0,rt=c.useMemo(()=>oo(G),[G]),za=_e(G)?G:"Loading commands...",Qa=_e(Ze)?Ze:"No commands found.",Wa=_e(et)?et:"Matching commands are currently unavailable.",W=c.useCallback(r=>{Q.current=r,D==null||D(r)},[D]),ct=c.useCallback(r=>{W(r),e(!1),Q.current=null},[W,e]),_a=c.useCallback(r=>{!r&&a&&Q.current===null&&(D==null||D("close-button")),Q.current=null,e(r)},[D,e,a]);c.useEffect(()=>{!a&&nt.current&&(Ue(r=>(r.length>0&&(C==null||C("")),"")),T(0)),nt.current=a},[C,a]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]);const Ge=c.useMemo(()=>yt(S.trim()),[S]),ze=c.useMemo(()=>{const r=new Map;t.forEach(h=>{r.set(h.key,(r.get(h.key)??0)+1)});const m=new Map;return t.map(h=>{const R=r.get(h.key)??0,j=m.get(h.key)??0;return m.set(h.key,j+1),{item:h,renderKey:R>1?`${h.key}__duplicate-${j}`:h.key}})},[t]),_=c.useMemo(()=>Ge?ze.filter(({item:r})=>{const h=[pt(r),...r.keywords??[]].join(" ");return yt(h).includes(Ge)}):ze,[ze,Ge]),x=c.useMemo(()=>_.map(r=>r.item),[_]),K=c.useMemo(()=>_.map(r=>r.renderKey),[_]),F=c.useMemo(()=>x.reduce((r,m)=>m.disabled?r:r+1,0),[x]),it=!E&&x.length>0&&F===0,I=!E&&F>1,lt=!E&&F>0,Qe=!E&&x.length>0,Ya=c.useMemo(()=>{const r=[];return I&&r.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp"),lt&&r.push("Enter"),(V||Ne&&S.length>0)&&r.push("Escape"),r.length>0?r.join(" "):void 0},[lt,I,Ne,V,S.length]),Ja=c.useMemo(()=>E?rt:tt({query:S,visibleCount:x.length,enabledCount:F,totalCount:t.length}),[t.length,F,x.length,tt,E,S,rt]),Xa=it?`${Ve} ${at}`:Ve,P=c.useMemo(()=>x.reduce((r,m,h)=>(m.disabled||r.push(h),r),[]),[x]),O=P[0]??-1,dt=P[P.length-1]??-1,f=c.useMemo(()=>{if(z<0)return-1;const r=x[z];return!r||r.disabled?-1:z},[z,x]);c.useEffect(()=>{if(x.length===0){M.current=null,T(-1);return}const r=M.current;if(r){const m=K.findIndex((h,R)=>{var j;return!((j=x[R])!=null&&j.disabled)&&h===r});if(m>=0){T(m);return}}T(O),M.current=O>=0?K[O]??null:null},[x,K,O]),c.useEffect(()=>{if(f<0){M.current=null;return}M.current=K[f]??null},[K,f]),c.useEffect(()=>{if(!a||f<0)return;const r=ot.current;if(!r)return;const m=r.ownerDocument.getElementById(`${q}-option-${f}`);!m||!r.contains(m)||typeof m.scrollIntoView=="function"&&m.scrollIntoView({block:"nearest"})},[q,a,f]);const We=c.useCallback(r=>{const m=x[r];!m||m.disabled||m.onSelect&&(m.onSelect(),Je&&ct("item-select"))},[Je,ct,x]),ut=r=>{var h;if(x.length===0)return;let m=f<0?r===1?-1:0:f;for(let R=0;R<x.length;R+=1)if(m=(m+r+x.length)%x.length,!((h=x[m])!=null&&h.disabled)){T(m);return}},mt=r=>{if(P.length===0)return;const m=P.indexOf(f);if(m<0){T(r===1?O:dt);return}const h=Math.min(P.length-1,Math.max(0,m+r*5));T(P[h]??O)};return o.jsx(to,{open:a,onOpenChange:_a,title:s,description:l,ariaLabel:Ga,ariaLabelledBy:st,closeLabel:Va,size:"md",closeOnEscape:V,closeOnOutsidePointer:Xe,onCloseButtonKeyDown:Ka,onEscapeKeyDown:r=>{Me==null||Me(r),!(r.defaultPrevented||!V)&&W("escape-key")},onPointerDownOutside:r=>{$e==null||$e(r),!(r.defaultPrevented||!Xe)&&W("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(no,{ref:Fa,"data-autofocus":"",role:"combobox","aria-busy":E||void 0,"aria-expanded":Qe,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":Qe?q:void 0,"aria-activedescendant":!E&&f>=0?`${q}-option-${f}`:void 0,"aria-describedby":Xa,"aria-keyshortcuts":Ya,placeholder:Ma,value:S,onChange:r=>{Ue(r.target.value),C==null||C(r.target.value)},onKeyDown:r=>{if(Fe==null||Fe(r),!wt(r)&&!r.defaultPrevented&&!(r.altKey||r.ctrlKey||r.metaKey)){if(r.key==="Escape"){if(r.repeat)return;Ne&&S.length>0&&(r.preventDefault(),Ue(""),C==null||C(""));return}if(r.key==="ArrowDown"){if(!I)return;r.preventDefault(),ut(1);return}if(r.key==="ArrowUp"){if(!I)return;r.preventDefault(),ut(-1);return}if(r.key==="Home"){if(!I||!bt(r))return;r.preventDefault(),T(O);return}if(r.key==="End"){if(!I||!bt(r))return;r.preventDefault(),T(dt);return}if(r.key==="PageDown"){if(!I)return;r.preventDefault(),mt(1);return}if(r.key==="PageUp"){if(!I)return;r.preventDefault(),mt(-1);return}if(r.key==="Enter"&&!E&&f>=0){if(r.preventDefault(),r.repeat)return;We(f)}}},"aria-label":$a}),o.jsx("p",{id:Ve,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Ja}),E?o.jsx("p",{"data-testid":"command-palette-loading-content",style:{margin:0,color:"var(--aurora-text-secondary)"},children:za}):Qe?o.jsxs(o.Fragment,{children:[o.jsx("div",{id:q,ref:ot,role:"listbox","aria-label":Ua,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:x.map((r,m)=>{const h=m===f,R=L(r.ariaLabelledBy),j=$(r.label).trim().length>0,Za=R?void 0:L(r.ariaLabel,j?void 0:pt(r));return o.jsx("div",{id:`${q}-option-${m}`,role:"option","aria-selected":h,"aria-disabled":r.disabled||void 0,"aria-labelledby":R,"aria-label":Za,"aria-keyshortcuts":r.disabled?void 0:"Enter Space","aria-posinset":m+1,"aria-setsize":x.length,tabIndex:-1,onPointerDown:k=>{k.pointerType==="mouse"||!so(k.button)||k.ctrlKey||k.preventDefault()},onMouseDown:k=>{k.button!==0||k.ctrlKey||k.preventDefault()},onMouseEnter:()=>{r.disabled||T(m)},onClick:()=>{r.disabled||We(m)},onKeyDown:k=>{if(!r.disabled&&!k.defaultPrevented&&!wt(k)&&!(k.altKey||k.ctrlKey||k.metaKey)&&(k.key==="Enter"||k.key===" "||k.key==="Space"||k.key==="Spacebar")){if(k.preventDefault(),k.repeat)return;We(m)}},style:{border:"1px solid var(--aurora-border-default)",background:h?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:r.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:r.disabled?"not-allowed":"pointer"},children:r.label},K[m]??`${r.key}__source-fallback-${m}`)})}),it?o.jsx("p",{id:at,"data-testid":"command-palette-disabled-results-message",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:Wa}):null]}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:Qa})]})})}function pt(a){if(typeof a.textValue=="string"){const e=N(a.textValue);if(e.length>0)return e}if(typeof a.ariaLabel=="string"){const e=N(a.ariaLabel);if(e.length>0)return e}return N($(a.label))}function yt(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function wt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function bt(a){if(a.key!=="Home"&&a.key!=="End")return!0;const e=a.currentTarget,t=e.selectionStart,s=e.selectionEnd;return t===null||s===null?!0:t!==s?!1:a.key==="Home"?t===0:s===e.value.length}function ao({query:a,visibleCount:e,enabledCount:t,totalCount:s}){const l=a.trim();return l.length===0?t!==s?`${t} of ${s} command${s===1?"":"s"} available.`:`${s} command${s===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function oo(a){const e=N($(a));return e.length>0?e:"Loading commands..."}function _e(a){return a==null||typeof a=="boolean"?!1:typeof a=="string"?a.trim().length>0:!0}function $(a){if(typeof a=="string")return a;if(typeof a=="number")return String(a);if(Array.isArray(a))return N(a.map(t=>$(t)).filter(t=>t.length>0).join(" "));if(!c.isValidElement(a))return"";const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?N(e["aria-label"]):$(e.children)}function L(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function so(a){return typeof a!="number"||a<=0}function N(a){return a.replace(/\s+/g," ").trim()}u.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onSearchKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onCloseButtonKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},disabledResultsMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Matching commands are currently unavailable."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:`| "close-button"
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
}`,computed:!1}}}};const Ye=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Yo={title:"AI/CommandPalette",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:Ye}};function Ke(a,e){const t=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),a.dispatchEvent(t)}function La(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:Ye,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function ro(){const[a,e]=c.useState(!1),[t,s]=c.useState("none");return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:b,children:t})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>s("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>s("Open Theme Pack")}]})]})}function co(){const[a,e]=c.useState(!0),[t,s]=c.useState("None"),l=Ye.map(p=>({...p,onSelect:()=>s(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last AI action: ",o.jsx("strong",{style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,commands:l})]})}function qa(){const[a,e]=c.useState(!0),[t,s]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:b,children:t||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"],onSelect:()=>{}}],emptyMessage:"No matching AI workflow command.",onQueryChange:s,getResultsStatusText:({query:l,visibleCount:p,enabledCount:w})=>l.trim().length===0?"Command search ready.":`${w}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function io(){const[a,e]=c.useState(!0),[t,s]=c.useState(!0),[l,p]=c.useState(0);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Executed commands while ready:"," ",o.jsx("strong",{"data-testid":"loading-selection-count",style:b,children:l})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>s(w=>!w),children:t?"Finish loading commands":"Re-enable loading commands"}),o.jsx(H,{size:"sm",variant:"ghost",onClick:()=>e(!0),children:"Reopen loading palette"}),o.jsx(u,{open:a,onOpenChange:e,loading:t,loadingContent:"Syncing AI workflow commands...",closeOnSelect:!1,commands:[{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>p(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"],onSelect:()=>p(w=>w+1)}]})]})}function lo(){const[a,e]=c.useState(!0),[t,s]=c.useState("none"),[l,p]=c.useState("N/A"),w=c.useCallback(B=>{p(U=>U==="N/A"?B:`${U} -> ${B}`)},[]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:b,children:l})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(u,{open:a,onOpenChange:B=>{e(B),B||w("open:false")},onCloseReason:B=>{s(B),w(`reason:${B}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>w("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>w("select")}]})]})}function uo(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function mo(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}]})}function po(){const[a,e]=c.useState(!0),[t,s]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>s(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>s(l=>l+1)}],placeholder:"Try searching publish..."})]})}function yo(){const[a,e]=c.useState(!0),[t,s]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"missing-handler-close-reason",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,onCloseReason:l=>s(l),commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"]},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>s("item-select")}],placeholder:"Try searching run..."})]})}function wo(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function bo(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function go(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release"},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release"}],placeholder:"Try searching rollback..."})}function vo(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function ho(){const[a,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("h3",{id:"deploy-command-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Deploy Release"}),o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Fallback deploy command",ariaLabelledBy:"deploy-command-heading",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})]})}function xo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>s(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>s(l=>l+1)}]})]})}function ko(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),l=c.useMemo(()=>t%2===0?[{key:"deploy",label:"Deploy API"},{key:"deploy",label:"Deploy Web"},{key:"preview",label:"Preview Environment"}]:[{key:"lint",label:"Run lint checks"},{key:"deploy",label:"Deploy API"},{key:"deploy",label:"Deploy Web"},{key:"preview",label:"Preview Environment"}],[t]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Refresh version:"," ",o.jsx("strong",{"data-testid":"duplicate-refresh-version",style:b,children:t})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>s(p=>p+1),children:"Refresh command list"}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:l})]})}function Bo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>s(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function fo(){const[a,e]=c.useState(!1);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(u,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Eo(){const[a,e]=c.useState(!1),[t,s]=c.useState(!0);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:y,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:b,children:t?"enabled":"disabled"})]}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>s(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Co(){const[a,e]=c.useState(!0),[t,s]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:b,children:a?"open":"closed"})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:s,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function To(){const[a,e]=c.useState(!0),[t,s]=c.useState(""),[l,p]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:b,children:a?"open":"closed"})]}),o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:b,children:l})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:s,onEscapeKeyDown:()=>p(w=>w+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Ro(){const[a,e]=c.useState(!0),[t,s]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:b,children:t||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:s,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Do(){const[a,e]=c.useState(!0),[t,s]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>s("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>s("send-report")}]})]})}function So(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Io(){const[a,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("p",{style:y,children:"With caret in the middle of query text, Home/End should keep native cursor behavior and avoid overriding active command focus."}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"release-checklist",label:"Release Checklist",keywords:["release"]},{key:"release-notes",label:"Release Notes",keywords:["release"]},{key:"release-pipeline",label:"Release Pipeline",keywords:["release"]}]})]})}function Ho(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:b,children:l||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:b,children:a?"open":"closed"})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>s(w=>w+1)}]})]})}function Ao(){const[a,e]=c.useState(!0),[t,s]=c.useState(0);return c.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,onEscapeKeyDown:()=>s(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function Po(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),[l,p]=c.useState("");return c.useEffect(()=>{const w=B=>{(B.key==="Enter"||B.key==="Escape")&&B.preventDefault()};return document.addEventListener("keydown",w,!0),()=>{document.removeEventListener("keydown",w,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-preempt-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-preempt-query-value",style:b,children:l||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:p,commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>s(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function Oo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-local-preempt-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-local-preempt-query-value",style:b,children:l||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:p,onSearchKeyDown:w=>{(w.key==="Enter"||w.key==="Escape")&&w.preventDefault()},commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>s(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function jo(){const[a,e]=c.useState(!0);return o.jsx(v,{children:o.jsx(u,{open:a,onOpenChange:e,title:"Local close-button guard palette",onCloseButtonKeyDown:t=>{(t.key==="Enter"||t.key===" "||t.key==="Space"||t.key==="Spacebar")&&t.preventDefault()},commands:[{key:"open-settings",label:"Open Settings",keywords:["open"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})})}function Lo(){const[a,e]=c.useState(!1);return o.jsx(v,{align:"start",children:o.jsx(eo,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...y},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(H,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(u,{open:a,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const Y={render:()=>o.jsx(La,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const s=e.getByRole("option",{name:"Publish Release"});await n(s).toHaveAttribute("aria-disabled","true"),await n(s).toHaveAttribute("tabindex","-1")}},J={render:()=>o.jsx(ro,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await A(()=>{n(t).toHaveFocus()}),await i.type(t,"run"),await n(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},X={render:()=>o.jsx(co,{})},Z={render:()=>o.jsx(qa,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},ee={render:()=>o.jsx(io,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await n(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await n(t).toHaveAttribute("aria-busy","true"),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).toHaveAttribute("aria-keyshortcuts","Escape"),await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands..."),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Finish loading commands"})),await i.click(e.getByRole("button",{name:"Reopen loading palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await n(t).not.toHaveAttribute("aria-busy"),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(e.getByRole("listbox",{name:"Command results"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.getByTestId("loading-selection-count")).toHaveTextContent("1")}},te={args:{open:!0,loading:!0,loadingContent:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings"}]},play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands..."),await n(e.getByRole("status")).toHaveTextContent("Loading commands...")}},ne={args:{open:!0,emptyMessage:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"no-match"),await n(e.getByText("No commands found.")).toBeInTheDocument()}},ae={args:{open:!0,loading:!0,loadingContent:0,onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("0"),await n(e.getByRole("status")).toHaveTextContent("0")}},oe={render:()=>o.jsx(lo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=a.ownerDocument;await n(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await i.click(t.body),await n(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"}));const s=e.getByRole("dialog",{name:"Command Palette"});await n(s).toBeInTheDocument(),await n(s).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close command palette"});await n(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.click(l),await n(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},se={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:"Command Palette",description:"Shift+Tab from search input should restore close-button focus ring fallback.",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),s=await e.findByRole("button",{name:"Close command palette"});await i.click(t),await n(t).toHaveFocus(),await i.tab({shift:!0}),await n(s).toHaveFocus(),await n(s.getAttribute("style")).toContain("var(--aurora-focus-ring)"),g.mouseDown(s,{button:0,ctrlKey:!0}),await n(s.getAttribute("style")).toContain("var(--aurora-focus-ring)")}},re={render:()=>o.jsx(qa,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await n(l).toBeTruthy(),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",l),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await i.type(t,"no-match"),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).not.toHaveAttribute("aria-controls"),await n(t).not.toHaveAttribute("aria-activedescendant"),await i.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",p.getAttribute("id")),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},ce={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},ie={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await n(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},le={render:()=>o.jsxs(v,{align:"start",children:[o.jsx("h3",{id:"command-palette-heading",style:{margin:0},children:"AI release command center"}),o.jsx(u,{open:!0,onOpenChange:()=>{},title:o.jsx("span",{"aria-hidden":!0,children:"⌘"}),ariaLabel:"Fallback AI command center",ariaLabelledBy:"command-palette-heading",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]})]}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("dialog",{name:"AI release command center"});await n(t).toHaveAttribute("aria-labelledby","command-palette-heading"),await n(t).not.toHaveAttribute("aria-label")}},de={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:0,description:0,commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),s=(await e.findByRole("dialog",{name:"0"})).getAttribute("aria-describedby");await n(s).toBeTruthy(),await n(e.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},ue={render:()=>o.jsx(uo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await n(t).toHaveAttribute("aria-keyshortcuts","Escape"),await n(e.getByTestId("command-palette-disabled-results-message")).toHaveTextContent("Matching commands are currently unavailable.");for(const s of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:s,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await n(l.defaultPrevented).toBe(!1)}}},me={render:()=>o.jsx(mo,{}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape");const s=t.getAttribute("aria-activedescendant");n(s).toBeTruthy();for(const l of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const p=new KeyboardEvent("keydown",{key:l,bubbles:!0,cancelable:!0});t.dispatchEvent(p),await n(p.defaultPrevented).toBe(!1)}await n(t.getAttribute("aria-activedescendant")).toBe(s)}},pe={render:()=>o.jsx(po,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const s=e.getByRole("option",{name:"Publish Release"});await n(s).toHaveAttribute("aria-disabled","true"),await n(s).not.toHaveAttribute("aria-keyshortcuts"),await i.click(s),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("executed-count")).toHaveTextContent("0")}},ye={render:()=>o.jsx(yo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"run"),await i.click(e.getByRole("option",{name:"Run E2E Smoke"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("missing-handler-close-reason")).toHaveTextContent("none")}},we={render:()=>o.jsx(La,{}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("option",{name:"Create Spec"}),s=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(s),n(s.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),n(l.defaultPrevented).toBe(!0)}},be={render:()=>o.jsx(wo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await n(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},ge={render:()=>o.jsx(bo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox");await n(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ve={render:()=>o.jsx(go,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox"),s=e.getByRole("option",{name:"Deploy Release"});await n(s).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},he={render:()=>o.jsx(vo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox"),s=e.getByRole("option",{name:"Deploy Release"});await n(s).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},xe={render:()=>o.jsx(ho,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox"),s=e.getByRole("option",{name:"Deploy Release"});await n(s).toHaveAttribute("aria-labelledby","deploy-command-heading"),await n(s).not.toHaveAttribute("aria-label"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ke={render:()=>o.jsx(xo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),g.keyDown(t,{key:"Enter",repeat:!1}),await A(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),g.keyDown(t,{key:"Enter",repeat:!0}),await A(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Be={render:()=>o.jsx(ko,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.keyboard("{ArrowDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),await n(e.getByRole("option",{name:"Deploy Web"})).toHaveAttribute("aria-selected","true"),g.click(e.getByRole("button",{name:"Refresh command list"})),await A(()=>{n(e.getByTestId("duplicate-refresh-version")).toHaveTextContent("1")}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-2")),await n(e.getByRole("option",{name:"Deploy Web"})).toHaveAttribute("aria-selected","true")}},fe={render:()=>o.jsx(Bo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await i.keyboard("{Control>}{Enter}{/Control}"),await i.keyboard("{Meta>}{Space}{/Meta}"),g.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Ke(t,"Enter"),g.keyDown(t,{key:"Enter",repeat:!0}),g.keyDown(t,{key:"Spacebar",altKey:!0}),await n(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Ee={render:()=>o.jsx(fo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await n(t).toBeInTheDocument(),await n(t).not.toHaveAttribute("aria-keyshortcuts"),await n(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await n(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await n(t).toBeInTheDocument()}},Ce={render:()=>o.jsx(Eo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=a.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),g.pointerDown(t.body),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const s=e.getByRole("combobox",{name:"Search commands"});await i.clear(s),await i.type(s,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await n(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},Te={render:()=>o.jsx(Co,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("query-value")).toHaveTextContent("N/A"),await n(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("open-state")).toHaveTextContent("closed")}},Re={render:()=>o.jsx(To,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),g.keyDown(t,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},De={render:()=>o.jsx(Ro,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.type(t,"release"),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),g.keyDown(t,{key:"Escape",ctrlKey:!0}),g.keyDown(t,{key:"Escape",altKey:!0}),g.keyDown(t,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),g.keyDown(t,{key:"Escape",shiftKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},Se={render:()=>o.jsx(Do,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const s=t.getAttribute("aria-activedescendant");n(s).toBeTruthy();const l=a.ownerDocument.getElementById(s);await n(l).toBeInTheDocument(),await n(l).toHaveAttribute("role","option"),await n(l).not.toHaveAttribute("aria-disabled","true"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Ie={render:()=>o.jsx(So,{}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.keyboard("{PageDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),g.keyDown(t,{key:"PageDown",ctrlKey:!0}),g.keyDown(t,{key:"End",metaKey:!0}),g.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),g.keyDown(t,{key:"ArrowUp",metaKey:!0}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),await i.keyboard("{PageUp}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},He={render:()=>o.jsx(Io,{}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.type(t,"release"),await i.keyboard("{ArrowDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),t instanceof HTMLInputElement&&t.setSelectionRange(2,2),g.keyDown(t,{key:"Home"}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),g.keyDown(t,{key:"End"}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"))}},Ae={render:()=>o.jsx(Ho,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.type(t,"deploy"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),g.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),g.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),g.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Ke(t,"Escape"),Ke(t,"ArrowDown"),Ke(t,"Enter"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await n(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},Pe={render:()=>o.jsx(Ao,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},Oe={render:()=>o.jsx(Po,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await n(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await n(e.getByTestId("command-preempt-selection-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},je={render:()=>o.jsx(Oo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await n(e.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await n(e.getByTestId("command-local-preempt-selection-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Le={render:()=>o.jsx(jo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("dialog",{name:"Local close-button guard palette"}),s=e.getByRole("button",{name:"Close command palette"});s.focus(),g.keyDown(s,{key:"Enter"}),await A(()=>{n(s.style.transform).toContain("translateY(0")}),await n(t).toBeInTheDocument(),g.keyUp(s,{key:"Enter"}),g.keyDown(s,{key:"Space"}),await A(()=>{n(s.style.transform).toContain("translateY(0")}),await n(t).toBeInTheDocument(),g.keyUp(s,{key:"Space"})}},qe={render:()=>o.jsx(Lo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await i.click(t),await n(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Open nested palette"})),await n(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await A(()=>{n(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await n(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await A(()=>{n(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await n(t).toHaveFocus()}};var gt,vt,ht;Y.parameters={...Y.parameters,docs:{...(gt=Y.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ht=(vt=Y.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var xt,kt,Bt;J.parameters={...J.parameters,docs:{...(xt=J.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Bt=(kt=J.parameters)==null?void 0:kt.docs)==null?void 0:Bt.source}}};var ft,Et,Ct;X.parameters={...X.parameters,docs:{...(ft=X.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Ct=(Et=X.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var Tt,Rt,Dt;Z.parameters={...Z.parameters,docs:{...(Tt=Z.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Dt=(Rt=Z.parameters)==null?void 0:Rt.docs)==null?void 0:Dt.source}}};var St,It,Ht;ee.parameters={...ee.parameters,docs:{...(St=ee.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Ht=(It=ee.parameters)==null?void 0:It.docs)==null?void 0:Ht.source}}};var At,Pt,Ot;te.parameters={...te.parameters,docs:{...(At=te.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ot=(Pt=te.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var jt,Lt,qt;ne.parameters={...ne.parameters,docs:{...(jt=ne.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(qt=(Lt=ne.parameters)==null?void 0:Lt.docs)==null?void 0:qt.source}}};var Kt,Nt,Mt;ae.parameters={...ae.parameters,docs:{...(Kt=ae.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Mt=(Nt=ae.parameters)==null?void 0:Nt.docs)==null?void 0:Mt.source}}};var Ft,$t,Ut;oe.parameters={...oe.parameters,docs:{...(Ft=oe.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
      name: "Close command palette"
    });
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await userEvent.click(closeButton);
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false");
  }
}`,...(Ut=($t=oe.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var Vt,Gt,zt;se.parameters={...se.parameters,docs:{...(Vt=se.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
      name: "Close command palette"
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
}`,...(zt=(Gt=se.parameters)==null?void 0:Gt.docs)==null?void 0:zt.source}}};var Qt,Wt,_t;re.parameters={...re.parameters,docs:{...(Qt=re.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(_t=(Wt=re.parameters)==null?void 0:Wt.docs)==null?void 0:_t.source}}};var Yt,Jt,Xt;ce.parameters={...ce.parameters,docs:{...(Yt=ce.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Xt=(Jt=ce.parameters)==null?void 0:Jt.docs)==null?void 0:Xt.source}}};var Zt,en,tn;ie.parameters={...ie.parameters,docs:{...(Zt=ie.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(tn=(en=ie.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on;le.parameters={...le.parameters,docs:{...(nn=le.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(an=le.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var sn,rn,cn;de.parameters={...de.parameters,docs:{...(sn=de.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(cn=(rn=de.parameters)==null?void 0:rn.docs)==null?void 0:cn.source}}};var ln,dn,un;ue.parameters={...ue.parameters,docs:{...(ln=ue.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(un=(dn=ue.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var mn,pn,yn;me.parameters={...me.parameters,docs:{...(mn=me.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(yn=(pn=me.parameters)==null?void 0:pn.docs)==null?void 0:yn.source}}};var wn,bn,gn;pe.parameters={...pe.parameters,docs:{...(wn=pe.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(gn=(bn=pe.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var vn,hn,xn;ye.parameters={...ye.parameters,docs:{...(vn=ye.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(xn=(hn=ye.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};var kn,Bn,fn;we.parameters={...we.parameters,docs:{...(kn=we.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(fn=(Bn=we.parameters)==null?void 0:Bn.docs)==null?void 0:fn.source}}};var En,Cn,Tn;be.parameters={...be.parameters,docs:{...(En=be.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(Tn=(Cn=be.parameters)==null?void 0:Cn.docs)==null?void 0:Tn.source}}};var Rn,Dn,Sn;ge.parameters={...ge.parameters,docs:{...(Rn=ge.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Sn=(Dn=ge.parameters)==null?void 0:Dn.docs)==null?void 0:Sn.source}}};var In,Hn,An;ve.parameters={...ve.parameters,docs:{...(In=ve.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(An=(Hn=ve.parameters)==null?void 0:Hn.docs)==null?void 0:An.source}}};var Pn,On,jn;he.parameters={...he.parameters,docs:{...(Pn=he.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(jn=(On=he.parameters)==null?void 0:On.docs)==null?void 0:jn.source}}};var Ln,qn,Kn;xe.parameters={...xe.parameters,docs:{...(Ln=xe.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(Kn=(qn=xe.parameters)==null?void 0:qn.docs)==null?void 0:Kn.source}}};var Nn,Mn,Fn;ke.parameters={...ke.parameters,docs:{...(Nn=ke.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
}`,...(Fn=(Mn=ke.parameters)==null?void 0:Mn.docs)==null?void 0:Fn.source}}};var $n,Un,Vn;Be.parameters={...Be.parameters,docs:{...($n=Be.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  render: () => <DuplicateKeyRerenderStabilityPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.keyboard("{ArrowDown}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
    await expect(canvas.getByRole("option", {
      name: "Deploy Web"
    })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(canvas.getByRole("button", {
      name: "Refresh command list"
    }));
    await waitFor(() => {
      expect(canvas.getByTestId("duplicate-refresh-version")).toHaveTextContent("1");
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-2"));
    await expect(canvas.getByRole("option", {
      name: "Deploy Web"
    })).toHaveAttribute("aria-selected", "true");
  }
}`,...(Vn=(Un=Be.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Gn,zn,Qn;fe.parameters={...fe.parameters,docs:{...(Gn=fe.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    dispatchLegacyImeKeyDown(option, "Enter");
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
}`,...(Qn=(zn=fe.parameters)==null?void 0:zn.docs)==null?void 0:Qn.source}}};var Wn,_n,Yn;Ee.parameters={...Ee.parameters,docs:{...(Wn=Ee.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Yn=(_n=Ee.parameters)==null?void 0:_n.docs)==null?void 0:Yn.source}}};var Jn,Xn,Zn;Ce.parameters={...Ce.parameters,docs:{...(Jn=Ce.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
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
}`,...(Zn=(Xn=Ce.parameters)==null?void 0:Xn.docs)==null?void 0:Zn.source}}};var ea,ta,na;Te.parameters={...Te.parameters,docs:{...(ea=Te.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(na=(ta=Te.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var aa,oa,sa;Re.parameters={...Re.parameters,docs:{...(aa=Re.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(sa=(oa=Re.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var ra,ca,ia;De.parameters={...De.parameters,docs:{...(ra=De.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(ca=De.parameters)==null?void 0:ca.docs)==null?void 0:ia.source}}};var la,da,ua;Se.parameters={...Se.parameters,docs:{...(la=Se.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ua=(da=Se.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ma,pa,ya;Ie.parameters={...Ie.parameters,docs:{...(ma=Ie.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(ya=(pa=Ie.parameters)==null?void 0:pa.docs)==null?void 0:ya.source}}};var wa,ba,ga;He.parameters={...He.parameters,docs:{...(wa=He.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
    if (input instanceof HTMLInputElement) {
      input.setSelectionRange(2, 2);
    }
    fireEvent.keyDown(input, {
      key: "Home"
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
    fireEvent.keyDown(input, {
      key: "End"
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
  }
}`,...(ga=(ba=He.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var va,ha,xa;Ae.parameters={...Ae.parameters,docs:{...(va=Ae.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(xa=(ha=Ae.parameters)==null?void 0:ha.docs)==null?void 0:xa.source}}};var ka,Ba,fa;Pe.parameters={...Pe.parameters,docs:{...(ka=Pe.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(fa=(Ba=Pe.parameters)==null?void 0:Ba.docs)==null?void 0:fa.source}}};var Ea,Ca,Ta;Oe.parameters={...Oe.parameters,docs:{...(Ea=Oe.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Ta=(Ca=Oe.parameters)==null?void 0:Ca.docs)==null?void 0:Ta.source}}};var Ra,Da,Sa;je.parameters={...je.parameters,docs:{...(Ra=je.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Sa=(Da=je.parameters)==null?void 0:Da.docs)==null?void 0:Sa.source}}};var Ia,Ha,Aa;Le.parameters={...Le.parameters,docs:{...(Ia=Le.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  render: () => <CloseButtonManagedKeysPreemptedLocallyPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const dialog = await canvas.findByRole("dialog", {
      name: "Local close-button guard palette"
    });
    const closeButton = canvas.getByRole("button", {
      name: "Close command palette"
    });
    closeButton.focus();
    fireEvent.keyDown(closeButton, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    await expect(dialog).toBeInTheDocument();
    fireEvent.keyUp(closeButton, {
      key: "Enter"
    });
    fireEvent.keyDown(closeButton, {
      key: "Space"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    await expect(dialog).toBeInTheDocument();
    fireEvent.keyUp(closeButton, {
      key: "Space"
    });
  }
}`,...(Aa=(Ha=Le.parameters)==null?void 0:Ha.docs)==null?void 0:Aa.source}}};var Pa,Oa,ja;qe.parameters={...qe.parameters,docs:{...(Pa=qe.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(ja=(Oa=qe.parameters)==null?void 0:Oa.docs)==null?void 0:ja.source}}};const Jo=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","LoadingState","BlankLoadingContentFallback","BlankEmptyMessageFallback","NumericFeedbackCopySemantics","CloseReasonTelemetry","CloseButtonFocusIntentReentry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","LabelledByPrecedence","NumericTitleDescriptionSemantics","DisabledOnlyResults","SingleActionableShortcutHints","DisabledCommandGuard","MissingSelectHandlerGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","IconOnlyCommandAriaLabelSearchFallback","IconOnlyCommandTextValueFallback","IconOnlyCommandLabelledByPrecedence","PersistentSelection","DuplicateKeyRerenderStability","OptionActivationKeyGuard","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","HomeEndCaretPriority","ImeCompositionGuard","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","CloseButtonManagedKeysPreemptedByLocalHandler","NestedDismissOrder"];export{X as AiInteractionFlow,ne as BlankEmptyMessageFallback,te as BlankLoadingContentFallback,se as CloseButtonFocusIntentReentry,Le as CloseButtonManagedKeysPreemptedByLocalHandler,oe as CloseReasonTelemetry,pe as DisabledCommandGuard,ue as DisabledOnlyResults,Be as DuplicateKeyRerenderStability,re as EmptyStateAriaControlsLifecycle,Te as EscapeClearsQueryFirst,Pe as EscapePreemptedByGlobalHandler,Re as EscapeRepeatGuard,De as EscapeShortcutHintPrecision,Ce as GuardedDismissEvents,He as HomeEndCaretPriority,ve as IconOnlyCommandAriaLabelSearchFallback,xe as IconOnlyCommandLabelledByPrecedence,ge as IconOnlyCommandNaming,he as IconOnlyCommandTextValueFallback,Ae as ImeCompositionGuard,le as LabelledByPrecedence,ee as LoadingState,ie as LocalizedDialogCopy,ce as LocalizedResultsLabel,Oe as ManagedKeysPreemptedByGlobalHandler,je as ManagedKeysPreemptedByLocalHandler,ye as MissingSelectHandlerGuard,qe as NestedDismissOrder,Ee as NonDismissible,ae as NumericFeedbackCopySemantics,de as NumericTitleDescriptionSemantics,J as OpenFromTriggerKeyboardFirst,fe as OptionActivationKeyGuard,we as OptionMouseDownPolicy,Ie as PagedKeyboardNavigation,ke as PersistentSelection,Z as QueryTelemetry,Se as RefinedSearchKeepsActiveCommand,Y as SearchCommands,me as SingleActionableShortcutHints,be as TextValueAndAccentSearch,Jo as __namedExportsOrder,Yo as default};
