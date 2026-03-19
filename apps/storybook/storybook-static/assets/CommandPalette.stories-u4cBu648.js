import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{D as kt}from"./Dialog-CFqGnmxp.js";import{I as Ct}from"./Input-B0g8SV4q.js";import{within as g,expect as s,userEvent as c,fireEvent as ee}from"./index-DgAF9SIF.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function p({open:t,onOpenChange:e,commands:a,title:i="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:m="Search commands",resultsAriaLabel:h="Command results",closeOnSelect:v=!0,clearQueryOnEscape:D=!0,closeOnEscape:ae=!0,closeOnOutsidePointer:ne=!0,onEscapeKeyDown:W,onPointerDownOutside:J,closeLabel:bt,placeholder:vt="Search commands...",emptyMessage:xt="No commands found.",onQueryChange:x,onCloseReason:k,getResultsStatusText:oe=Rt}){const[T,X]=r.useState(""),[w,f]=r.useState(0),se=r.useRef(null),E=r.useRef(null),I=r.useRef(null),re=r.useRef(t),R=r.useId(),ce=r.useId(),ie=r.useRef(null),S=r.useCallback(o=>{I.current=o,k==null||k(o)},[k]),le=r.useCallback(o=>{S(o),e(!1),I.current=null},[S,e]),ft=r.useCallback(o=>{!o&&t&&I.current===null&&(k==null||k("close-button")),I.current=null,e(o)},[k,e,t]);r.useEffect(()=>{var o;t?(o=se.current)==null||o.focus():re.current&&(X(d=>(d.length>0&&(x==null||x("")),"")),f(0)),re.current=t},[x,t]);const Y=r.useMemo(()=>ge(T.trim()),[T]),u=r.useMemo(()=>Y?a.filter(o=>{const y=[Bt(o),...o.keywords??[]].join(" ");return ge(y).includes(Y)}):a,[a,Y]),de=r.useMemo(()=>u.reduce((o,d)=>d.disabled?o:o+1,0),[u]),ue=u.length>0,ht=r.useMemo(()=>oe({query:T,visibleCount:u.length,enabledCount:de,totalCount:a.length}),[a.length,de,u.length,oe,T]),C=r.useMemo(()=>u.reduce((o,d,y)=>(d.disabled||o.push(y),o),[]),[u]),B=C[0]??-1,me=C[C.length-1]??-1;r.useEffect(()=>{var d;if(u.length===0){E.current=null,f(-1);return}const o=E.current;if(o){const y=u.findIndex(b=>!b.disabled&&b.key===o);if(y>=0){f(y);return}}f(B),E.current=B>=0?((d=u[B])==null?void 0:d.key)??null:null},[u,B]),r.useEffect(()=>{var o;if(w<0){E.current=null;return}E.current=((o=u[w])==null?void 0:o.key)??null},[w,u]),r.useEffect(()=>{if(!t||w<0)return;const o=ie.current,d=document.getElementById(`${R}-option-${w}`);!o||!d||!o.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[w,R,t]);const Z=r.useCallback(o=>{var y;const d=u[o];!d||d.disabled||((y=d.onSelect)==null||y.call(d),v&&le("item-select"))},[v,le,u]),pe=o=>{var y;if(u.length===0)return;let d=w<0?o===1?-1:0:w;for(let b=0;b<u.length;b+=1)if(d=(d+o+u.length)%u.length,!((y=u[d])!=null&&y.disabled)){f(d);return}},ye=o=>{if(C.length===0)return;const d=C.indexOf(w);if(d<0){f(o===1?B:me);return}const y=Math.min(C.length-1,Math.max(0,d+o*5));f(C[y]??B)};return n.jsx(kt,{open:t,onOpenChange:ft,title:i,description:l,closeLabel:bt,size:"md",closeOnEscape:ae,closeOnOutsidePointer:ne,onEscapeKeyDown:o=>{W==null||W(o),!(o.defaultPrevented||!ae)&&S("escape-key")},onPointerDownOutside:o=>{J==null||J(o),!(o.defaultPrevented||!ne)&&S("outside-pointer")},children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(Ct,{ref:se,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":ue?R:void 0,"aria-activedescendant":w>=0?`${R}-option-${w}`:void 0,"aria-describedby":ce,placeholder:vt,value:T,onChange:o=>{X(o.target.value),x==null||x(o.target.value)},onKeyDown:o=>{if(!Tt(o)){if(o.key==="Escape"&&D&&T.length>0){o.preventDefault(),X(""),x==null||x("");return}if(o.key==="ArrowDown"){o.preventDefault(),pe(1);return}if(o.key==="ArrowUp"){o.preventDefault(),pe(-1);return}if(o.key==="Home"){o.preventDefault(),f(B);return}if(o.key==="End"){o.preventDefault(),f(me);return}if(o.key==="PageDown"){o.preventDefault(),ye(1);return}if(o.key==="PageUp"){o.preventDefault(),ye(-1);return}o.key==="Enter"&&w>=0&&(o.preventDefault(),Z(w))}},"aria-label":m}),n.jsx("p",{id:ce,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:ht}),ue?n.jsx("div",{id:R,ref:ie,role:"listbox","aria-label":h,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((o,d)=>{const y=d===w;return n.jsx("div",{id:`${R}-option-${d}`,role:"option","aria-selected":y,"aria-disabled":o.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,onMouseDown:b=>{b.preventDefault()},onMouseEnter:()=>{o.disabled||f(d)},onClick:()=>{o.disabled||Z(d)},onKeyDown:b=>{o.disabled||(b.key==="Enter"||b.key===" "||b.key==="Space"||b.key==="Spacebar")&&(b.preventDefault(),Z(d))},style:{border:"1px solid var(--aurora-border-default)",background:y?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)})}):n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:xt})]})})}function Bt(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function ge(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Tt(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Rt({query:t,visibleCount:e,enabledCount:a,totalCount:i}){const l=t.trim();return l.length===0?a!==i?`${a} of ${i} command${i===1?"":"s"} available.`:`${i} command${i===1?"":"s"} available.`:e===0?`No commands match "${l}".`:a===0?`No enabled commands match "${l}".`:a!==e?`${a} of ${e} matching command${a===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}p.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "item-select" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"item-select"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const te=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Xt={title:"AI/CommandPalette",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:te}};function Et(){const[t,e]=r.useState(!0);return n.jsx(p,{open:t,onOpenChange:e,commands:te,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Dt(){const[t,e]=r.useState(!0),[a,i]=r.useState("None"),l=te.map(m=>({...m,onSelect:()=>i(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return n.jsxs("div",{style:{minHeight:420,padding:20},children:[n.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,commands:l})]})}function wt(){const[t,e]=r.useState(!0),[a,i]=r.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry:"," ",n.jsx("strong",{"data-testid":"query-telemetry",style:{color:"var(--aurora-text-primary)"},children:a||"N/A"})]}),n.jsx(p,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:i,getResultsStatusText:({query:l,visibleCount:m,enabledCount:h})=>l.trim().length===0?"Command search ready.":`${h}/${m} actionable AI workflow match${m===1?"":"es"} for ${l}`})]})}function It(){const[t,e]=r.useState(!0),[a,i]=r.useState("none"),[l,m]=r.useState("N/A"),h=r.useCallback(v=>{m(D=>D==="N/A"?v:`${D} -> ${v}`)},[]);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"command-close-reason",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",n.jsx("strong",{"data-testid":"command-close-trace",style:{color:"var(--aurora-text-primary)"},children:l})]}),n.jsx("button",{type:"button",onClick:()=>{m("N/A"),e(!0)},children:"Reopen Palette"}),n.jsx(p,{open:t,onOpenChange:v=>{e(v),v||h("open:false")},onCloseReason:v=>{i(v),h(`reason:${v}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>h("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>h("select")}]})]})}function St(){const[t,e]=r.useState(!0);return n.jsx(p,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Pt(){const[t,e]=r.useState(!0),[a,i]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>i(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>i(l=>l+1)}],placeholder:"Try searching publish..."})]})}function jt(){const[t,e]=r.useState(!0);return n.jsx(p,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:n.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function At(){const[t,e]=r.useState(!0),[a,i]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",n.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>i(l=>l+1)}]})]})}function Ht(){const[t,e]=r.useState(!1);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),n.jsx("button",{type:"button",onClick:()=>e(a=>!a),children:t?"Close blocking palette":"Open blocking palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:t,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ot(){const[t,e]=r.useState(!1),[a,i]=r.useState(!0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",n.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:a?"enabled":"disabled"})]}),n.jsx("button",{type:"button",onClick:()=>e(l=>!l),children:t?"Close guarded palette":"Open guarded palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{a&&l.preventDefault()},onPointerDownOutside:l=>{a&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!a,onSelect:()=>i(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function qt(){const[t,e]=r.useState(!0),[a,i]=r.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",n.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:a||"N/A"})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",n.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:t?"open":"closed"})]}),n.jsx(p,{open:t,onOpenChange:e,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Lt(){const[t,e]=r.useState(!0),[a,i]=r.useState("none");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",n.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>i("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>i("send-report")}]})]})}function $t(){const[t,e]=r.useState(!0);return n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Nt(){const[t,e]=r.useState(!0),[a,i]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>i(l=>l+1)}]})]})}function Vt(){const[t,e]=r.useState(!0),[a,i]=r.useState(0);return r.useEffect(()=>{const l=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"command-escape-calls",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,onEscapeKeyDown:()=>i(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const P={render:()=>n.jsx(Et,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await c.clear(a),await c.type(a,"publish");const i=e.getByRole("option",{name:"Publish Release"});await s(i).toHaveAttribute("aria-disabled","true"),await s(i).toHaveAttribute("tabindex","-1")}},j={render:()=>n.jsx(Dt,{})},A={render:()=>n.jsx(wt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await c.clear(a),await c.type(a,"release"),await s(e.getByText("release")).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await s(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},H={render:()=>n.jsx(It,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=t.ownerDocument;await s(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await c.click(await e.findByRole("option",{name:"Create Spec"})),await s(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await s(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(a.body),await s(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Close dialog"})),await s(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},O={render:()=>n.jsx(wt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await s(l).toBeTruthy(),await s(a).toHaveAttribute("aria-controls",l),await c.clear(a),await c.type(a,"no-match"),await s(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await s(a).not.toHaveAttribute("aria-controls"),await c.clear(a);const m=await e.findByRole("listbox",{name:"Command results"});await s(a).toHaveAttribute("aria-controls",m.getAttribute("id"))}},q={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await s(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},L={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await s(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await s(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await s(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await s(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},$={render:()=>n.jsx(St,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await c.clear(a),await c.type(a,"release"),await s(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},N={render:()=>n.jsx(Pt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await c.clear(a),await c.type(a,"publish");const i=e.getByRole("option",{name:"Publish Release"});await s(i).toHaveAttribute("aria-disabled","true"),await c.click(i),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("executed-count")).toHaveTextContent("0")}},V={render:()=>n.jsx(jt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await c.clear(a),await c.type(a,"cafe"),await s(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await s(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},G={render:()=>n.jsx(At,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("option",{name:"Run Lint"});await c.click(a),await s(e.getByTestId("selection-count")).toHaveTextContent("1"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},z={render:()=>n.jsx(Ht,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await c.click(await e.findByRole("button",{name:"Open blocking palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Outside target"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},K={render:()=>n.jsx(Ot,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=t.ownerDocument;await c.click(await e.findByRole("button",{name:"Open guarded palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),ee.pointerDown(a.body),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const i=e.getByRole("combobox",{name:"Search commands"});await c.clear(i),await c.type(i,"unlock"),await c.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await s(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await c.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},M={render:()=>n.jsx(qt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await c.clear(a),await c.type(a,"release"),await s(e.getByTestId("query-value")).toHaveTextContent("release"),await c.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("query-value")).toHaveTextContent("N/A"),await s(e.getByTestId("open-state")).toHaveTextContent("open"),await c.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await s(e.getByTestId("open-state")).toHaveTextContent("closed")}},U={render:()=>n.jsx(Lt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await c.type(a,"search"),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),await c.clear(a),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-1")),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},F={render:()=>n.jsx($t,{}),play:async({canvasElement:t})=>{const a=await g(t.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await c.click(a),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),await c.keyboard("{PageDown}"),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-6")),await c.keyboard("{PageUp}"),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0"))}},Q={render:()=>n.jsx(Nt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await c.click(a),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),ee.keyDown(a,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),ee.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},_={render:()=>n.jsx(Vt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await s(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var we,be,ve;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ve=(be=P.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var xe,fe,he;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(he=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ke,Ce,Be;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var Te,Re,Ee;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var De,Ie,Se;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute("aria-controls", initialListboxId!);
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.queryByRole("listbox", {
      name: "Command results"
    })).not.toBeInTheDocument();
    await expect(input).not.toHaveAttribute("aria-controls");
    await userEvent.clear(input);
    const restoredListbox = await canvas.findByRole("listbox", {
      name: "Command results"
    });
    await expect(input).toHaveAttribute("aria-controls", restoredListbox.getAttribute("id"));
  }
}`,...(Se=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var Pe,je,Ae;q.parameters={...q.parameters,docs:{...(Pe=q.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ae=(je=q.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var He,Oe,qe;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(qe=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Le,$e,Ne;$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
  }
}`,...(Ne=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:Ne.source}}};var Ve,Ge,ze;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(ze=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Ke,Me,Ue;V.parameters={...V.parameters,docs:{...(Ke=V.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ue=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var Fe,Qe,_e;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <PersistentSelectionPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const runLint = await canvas.findByRole("option", {
      name: "Run Lint"
    });
    await userEvent.click(runLint);
    await expect(canvas.getByTestId("selection-count")).toHaveTextContent("1");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(_e=(Qe=G.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};var We,Je,Xe;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <NonDismissiblePalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Open blocking palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside target"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(Xe=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ye,Ze,et;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(et=(Ze=K.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;M.parameters={...M.parameters,docs:{...(tt=M.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=M.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,st,rt;U.parameters={...U.parameters,docs:{...(ot=U.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(rt=(st=U.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ct,it,lt;F.parameters={...F.parameters,docs:{...(ct=F.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => <PagedKeyboardNavigationPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.click(input);
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    await userEvent.keyboard("{PageDown}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-6"));
    await userEvent.keyboard("{PageUp}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
  }
}`,...(lt=(it=F.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var dt,ut,mt;Q.parameters={...Q.parameters,docs:{...(dt=Q.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("ime-selection-count")).toHaveTextContent("1");
  }
}`,...(mt=(ut=Q.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var pt,yt,gt;_.parameters={..._.parameters,docs:{...(pt=_.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(gt=(yt=_.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};const Yt=["SearchCommands","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{j as AiInteractionFlow,H as CloseReasonTelemetry,N as DisabledCommandGuard,$ as DisabledOnlyResults,O as EmptyStateAriaControlsLifecycle,M as EscapeClearsQueryFirst,_ as EscapePreemptedByGlobalHandler,K as GuardedDismissEvents,Q as ImeCompositionGuard,L as LocalizedDialogCopy,q as LocalizedResultsLabel,z as NonDismissible,F as PagedKeyboardNavigation,G as PersistentSelection,A as QueryTelemetry,U as RefinedSearchKeepsActiveCommand,P as SearchCommands,V as TextValueAndAccentSearch,Yt as __namedExportsOrder,Xt as default};
