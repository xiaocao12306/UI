import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as D}from"./Button-DvJUO9m9.js";import{P as go}from"./Popover-Ck-3x_Zo.js";import{D as vo}from"./Dialog-BENqUcbi.js";import{I as ho}from"./Input-B9xcXif8.js";import{within as d,userEvent as i,expect as n,fireEvent as g,waitFor as A}from"./index-DgAF9SIF.js";import{b as v,s as y,a as b}from"./storyShowcase-DlKirntE.js";import"./focusTabbable-gnwmp6b7.js";import"./bodyScrollLock-DU3WNas9.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function u({open:a,onOpenChange:e,commands:t,title:s="Command Palette",description:l="Quickly search and execute workspace actions.",ariaLabel:p,ariaLabelledBy:w,searchAriaLabel:B="Search commands",resultsAriaLabel:O="Command results",closeOnSelect:Ve=!0,clearQueryOnEscape:N=!0,closeOnEscape:$=!0,closeOnOutsidePointer:Ja=!0,onEscapeKeyDown:ze,onSearchKeyDown:Ge,onCloseButtonKeyDown:Xa,onPointerDownOutside:Qe,closeLabel:Za,placeholder:eo="Search commands...",loading:to=!1,loadingContent:Q="Loading commands...",emptyMessage:at="No commands found.",disabledResultsMessage:ot="Matching commands are currently unavailable.",onQueryChange:E,onCloseReason:S,getResultsStatusText:st=ft}){const[I,We]=c.useState(""),[W,C]=c.useState(0),no=c.useRef(null),U=c.useRef(null),_=c.useRef(null),rt=c.useRef(a);c.useRef(null),c.useRef(null),c.useRef(null);const M=c.useId(),_e=c.useId(),ct=c.useId(),it=c.useRef(null),ao=P(B,"Search commands"),oo=P(O,"Command results"),so=P(Za,"Close command palette"),ro=P(eo,"Search commands..."),lt=P(w),co=lt===void 0?P(p):void 0,dt=z(Ve,!0),Ye=z(N,!0),Y=z($,!0),ut=z(Ja,!0),T=z(to,!1),mt=c.useMemo(()=>xo(Q),[Q]),io=tt(Q)?Q:"Loading commands...",lo=tt(at)?at:"No commands found.",uo=tt(ot)?ot:"Matching commands are currently unavailable.",J=c.useCallback(r=>{_.current=r,S==null||S(r)},[S]),pt=c.useCallback(r=>{J(r),e(!1),_.current=null},[J,e]),mo=c.useCallback(r=>{!r&&a&&_.current===null&&(S==null||S("close-button")),_.current=null,e(r)},[S,e,a]);c.useEffect(()=>{!a&&rt.current&&(We(r=>(r.length>0&&(E==null||E("")),"")),C(0)),rt.current=a},[E,a]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]);const Je=c.useMemo(()=>xt(I.trim()),[I]),Xe=c.useMemo(()=>{const r=new Map;t.forEach(h=>{r.set(h.key,(r.get(h.key)??0)+1)});const m=new Map;return t.map(h=>{const R=r.get(h.key)??0,L=m.get(h.key)??0;return m.set(h.key,L+1),{item:h,renderKey:R>1?`${h.key}__duplicate-${L}`:h.key}})},[t]),X=c.useMemo(()=>Je?Xe.filter(({item:r})=>{const h=[ht(r),...r.keywords??[]].join(" ");return xt(h).includes(Je)}):Xe,[Xe,Je]),x=c.useMemo(()=>X.map(r=>r.item),[X]),F=c.useMemo(()=>X.map(r=>r.renderKey),[X]),V=c.useMemo(()=>x.reduce((r,m)=>m.disabled?r:r+1,0),[x]),yt=!T&&x.length>0&&V===0,H=!T&&V>1,wt=!T&&V>0,Ze=!T&&x.length>0,po=c.useMemo(()=>{const r=[];return H&&r.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp"),wt&&r.push("Enter"),(Y||Ye&&I.length>0)&&r.push("Escape"),r.length>0?r.join(" "):void 0},[wt,H,I.length,Ye,Y]),yo=c.useMemo(()=>{if(T)return mt;const r={query:I,visibleCount:x.length,enabledCount:V,totalCount:t.length},m=ft(r),h=st(r);return ko(h,m)},[t.length,V,x.length,st,T,I,mt]),wo=yt?`${_e} ${ct}`:_e,j=c.useMemo(()=>x.reduce((r,m,h)=>(m.disabled||r.push(h),r),[]),[x]),q=j[0]??-1,bt=j[j.length-1]??-1,f=c.useMemo(()=>{if(W<0)return-1;const r=x[W];return!r||r.disabled?-1:W},[W,x]);c.useEffect(()=>{if(x.length===0){U.current=null,C(-1);return}const r=U.current;if(r){const m=F.findIndex((h,R)=>{var L;return!((L=x[R])!=null&&L.disabled)&&h===r});if(m>=0){C(m);return}}C(q),U.current=q>=0?F[q]??null:null},[x,F,q]),c.useEffect(()=>{if(f<0){U.current=null;return}U.current=F[f]??null},[F,f]),c.useEffect(()=>{if(!a||f<0)return;const r=it.current;if(!r)return;const m=r.ownerDocument.getElementById(`${M}-option-${f}`);!m||!r.contains(m)||typeof m.scrollIntoView=="function"&&m.scrollIntoView({block:"nearest"})},[M,a,f]);const et=c.useCallback(r=>{const m=x[r];!m||m.disabled||m.onSelect&&(m.onSelect(),dt&&pt("item-select"))},[pt,x,dt]),gt=r=>{var h;if(x.length===0)return;let m=f<0?r===1?-1:0:f;for(let R=0;R<x.length;R+=1)if(m=(m+r+x.length)%x.length,!((h=x[m])!=null&&h.disabled)){C(m);return}},vt=r=>{if(j.length===0)return;const m=j.indexOf(f);if(m<0){C(r===1?q:bt);return}const h=Math.min(j.length-1,Math.max(0,m+r*5));C(j[h]??q)};return o.jsx(vo,{open:a,onOpenChange:mo,title:s,description:l,ariaLabel:co,ariaLabelledBy:lt,closeLabel:so,size:"md",closeOnEscape:Y,closeOnOutsidePointer:ut,onCloseButtonKeyDown:Xa,onEscapeKeyDown:r=>{ze==null||ze(r),!(r.defaultPrevented||!Y)&&J("escape-key")},onPointerDownOutside:r=>{Qe==null||Qe(r),!(r.defaultPrevented||!ut)&&J("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(ho,{ref:no,"data-autofocus":"",role:"combobox","aria-busy":T||void 0,"aria-expanded":Ze,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":Ze?M:void 0,"aria-activedescendant":!T&&f>=0?`${M}-option-${f}`:void 0,"aria-describedby":wo,"aria-keyshortcuts":po,placeholder:ro,value:I,onChange:r=>{We(r.target.value),E==null||E(r.target.value)},onKeyDown:r=>{if(Ge==null||Ge(r),!kt(r)&&!r.defaultPrevented&&!(r.altKey||r.ctrlKey||r.metaKey)){if(r.key==="Escape"){if(r.repeat)return;Ye&&I.length>0&&(r.preventDefault(),We(""),E==null||E(""));return}if(r.key==="ArrowDown"){if(!H)return;r.preventDefault(),gt(1);return}if(r.key==="ArrowUp"){if(!H)return;r.preventDefault(),gt(-1);return}if(r.key==="Home"){if(!H||!Bt(r))return;r.preventDefault(),C(q);return}if(r.key==="End"){if(!H||!Bt(r))return;r.preventDefault(),C(bt);return}if(r.key==="PageDown"){if(!H)return;r.preventDefault(),vt(1);return}if(r.key==="PageUp"){if(!H)return;r.preventDefault(),vt(-1);return}if(r.key==="Enter"&&!T&&f>=0){if(r.preventDefault(),r.repeat)return;et(f)}}},"aria-label":ao}),o.jsx("p",{id:_e,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:yo}),T?o.jsx("p",{"data-testid":"command-palette-loading-content",style:{margin:0,color:"var(--aurora-text-secondary)"},children:io}):Ze?o.jsxs(o.Fragment,{children:[o.jsx("div",{id:M,ref:it,role:"listbox","aria-label":oo,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:x.map((r,m)=>{const h=m===f,R=P(r.ariaLabelledBy),L=G(r.label).trim().length>0,bo=R?void 0:P(r.ariaLabel,L?void 0:ht(r));return o.jsx("div",{id:`${M}-option-${m}`,role:"option","aria-selected":h,"aria-disabled":r.disabled||void 0,"aria-labelledby":R,"aria-label":bo,"aria-keyshortcuts":r.disabled?void 0:"Enter Space","aria-posinset":m+1,"aria-setsize":x.length,tabIndex:-1,onPointerDown:k=>{k.pointerType==="mouse"||!Bo(k.button)||k.ctrlKey||k.preventDefault()},onMouseDown:k=>{k.button!==0||k.ctrlKey||k.preventDefault()},onMouseEnter:()=>{r.disabled||C(m)},onClick:()=>{r.disabled||et(m)},onKeyDown:k=>{if(!r.disabled&&!k.defaultPrevented&&!kt(k)&&!(k.altKey||k.ctrlKey||k.metaKey)&&(k.key==="Enter"||k.key===" "||k.key==="Space"||k.key==="Spacebar")){if(k.preventDefault(),k.repeat)return;et(m)}},style:{border:"1px solid var(--aurora-border-default)",background:h?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:r.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:r.disabled?"not-allowed":"pointer"},children:r.label},F[m]??`${r.key}__source-fallback-${m}`)})}),yt?o.jsx("p",{id:ct,"data-testid":"command-palette-disabled-results-message",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:uo}):null]}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:lo})]})})}function ht(a){if(typeof a.textValue=="string"){const e=K(a.textValue);if(e.length>0)return e}if(typeof a.ariaLabel=="string"){const e=K(a.ariaLabel);if(e.length>0)return e}return K(G(a.label))}function xt(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function kt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Bt(a){if(a.key!=="Home"&&a.key!=="End")return!0;const e=a.currentTarget,t=e.selectionStart,s=e.selectionEnd;return t===null||s===null?!0:t!==s?!1:a.key==="Home"?t===0:s===e.value.length}function ft({query:a,visibleCount:e,enabledCount:t,totalCount:s}){const l=a.trim();return l.length===0?t!==s?`${t} of ${s} command${s===1?"":"s"} available.`:`${s} command${s===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function xo(a){const e=K(G(a));return e.length>0?e:"Loading commands..."}function ko(a,e){if(typeof a=="string"){const t=K(a);if(t.length>0)return t}return e}function tt(a){return a==null||typeof a=="boolean"?!1:typeof a=="string"?a.trim().length>0:!0}function G(a){if(typeof a=="string")return a;if(typeof a=="number")return String(a);if(Array.isArray(a))return K(a.map(t=>G(t)).filter(t=>t.length>0).join(" "));if(!c.isValidElement(a))return"";const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?K(e["aria-label"]):G(e.children)}function P(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function z(a,e){return typeof a!="boolean"?e:a}function Bo(a){return typeof a!="number"||a<=0}function K(a){return a.replace(/\s+/g," ").trim()}u.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const nt=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],ps={title:"AI/CommandPalette",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:nt}};function Ue(a,e){const t=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),a.dispatchEvent(t)}function _a(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:nt,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function fo(){const[a,e]=c.useState(!1),[t,s]=c.useState("none");return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:b,children:t})]}),o.jsx(D,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>s("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>s("Open Theme Pack")}]})]})}function Eo(){const[a,e]=c.useState(!0),[t,s]=c.useState("None"),l=nt.map(p=>({...p,onSelect:()=>s(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last AI action: ",o.jsx("strong",{style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,commands:l})]})}function Ya(){const[a,e]=c.useState(!0),[t,s]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:b,children:t||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"],onSelect:()=>{}}],emptyMessage:"No matching AI workflow command.",onQueryChange:s,getResultsStatusText:({query:l,visibleCount:p,enabledCount:w})=>l.trim().length===0?"Command search ready.":`${w}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function Co(){const[a,e]=c.useState(!0),[t,s]=c.useState(!0),[l,p]=c.useState(0);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Executed commands while ready:"," ",o.jsx("strong",{"data-testid":"loading-selection-count",style:b,children:l})]}),o.jsx(D,{size:"sm",variant:"outline",onClick:()=>s(w=>!w),children:t?"Finish loading commands":"Re-enable loading commands"}),o.jsx(D,{size:"sm",variant:"ghost",onClick:()=>e(!0),children:"Reopen loading palette"}),o.jsx(u,{open:a,onOpenChange:e,loading:t,loadingContent:"Syncing AI workflow commands...",closeOnSelect:!1,commands:[{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>p(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"],onSelect:()=>p(w=>w+1)}]})]})}function To(){const[a,e]=c.useState(!0),[t,s]=c.useState("none"),[l,p]=c.useState("N/A"),w=c.useCallback(B=>{p(O=>O==="N/A"?B:`${O} -> ${B}`)},[]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:b,children:l})]}),o.jsx(D,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(u,{open:a,onOpenChange:B=>{e(B),B||w("open:false")},onCloseReason:B=>{s(B),w(`reason:${B}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>w("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>w("select")}]})]})}function Ro(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Do(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}]})}function So(){const[a,e]=c.useState(!0),[t,s]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>s(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>s(l=>l+1)}],placeholder:"Try searching publish..."})]})}function Io(){const[a,e]=c.useState(!0),[t,s]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"missing-handler-close-reason",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,onCloseReason:l=>s(l),commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"]},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>s("item-select")}],placeholder:"Try searching run..."})]})}function Ho(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Po(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function Ao(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release"},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release"}],placeholder:"Try searching rollback..."})}function Oo(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function jo(){const[a,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("h3",{id:"deploy-command-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Deploy Release"}),o.jsx(u,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Fallback deploy command",ariaLabelledBy:"deploy-command-heading",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})]})}function qo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>s(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>s(l=>l+1)}]})]})}function Lo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),l=c.useMemo(()=>t%2===0?[{key:"deploy",label:"Deploy API"},{key:"deploy",label:"Deploy Web"},{key:"preview",label:"Preview Environment"}]:[{key:"lint",label:"Run lint checks"},{key:"deploy",label:"Deploy API"},{key:"deploy",label:"Deploy Web"},{key:"preview",label:"Preview Environment"}],[t]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Refresh version:"," ",o.jsx("strong",{"data-testid":"duplicate-refresh-version",style:b,children:t})]}),o.jsx(D,{size:"sm",variant:"outline",onClick:()=>s(p=>p+1),children:"Refresh command list"}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:l})]})}function Ko(){const[a,e]=c.useState(!0),[t,s]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>s(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function No(){const[a,e]=c.useState(!1);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(D,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(u,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Mo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),[l,p]=c.useState(0),[w,B]=c.useState(0),[O,Ve]=c.useState("");return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Runtime bool-like config from CMS/JSON should degrade safely: invalid flags fall back to defaults (`closeOnSelect/clearQueryOnEscape/closeOnEscape/closeOnOutsidePointer=true`, `loading=false`)."}),o.jsxs("p",{style:y,children:["Selected:"," ",o.jsx("strong",{"data-testid":"runtime-boolean-selected",style:b,children:t})," ","· Escape closes:"," ",o.jsx("strong",{"data-testid":"runtime-boolean-escape",style:b,children:l})," ","· Outside closes:"," ",o.jsx("strong",{"data-testid":"runtime-boolean-outside",style:b,children:w})," ","· Query:"," ",o.jsx("strong",{"data-testid":"runtime-boolean-query",style:b,children:O||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:N=>{N||(O.length>0?p($=>$+1):B($=>$+1)),e(N)},closeOnSelect:0,clearQueryOnEscape:0,closeOnEscape:0,closeOnOutsidePointer:0,loading:"invalid-loading-flag",onQueryChange:Ve,commands:[{key:"deploy-release",label:"Deploy Release",keywords:["deploy"],onSelect:()=>s(N=>N+1)}]}),o.jsx(D,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Reopen runtime config palette"}),o.jsx("button",{type:"button",children:"Outside target"})]})}function Fo(){const[a,e]=c.useState(!1),[t,s]=c.useState(!0);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:y,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:b,children:t?"enabled":"disabled"})]}),o.jsx(D,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>s(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function $o(){const[a,e]=c.useState(!0),[t,s]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:b,children:a?"open":"closed"})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:s,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Uo(){const[a,e]=c.useState(!0),[t,s]=c.useState(""),[l,p]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:b,children:a?"open":"closed"})]}),o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:b,children:l})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:s,onEscapeKeyDown:()=>p(w=>w+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Vo(){const[a,e]=c.useState(!0),[t,s]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:b,children:t||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:s,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function zo(){const[a,e]=c.useState(!0),[t,s]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>s("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>s("send-report")}]})]})}function Go(){const[a,e]=c.useState(!0);return o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Qo(){const[a,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("p",{style:y,children:"With caret in the middle of query text, Home/End should keep native cursor behavior and avoid overriding active command focus."}),o.jsx(u,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"release-checklist",label:"Release Checklist",keywords:["release"]},{key:"release-notes",label:"Release Notes",keywords:["release"]},{key:"release-pipeline",label:"Release Pipeline",keywords:["release"]}]})]})}function Wo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:b,children:l||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:b,children:a?"open":"closed"})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>s(w=>w+1)}]})]})}function _o(){const[a,e]=c.useState(!0),[t,s]=c.useState(0);return c.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:b,children:t})]}),o.jsx(u,{open:a,onOpenChange:e,onEscapeKeyDown:()=>s(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function Yo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),[l,p]=c.useState("");return c.useEffect(()=>{const w=B=>{(B.key==="Enter"||B.key==="Escape")&&B.preventDefault()};return document.addEventListener("keydown",w,!0),()=>{document.removeEventListener("keydown",w,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-preempt-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-preempt-query-value",style:b,children:l||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:p,commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>s(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function Jo(){const[a,e]=c.useState(!0),[t,s]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-local-preempt-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-local-preempt-query-value",style:b,children:l||"N/A"})]}),o.jsx(u,{open:a,onOpenChange:e,onQueryChange:p,onSearchKeyDown:w=>{(w.key==="Enter"||w.key==="Escape")&&w.preventDefault()},commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>s(w=>w+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function Xo(){const[a,e]=c.useState(!0);return o.jsx(v,{children:o.jsx(u,{open:a,onOpenChange:e,title:"Local close-button guard palette",onCloseButtonKeyDown:t=>{(t.key==="Enter"||t.key===" "||t.key==="Space"||t.key==="Spacebar")&&t.preventDefault()},commands:[{key:"open-settings",label:"Open Settings",keywords:["open"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})})}function Zo(){const[a,e]=c.useState(!1);return o.jsx(v,{align:"start",children:o.jsx(go,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...y},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(D,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(u,{open:a,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const Z={render:()=>o.jsx(_a,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const s=e.getByRole("option",{name:"Publish Release"});await n(s).toHaveAttribute("aria-disabled","true"),await n(s).toHaveAttribute("tabindex","-1")}},ee={render:()=>o.jsx(fo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await A(()=>{n(t).toHaveFocus()}),await i.type(t,"run"),await n(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},te={render:()=>o.jsx(Eo,{})},ne={render:()=>o.jsx(Ya,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},ae={render:()=>o.jsx(Co,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await n(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await n(t).toHaveAttribute("aria-busy","true"),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).toHaveAttribute("aria-keyshortcuts","Escape"),await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands..."),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Finish loading commands"})),await i.click(e.getByRole("button",{name:"Reopen loading palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await n(t).not.toHaveAttribute("aria-busy"),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(e.getByRole("listbox",{name:"Command results"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.getByTestId("loading-selection-count")).toHaveTextContent("1")}},oe={args:{open:!0,loading:!0,loadingContent:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings"}]},play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands..."),await n(e.getByRole("status")).toHaveTextContent("Loading commands...")}},se={args:{open:!0,emptyMessage:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"no-match"),await n(e.getByText("No commands found.")).toBeInTheDocument()}},re={args:{open:!0,loading:!0,loadingContent:0,onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("0"),await n(e.getByRole("status")).toHaveTextContent("0")}},ce={render:()=>o.jsx(To,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=a.ownerDocument;await n(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await i.click(t.body),await n(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"}));const s=e.getByRole("dialog",{name:"Command Palette"});await n(s).toBeInTheDocument(),await n(s).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close command palette"});await n(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.click(l),await n(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},ie={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:"Command Palette",description:"Shift+Tab from search input should restore close-button focus ring fallback.",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),s=await e.findByRole("button",{name:"Close command palette"});await i.click(t),await n(t).toHaveFocus(),await i.tab({shift:!0}),await n(s).toHaveFocus(),await n(s.getAttribute("style")).toContain("var(--aurora-focus-ring)"),g.mouseDown(s,{button:0,ctrlKey:!0}),await n(s.getAttribute("style")).toContain("var(--aurora-focus-ring)")}},le={render:()=>o.jsx(Ya,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await n(l).toBeTruthy(),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",l),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await i.type(t,"no-match"),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).not.toHaveAttribute("aria-controls"),await n(t).not.toHaveAttribute("aria-activedescendant"),await i.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",p.getAttribute("id")),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},de={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},ue={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}],getResultsStatusText:()=>"   "}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),s=e.getByRole("status");await n(s).toHaveTextContent("2 commands available."),await i.type(t,"run"),await n(s).toHaveTextContent('1 command found for "run".')}},me={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await n(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},pe={render:()=>o.jsxs(v,{align:"start",children:[o.jsx("h3",{id:"command-palette-heading",style:{margin:0},children:"AI release command center"}),o.jsx(u,{open:!0,onOpenChange:()=>{},title:o.jsx("span",{"aria-hidden":!0,children:"⌘"}),ariaLabel:"Fallback AI command center",ariaLabelledBy:"command-palette-heading",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]})]}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("dialog",{name:"AI release command center"});await n(t).toHaveAttribute("aria-labelledby","command-palette-heading"),await n(t).not.toHaveAttribute("aria-label")}},ye={render:()=>o.jsx(u,{open:!0,onOpenChange:()=>{},title:0,description:0,commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),s=(await e.findByRole("dialog",{name:"0"})).getAttribute("aria-describedby");await n(s).toBeTruthy(),await n(e.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},we={render:()=>o.jsx(Ro,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await n(t).toHaveAttribute("aria-keyshortcuts","Escape"),await n(e.getByTestId("command-palette-disabled-results-message")).toHaveTextContent("Matching commands are currently unavailable.");for(const s of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:s,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await n(l.defaultPrevented).toBe(!1)}}},be={render:()=>o.jsx(Do,{}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape");const s=t.getAttribute("aria-activedescendant");n(s).toBeTruthy();for(const l of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const p=new KeyboardEvent("keydown",{key:l,bubbles:!0,cancelable:!0});t.dispatchEvent(p),await n(p.defaultPrevented).toBe(!1)}await n(t.getAttribute("aria-activedescendant")).toBe(s)}},ge={render:()=>o.jsx(So,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const s=e.getByRole("option",{name:"Publish Release"});await n(s).toHaveAttribute("aria-disabled","true"),await n(s).not.toHaveAttribute("aria-keyshortcuts"),await i.click(s),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("executed-count")).toHaveTextContent("0")}},ve={render:()=>o.jsx(Io,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"run"),await i.click(e.getByRole("option",{name:"Run E2E Smoke"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("missing-handler-close-reason")).toHaveTextContent("none")}},he={render:()=>o.jsx(_a,{}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("option",{name:"Create Spec"}),s=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(s),n(s.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),n(l.defaultPrevented).toBe(!0)}},xe={render:()=>o.jsx(Ho,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await n(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},ke={render:()=>o.jsx(Po,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox");await n(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},Be={render:()=>o.jsx(Ao,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox"),s=e.getByRole("option",{name:"Deploy Release"});await n(s).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},fe={render:()=>o.jsx(Oo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox"),s=e.getByRole("option",{name:"Deploy Release"});await n(s).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},Ee={render:()=>o.jsx(jo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox"),s=e.getByRole("option",{name:"Deploy Release"});await n(s).toHaveAttribute("aria-labelledby","deploy-command-heading"),await n(s).not.toHaveAttribute("aria-label"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},Ce={render:()=>o.jsx(qo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),g.keyDown(t,{key:"Enter",repeat:!1}),await A(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),g.keyDown(t,{key:"Enter",repeat:!0}),await A(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Te={render:()=>o.jsx(Lo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.keyboard("{ArrowDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),await n(e.getByRole("option",{name:"Deploy Web"})).toHaveAttribute("aria-selected","true"),g.click(e.getByRole("button",{name:"Refresh command list"})),await A(()=>{n(e.getByTestId("duplicate-refresh-version")).toHaveTextContent("1")}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-2")),await n(e.getByRole("option",{name:"Deploy Web"})).toHaveAttribute("aria-selected","true")}},Re={render:()=>o.jsx(Ko,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await i.keyboard("{Control>}{Enter}{/Control}"),await i.keyboard("{Meta>}{Space}{/Meta}"),g.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Ue(t,"Enter"),g.keyDown(t,{key:"Enter",repeat:!0}),g.keyDown(t,{key:"Spacebar",altKey:!0}),await n(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},De={render:()=>o.jsx(No,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await n(t).toBeInTheDocument(),await n(t).not.toHaveAttribute("aria-keyshortcuts"),await n(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await n(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await n(t).toBeInTheDocument()}},Se={render:()=>o.jsx(Mo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await n(e.queryByTestId("command-palette-loading-content")).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await i.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByTestId("runtime-boolean-outside")).toHaveTextContent("1"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Reopen runtime config palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await i.type(t,"deploy"),await n(e.getByTestId("runtime-boolean-query")).toHaveTextContent("deploy"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("runtime-boolean-query")).toHaveTextContent("N/A"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Reopen runtime config palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await i.type(t,"deploy"),await i.keyboard("{Enter}"),await n(e.getByTestId("runtime-boolean-selected")).toHaveTextContent("1"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},Ie={render:()=>o.jsx(Fo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=a.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),g.pointerDown(t.body),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const s=e.getByRole("combobox",{name:"Search commands"});await i.clear(s),await i.type(s,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await n(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},He={render:()=>o.jsx($o,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("query-value")).toHaveTextContent("N/A"),await n(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("open-state")).toHaveTextContent("closed")}},Pe={render:()=>o.jsx(Uo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),g.keyDown(t,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},Ae={render:()=>o.jsx(Vo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.type(t,"release"),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),g.keyDown(t,{key:"Escape",ctrlKey:!0}),g.keyDown(t,{key:"Escape",altKey:!0}),g.keyDown(t,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),g.keyDown(t,{key:"Escape",shiftKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},Oe={render:()=>o.jsx(zo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const s=t.getAttribute("aria-activedescendant");n(s).toBeTruthy();const l=a.ownerDocument.getElementById(s);await n(l).toBeInTheDocument(),await n(l).toHaveAttribute("role","option"),await n(l).not.toHaveAttribute("aria-disabled","true"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},je={render:()=>o.jsx(Go,{}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.keyboard("{PageDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),g.keyDown(t,{key:"PageDown",ctrlKey:!0}),g.keyDown(t,{key:"End",metaKey:!0}),g.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),g.keyDown(t,{key:"ArrowUp",metaKey:!0}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),await i.keyboard("{PageUp}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},qe={render:()=>o.jsx(Qo,{}),play:async({canvasElement:a})=>{const t=await d(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.type(t,"release"),await i.keyboard("{ArrowDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),t instanceof HTMLInputElement&&t.setSelectionRange(2,2),g.keyDown(t,{key:"Home"}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),g.keyDown(t,{key:"End"}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"))}},Le={render:()=>o.jsx(Wo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.type(t,"deploy"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),g.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),g.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),g.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Ue(t,"Escape"),Ue(t,"ArrowDown"),Ue(t,"Enter"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await n(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},Ke={render:()=>o.jsx(_o,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},Ne={render:()=>o.jsx(Yo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await n(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await n(e.getByTestId("command-preempt-selection-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Me={render:()=>o.jsx(Jo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await n(e.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await n(e.getByTestId("command-local-preempt-selection-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Fe={render:()=>o.jsx(Xo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("dialog",{name:"Local close-button guard palette"}),s=e.getByRole("button",{name:"Close command palette"});s.focus(),g.keyDown(s,{key:"Enter"}),await A(()=>{n(s.style.transform).toContain("translateY(0")}),await n(t).toBeInTheDocument(),g.keyUp(s,{key:"Enter"}),g.keyDown(s,{key:"Space"}),await A(()=>{n(s.style.transform).toContain("translateY(0")}),await n(t).toBeInTheDocument(),g.keyUp(s,{key:"Space"})}},$e={render:()=>o.jsx(Zo,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await i.click(t),await n(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Open nested palette"})),await n(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await A(()=>{n(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await n(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await A(()=>{n(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await n(t).toHaveFocus()}};var Et,Ct,Tt;Z.parameters={...Z.parameters,docs:{...(Et=Z.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Tt=(Ct=Z.parameters)==null?void 0:Ct.docs)==null?void 0:Tt.source}}};var Rt,Dt,St;ee.parameters={...ee.parameters,docs:{...(Rt=ee.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(St=(Dt=ee.parameters)==null?void 0:Dt.docs)==null?void 0:St.source}}};var It,Ht,Pt;te.parameters={...te.parameters,docs:{...(It=te.parameters)==null?void 0:It.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Pt=(Ht=te.parameters)==null?void 0:Ht.docs)==null?void 0:Pt.source}}};var At,Ot,jt;ne.parameters={...ne.parameters,docs:{...(At=ne.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(jt=(Ot=ne.parameters)==null?void 0:Ot.docs)==null?void 0:jt.source}}};var qt,Lt,Kt;ae.parameters={...ae.parameters,docs:{...(qt=ae.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Kt=(Lt=ae.parameters)==null?void 0:Lt.docs)==null?void 0:Kt.source}}};var Nt,Mt,Ft;oe.parameters={...oe.parameters,docs:{...(Nt=oe.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ft=(Mt=oe.parameters)==null?void 0:Mt.docs)==null?void 0:Ft.source}}};var $t,Ut,Vt;se.parameters={...se.parameters,docs:{...($t=se.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Vt=(Ut=se.parameters)==null?void 0:Ut.docs)==null?void 0:Vt.source}}};var zt,Gt,Qt;re.parameters={...re.parameters,docs:{...(zt=re.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Qt=(Gt=re.parameters)==null?void 0:Gt.docs)==null?void 0:Qt.source}}};var Wt,_t,Yt;ce.parameters={...ce.parameters,docs:{...(Wt=ce.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Yt=(_t=ce.parameters)==null?void 0:_t.docs)==null?void 0:Yt.source}}};var Jt,Xt,Zt;ie.parameters={...ie.parameters,docs:{...(Jt=ie.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=ie.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var en,tn,nn;le.parameters={...le.parameters,docs:{...(en=le.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=le.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,sn;de.parameters={...de.parameters,docs:{...(an=de.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(sn=(on=de.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,cn,ln;ue.parameters={...ue.parameters,docs:{...(rn=ue.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  render: () => <CommandPalette open onOpenChange={() => {}} commands={[{
    key: "create-spec",
    label: "Create Spec",
    keywords: ["doc", "plan"]
  }, {
    key: "run-e2e",
    label: "Run E2E Smoke",
    keywords: ["playwright", "test"]
  }]} getResultsStatusText={() => "   "} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    const status = canvas.getByRole("status");
    await expect(status).toHaveTextContent("2 commands available.");
    await userEvent.type(input, "run");
    await expect(status).toHaveTextContent('1 command found for "run".');
  }
}`,...(ln=(cn=ue.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var dn,un,mn;me.parameters={...me.parameters,docs:{...(dn=me.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(mn=(un=me.parameters)==null?void 0:un.docs)==null?void 0:mn.source}}};var pn,yn,wn;pe.parameters={...pe.parameters,docs:{...(pn=pe.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(wn=(yn=pe.parameters)==null?void 0:yn.docs)==null?void 0:wn.source}}};var bn,gn,vn;ye.parameters={...ye.parameters,docs:{...(bn=ye.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(vn=(gn=ye.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var hn,xn,kn;we.parameters={...we.parameters,docs:{...(hn=we.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(kn=(xn=we.parameters)==null?void 0:xn.docs)==null?void 0:kn.source}}};var Bn,fn,En;be.parameters={...be.parameters,docs:{...(Bn=be.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(En=(fn=be.parameters)==null?void 0:fn.docs)==null?void 0:En.source}}};var Cn,Tn,Rn;ge.parameters={...ge.parameters,docs:{...(Cn=ge.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(Rn=(Tn=ge.parameters)==null?void 0:Tn.docs)==null?void 0:Rn.source}}};var Dn,Sn,In;ve.parameters={...ve.parameters,docs:{...(Dn=ve.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(In=(Sn=ve.parameters)==null?void 0:Sn.docs)==null?void 0:In.source}}};var Hn,Pn,An;he.parameters={...he.parameters,docs:{...(Hn=he.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
}`,...(An=(Pn=he.parameters)==null?void 0:Pn.docs)==null?void 0:An.source}}};var On,jn,qn;xe.parameters={...xe.parameters,docs:{...(On=xe.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(qn=(jn=xe.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var Ln,Kn,Nn;ke.parameters={...ke.parameters,docs:{...(Ln=ke.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(Nn=(Kn=ke.parameters)==null?void 0:Kn.docs)==null?void 0:Nn.source}}};var Mn,Fn,$n;Be.parameters={...Be.parameters,docs:{...(Mn=Be.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...($n=(Fn=Be.parameters)==null?void 0:Fn.docs)==null?void 0:$n.source}}};var Un,Vn,zn;fe.parameters={...fe.parameters,docs:{...(Un=fe.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(zn=(Vn=fe.parameters)==null?void 0:Vn.docs)==null?void 0:zn.source}}};var Gn,Qn,Wn;Ee.parameters={...Ee.parameters,docs:{...(Gn=Ee.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(Wn=(Qn=Ee.parameters)==null?void 0:Qn.docs)==null?void 0:Wn.source}}};var _n,Yn,Jn;Ce.parameters={...Ce.parameters,docs:{...(_n=Ce.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Jn=(Yn=Ce.parameters)==null?void 0:Yn.docs)==null?void 0:Jn.source}}};var Xn,Zn,ea;Te.parameters={...Te.parameters,docs:{...(Xn=Te.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(ea=(Zn=Te.parameters)==null?void 0:Zn.docs)==null?void 0:ea.source}}};var ta,na,aa;Re.parameters={...Re.parameters,docs:{...(ta=Re.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(aa=(na=Re.parameters)==null?void 0:na.docs)==null?void 0:aa.source}}};var oa,sa,ra;De.parameters={...De.parameters,docs:{...(oa=De.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ra=(sa=De.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var ca,ia,la;Se.parameters={...Se.parameters,docs:{...(ca=Se.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    let input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await expect(canvas.queryByTestId("command-palette-loading-content")).not.toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter Escape");
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside target"
    }));
    await expect(canvas.getByTestId("runtime-boolean-outside")).toHaveTextContent("1");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen runtime config palette"
    }));
    input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.type(input, "deploy");
    await expect(canvas.getByTestId("runtime-boolean-query")).toHaveTextContent("deploy");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("runtime-boolean-query")).toHaveTextContent("N/A");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen runtime config palette"
    }));
    input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.type(input, "deploy");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("runtime-boolean-selected")).toHaveTextContent("1");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
  }
}`,...(la=(ia=Se.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var da,ua,ma;Ie.parameters={...Ie.parameters,docs:{...(da=Ie.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(ua=Ie.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var pa,ya,wa;He.parameters={...He.parameters,docs:{...(pa=He.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(wa=(ya=He.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var ba,ga,va;Pe.parameters={...Pe.parameters,docs:{...(ba=Pe.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(ga=Pe.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var ha,xa,ka;Ae.parameters={...Ae.parameters,docs:{...(ha=Ae.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(ka=(xa=Ae.parameters)==null?void 0:xa.docs)==null?void 0:ka.source}}};var Ba,fa,Ea;Oe.parameters={...Oe.parameters,docs:{...(Ba=Oe.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(Ea=(fa=Oe.parameters)==null?void 0:fa.docs)==null?void 0:Ea.source}}};var Ca,Ta,Ra;je.parameters={...je.parameters,docs:{...(Ca=je.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Ra=(Ta=je.parameters)==null?void 0:Ta.docs)==null?void 0:Ra.source}}};var Da,Sa,Ia;qe.parameters={...qe.parameters,docs:{...(Da=qe.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
}`,...(Ia=(Sa=qe.parameters)==null?void 0:Sa.docs)==null?void 0:Ia.source}}};var Ha,Pa,Aa;Le.parameters={...Le.parameters,docs:{...(Ha=Le.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Aa=(Pa=Le.parameters)==null?void 0:Pa.docs)==null?void 0:Aa.source}}};var Oa,ja,qa;Ke.parameters={...Ke.parameters,docs:{...(Oa=Ke.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(qa=(ja=Ke.parameters)==null?void 0:ja.docs)==null?void 0:qa.source}}};var La,Ka,Na;Ne.parameters={...Ne.parameters,docs:{...(La=Ne.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Na=(Ka=Ne.parameters)==null?void 0:Ka.docs)==null?void 0:Na.source}}};var Ma,Fa,$a;Me.parameters={...Me.parameters,docs:{...(Ma=Me.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
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
}`,...($a=(Fa=Me.parameters)==null?void 0:Fa.docs)==null?void 0:$a.source}}};var Ua,Va,za;Fe.parameters={...Fe.parameters,docs:{...(Ua=Fe.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(za=(Va=Fe.parameters)==null?void 0:Va.docs)==null?void 0:za.source}}};var Ga,Qa,Wa;$e.parameters={...$e.parameters,docs:{...(Ga=$e.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
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
}`,...(Wa=(Qa=$e.parameters)==null?void 0:Qa.docs)==null?void 0:Wa.source}}};const ys=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","LoadingState","BlankLoadingContentFallback","BlankEmptyMessageFallback","NumericFeedbackCopySemantics","CloseReasonTelemetry","CloseButtonFocusIntentReentry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","ResultsStatusTextFallback","LocalizedDialogCopy","LabelledByPrecedence","NumericTitleDescriptionSemantics","DisabledOnlyResults","SingleActionableShortcutHints","DisabledCommandGuard","MissingSelectHandlerGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","IconOnlyCommandAriaLabelSearchFallback","IconOnlyCommandTextValueFallback","IconOnlyCommandLabelledByPrecedence","PersistentSelection","DuplicateKeyRerenderStability","OptionActivationKeyGuard","NonDismissible","RuntimeBooleanConfigNormalization","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","HomeEndCaretPriority","ImeCompositionGuard","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","CloseButtonManagedKeysPreemptedByLocalHandler","NestedDismissOrder"];export{te as AiInteractionFlow,se as BlankEmptyMessageFallback,oe as BlankLoadingContentFallback,ie as CloseButtonFocusIntentReentry,Fe as CloseButtonManagedKeysPreemptedByLocalHandler,ce as CloseReasonTelemetry,ge as DisabledCommandGuard,we as DisabledOnlyResults,Te as DuplicateKeyRerenderStability,le as EmptyStateAriaControlsLifecycle,He as EscapeClearsQueryFirst,Ke as EscapePreemptedByGlobalHandler,Pe as EscapeRepeatGuard,Ae as EscapeShortcutHintPrecision,Ie as GuardedDismissEvents,qe as HomeEndCaretPriority,Be as IconOnlyCommandAriaLabelSearchFallback,Ee as IconOnlyCommandLabelledByPrecedence,ke as IconOnlyCommandNaming,fe as IconOnlyCommandTextValueFallback,Le as ImeCompositionGuard,pe as LabelledByPrecedence,ae as LoadingState,me as LocalizedDialogCopy,de as LocalizedResultsLabel,Ne as ManagedKeysPreemptedByGlobalHandler,Me as ManagedKeysPreemptedByLocalHandler,ve as MissingSelectHandlerGuard,$e as NestedDismissOrder,De as NonDismissible,re as NumericFeedbackCopySemantics,ye as NumericTitleDescriptionSemantics,ee as OpenFromTriggerKeyboardFirst,Re as OptionActivationKeyGuard,he as OptionMouseDownPolicy,je as PagedKeyboardNavigation,Ce as PersistentSelection,ne as QueryTelemetry,Oe as RefinedSearchKeepsActiveCommand,ue as ResultsStatusTextFallback,Se as RuntimeBooleanConfigNormalization,Z as SearchCommands,be as SingleActionableShortcutHints,xe as TextValueAndAccentSearch,ys as __namedExportsOrder,ps as default};
