import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{D as Bt}from"./Dialog-CFqGnmxp.js";import{I as Tt}from"./Input-B0g8SV4q.js";import{within as w,expect as s,userEvent as i,fireEvent as ae}from"./index-DgAF9SIF.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function p({open:t,onOpenChange:e,commands:a,title:c="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:m="Search commands",resultsAriaLabel:f="Command results",closeOnSelect:v=!0,clearQueryOnEscape:T=!0,closeOnEscape:I=!0,closeOnOutsidePointer:oe=!0,onEscapeKeyDown:X,onPointerDownOutside:Y,closeLabel:vt,placeholder:xt="Search commands...",emptyMessage:ht="No commands found.",onQueryChange:x,onCloseReason:k,getResultsStatusText:se=Dt}){const[E,Z]=r.useState(""),[S,h]=r.useState(0),re=r.useRef(null),D=r.useRef(null),P=r.useRef(null),ie=r.useRef(t),R=r.useId(),ce=r.useId(),le=r.useRef(null),ft=r.useMemo(()=>{const o=["ArrowDown","ArrowUp","Home","End","PageDown","PageUp","Enter"];return(I||T)&&o.push("Escape"),o.join(" ")},[T,I]),A=r.useCallback(o=>{P.current=o,k==null||k(o)},[k]),de=r.useCallback(o=>{A(o),e(!1),P.current=null},[A,e]),kt=r.useCallback(o=>{!o&&t&&P.current===null&&(k==null||k("close-button")),P.current=null,e(o)},[k,e,t]);r.useEffect(()=>{var o;t?(o=re.current)==null||o.focus():ie.current&&(Z(d=>(d.length>0&&(x==null||x("")),"")),h(0)),ie.current=t},[x,t]);const ee=r.useMemo(()=>ge(E.trim()),[E]),u=r.useMemo(()=>ee?a.filter(o=>{const y=[Et(o),...o.keywords??[]].join(" ");return ge(y).includes(ee)}):a,[a,ee]),ue=r.useMemo(()=>u.reduce((o,d)=>d.disabled?o:o+1,0),[u]),me=u.length>0,Ct=r.useMemo(()=>se({query:E,visibleCount:u.length,enabledCount:ue,totalCount:a.length}),[a.length,ue,u.length,se,E]),C=r.useMemo(()=>u.reduce((o,d,y)=>(d.disabled||o.push(y),o),[]),[u]),B=C[0]??-1,pe=C[C.length-1]??-1,g=r.useMemo(()=>{if(S<0)return-1;const o=u[S];return!o||o.disabled?-1:S},[S,u]);r.useEffect(()=>{var d;if(u.length===0){D.current=null,h(-1);return}const o=D.current;if(o){const y=u.findIndex(b=>!b.disabled&&b.key===o);if(y>=0){h(y);return}}h(B),D.current=B>=0?((d=u[B])==null?void 0:d.key)??null:null},[u,B]),r.useEffect(()=>{var o;if(g<0){D.current=null;return}D.current=((o=u[g])==null?void 0:o.key)??null},[u,g]),r.useEffect(()=>{if(!t||g<0)return;const o=le.current,d=document.getElementById(`${R}-option-${g}`);!o||!d||!o.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[R,t,g]);const te=r.useCallback(o=>{var y;const d=u[o];!d||d.disabled||((y=d.onSelect)==null||y.call(d),v&&de("item-select"))},[v,de,u]),ye=o=>{var y;if(u.length===0)return;let d=g<0?o===1?-1:0:g;for(let b=0;b<u.length;b+=1)if(d=(d+o+u.length)%u.length,!((y=u[d])!=null&&y.disabled)){h(d);return}},we=o=>{if(C.length===0)return;const d=C.indexOf(g);if(d<0){h(o===1?B:pe);return}const y=Math.min(C.length-1,Math.max(0,d+o*5));h(C[y]??B)};return n.jsx(Bt,{open:t,onOpenChange:kt,title:c,description:l,closeLabel:vt,size:"md",closeOnEscape:I,closeOnOutsidePointer:oe,onEscapeKeyDown:o=>{X==null||X(o),!(o.defaultPrevented||!I)&&A("escape-key")},onPointerDownOutside:o=>{Y==null||Y(o),!(o.defaultPrevented||!oe)&&A("outside-pointer")},children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(Tt,{ref:re,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":me?R:void 0,"aria-activedescendant":g>=0?`${R}-option-${g}`:void 0,"aria-describedby":ce,"aria-keyshortcuts":ft,placeholder:xt,value:E,onChange:o=>{Z(o.target.value),x==null||x(o.target.value)},onKeyDown:o=>{if(!Rt(o)){if(o.key==="Escape"&&T&&E.length>0){o.preventDefault(),Z(""),x==null||x("");return}if(o.key==="ArrowDown"){o.preventDefault(),ye(1);return}if(o.key==="ArrowUp"){o.preventDefault(),ye(-1);return}if(o.key==="Home"){o.preventDefault(),h(B);return}if(o.key==="End"){o.preventDefault(),h(pe);return}if(o.key==="PageDown"){o.preventDefault(),we(1);return}if(o.key==="PageUp"){o.preventDefault(),we(-1);return}o.key==="Enter"&&g>=0&&(o.preventDefault(),te(g))}},"aria-label":m}),n.jsx("p",{id:ce,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Ct}),me?n.jsx("div",{id:R,ref:le,role:"listbox","aria-label":f,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((o,d)=>{const y=d===g;return n.jsx("div",{id:`${R}-option-${d}`,role:"option","aria-selected":y,"aria-disabled":o.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,onMouseDown:b=>{b.preventDefault()},onMouseEnter:()=>{o.disabled||h(d)},onClick:()=>{o.disabled||te(d)},onKeyDown:b=>{o.disabled||(b.key==="Enter"||b.key===" "||b.key==="Space"||b.key==="Spacebar")&&(b.preventDefault(),te(d))},style:{border:"1px solid var(--aurora-border-default)",background:y?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)})}):n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:ht})]})})}function Et(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function ge(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Rt(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Dt({query:t,visibleCount:e,enabledCount:a,totalCount:c}){const l=t.trim();return l.length===0?a!==c?`${a} of ${c} command${c===1?"":"s"} available.`:`${c} command${c===1?"":"s"} available.`:e===0?`No commands match "${l}".`:a===0?`No enabled commands match "${l}".`:a!==e?`${a} of ${e} matching command${a===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}p.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const ne=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Zt={title:"AI/CommandPalette",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:ne}};function It(){const[t,e]=r.useState(!0);return n.jsx(p,{open:t,onOpenChange:e,commands:ne,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function St(){const[t,e]=r.useState(!0),[a,c]=r.useState("None"),l=ne.map(m=>({...m,onSelect:()=>c(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return n.jsxs("div",{style:{minHeight:420,padding:20},children:[n.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,commands:l})]})}function bt(){const[t,e]=r.useState(!0),[a,c]=r.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry:"," ",n.jsx("strong",{"data-testid":"query-telemetry",style:{color:"var(--aurora-text-primary)"},children:a||"N/A"})]}),n.jsx(p,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:c,getResultsStatusText:({query:l,visibleCount:m,enabledCount:f})=>l.trim().length===0?"Command search ready.":`${f}/${m} actionable AI workflow match${m===1?"":"es"} for ${l}`})]})}function Pt(){const[t,e]=r.useState(!0),[a,c]=r.useState("none"),[l,m]=r.useState("N/A"),f=r.useCallback(v=>{m(T=>T==="N/A"?v:`${T} -> ${v}`)},[]);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"command-close-reason",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",n.jsx("strong",{"data-testid":"command-close-trace",style:{color:"var(--aurora-text-primary)"},children:l})]}),n.jsx("button",{type:"button",onClick:()=>{m("N/A"),e(!0)},children:"Reopen Palette"}),n.jsx(p,{open:t,onOpenChange:v=>{e(v),v||f("open:false")},onCloseReason:v=>{c(v),f(`reason:${v}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>f("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>f("select")}]})]})}function At(){const[t,e]=r.useState(!0);return n.jsx(p,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function jt(){const[t,e]=r.useState(!0),[a,c]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>c(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>c(l=>l+1)}],placeholder:"Try searching publish..."})]})}function Ht(){const[t,e]=r.useState(!0);return n.jsx(p,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:n.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Ot(){const[t,e]=r.useState(!0),[a,c]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",n.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>c(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>c(l=>l+1)}]})]})}function qt(){const[t,e]=r.useState(!1);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),n.jsx("button",{type:"button",onClick:()=>e(a=>!a),children:t?"Close blocking palette":"Open blocking palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:t,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Lt(){const[t,e]=r.useState(!1),[a,c]=r.useState(!0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",n.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:a?"enabled":"disabled"})]}),n.jsx("button",{type:"button",onClick:()=>e(l=>!l),children:t?"Close guarded palette":"Open guarded palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{a&&l.preventDefault()},onPointerDownOutside:l=>{a&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!a,onSelect:()=>c(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function $t(){const[t,e]=r.useState(!0),[a,c]=r.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",n.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:a||"N/A"})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",n.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:t?"open":"closed"})]}),n.jsx(p,{open:t,onOpenChange:e,onQueryChange:c,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Nt(){const[t,e]=r.useState(!0),[a,c]=r.useState("none");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",n.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>c("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>c("send-report")}]})]})}function Vt(){const[t,e]=r.useState(!0);return n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Ut(){const[t,e]=r.useState(!0),[a,c]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>c(l=>l+1)}]})]})}function Gt(){const[t,e]=r.useState(!0),[a,c]=r.useState(0);return r.useEffect(()=>{const l=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"command-escape-calls",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(p,{open:t,onOpenChange:e,onEscapeKeyDown:()=>c(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const j={render:()=>n.jsx(It,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await i.clear(a),await i.type(a,"publish");const c=e.getByRole("option",{name:"Publish Release"});await s(c).toHaveAttribute("aria-disabled","true"),await s(c).toHaveAttribute("tabindex","-1")}},H={render:()=>n.jsx(St,{})},O={render:()=>n.jsx(bt,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await i.clear(a),await i.type(a,"release"),await s(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await s(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},q={render:()=>n.jsx(Pt,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=t.ownerDocument;await s(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await s(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await s(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(a.body),await s(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Close dialog"})),await s(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await s(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},L={render:()=>n.jsx(bt,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await s(l).toBeTruthy(),await s(a).toHaveAttribute("aria-controls",l),await i.clear(a),await i.type(a,"no-match"),await s(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await s(a).not.toHaveAttribute("aria-controls"),await i.clear(a);const m=await e.findByRole("listbox",{name:"Command results"});await s(a).toHaveAttribute("aria-controls",m.getAttribute("id"))}},$={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body);await s(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},N={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body);await s(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await s(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await s(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await s(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},V={render:()=>n.jsx(At,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await i.clear(a),await i.type(a,"release"),await s(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},U={render:()=>n.jsx(jt,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await i.clear(a),await i.type(a,"publish");const c=e.getByRole("option",{name:"Publish Release"});await s(c).toHaveAttribute("aria-disabled","true"),await i.click(c),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("executed-count")).toHaveTextContent("0")}},G={render:()=>n.jsx(Ht,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await i.clear(a),await i.type(a,"cafe"),await s(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await s(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},z={render:()=>n.jsx(Ot,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("option",{name:"Run Lint"});await i.click(a),await s(e.getByTestId("selection-count")).toHaveTextContent("1"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},K={render:()=>n.jsx(qt,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const a=e.getByRole("dialog",{name:"Command Palette"});await s(a).toBeInTheDocument(),await s(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await s(a).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await s(a).toBeInTheDocument()}},M={render:()=>n.jsx(Lt,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=t.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),ae.pointerDown(a.body),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const c=e.getByRole("combobox",{name:"Search commands"});await i.clear(c),await i.type(c,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await s(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},F={render:()=>n.jsx($t,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await i.clear(a),await i.type(a,"release"),await s(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("query-value")).toHaveTextContent("N/A"),await s(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await s(e.getByTestId("open-state")).toHaveTextContent("closed")}},Q={render:()=>n.jsx(Nt,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await i.type(a,"search"),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),await i.clear(a),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-1"));const c=a.getAttribute("aria-activedescendant");s(c).toBeTruthy();const l=t.ownerDocument.getElementById(c);await s(l).toBeInTheDocument(),await s(l).toHaveAttribute("role","option"),await s(l).not.toHaveAttribute("aria-disabled","true"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},_={render:()=>n.jsx(Vt,{}),play:async({canvasElement:t})=>{const a=await w(t.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(a),await s(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),await i.keyboard("{PageDown}"),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-6")),await i.keyboard("{PageUp}"),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0"))}},W={render:()=>n.jsx(Ut,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await i.click(a),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),ae.keyDown(a,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),ae.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},J={render:()=>n.jsx(Gt,{}),play:async({canvasElement:t})=>{const e=w(t.ownerDocument.body);await s(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var be,ve,xe;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var he,fe,ke;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(ke=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Ce,Be,Te;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Te=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,Re,De;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(De=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Ie,Se,Pe;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Pe=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var Ae,je,He;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(He=(je=$.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var Oe,qe,Le;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Le=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var $e,Ne,Ve;V.parameters={...V.parameters,docs:{...($e=V.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var Ue,Ge,ze;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(ze=(Ge=U.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Ke,Me,Fe;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Fe=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Qe,_e,We;z.parameters={...z.parameters,docs:{...(Qe=z.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(We=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Je,Xe,Ye;K.parameters={...K.parameters,docs:{...(Je=K.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=K.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;M.parameters={...M.parameters,docs:{...(Ze=M.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=M.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;F.parameters={...F.parameters,docs:{...(at=F.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=F.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,it;Q.parameters={...Q.parameters,docs:{...(st=Q.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(it=(rt=Q.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ct,lt,dt;_.parameters={..._.parameters,docs:{...(ct=_.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
    await userEvent.keyboard("{PageUp}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
  }
}`,...(dt=(lt=_.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,pt;W.parameters={...W.parameters,docs:{...(ut=W.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(mt=W.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var yt,wt,gt;J.parameters={...J.parameters,docs:{...(yt=J.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=J.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};const ea=["SearchCommands","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{H as AiInteractionFlow,q as CloseReasonTelemetry,U as DisabledCommandGuard,V as DisabledOnlyResults,L as EmptyStateAriaControlsLifecycle,F as EscapeClearsQueryFirst,J as EscapePreemptedByGlobalHandler,M as GuardedDismissEvents,W as ImeCompositionGuard,N as LocalizedDialogCopy,$ as LocalizedResultsLabel,K as NonDismissible,_ as PagedKeyboardNavigation,z as PersistentSelection,O as QueryTelemetry,Q as RefinedSearchKeepsActiveCommand,j as SearchCommands,G as TextValueAndAccentSearch,ea as __namedExportsOrder,Zt as default};
