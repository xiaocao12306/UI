import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as qe}from"./Dialog-3f-g3jDx.js";import{I as He}from"./Input-CK-2zJ6Z.js";import{within as g,userEvent as c,expect as i,fireEvent as V}from"./index-DgAF9SIF.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:t,onOpenChange:e,commands:n,closeOnSelect:r=!0,clearQueryOnEscape:l=!0,closeOnEscape:y=!0,closeOnOutsidePointer:H=!0,onEscapeKeyDown:Se,onPointerDownOutside:Ie,placeholder:je="Search commands...",emptyMessage:Pe="No commands found.",onQueryChange:h,getResultsStatusText:z=Ve}){const[x,$]=s.useState(""),[v,b]=s.useState(0),K=s.useRef(null),f=s.useRef(null),k=s.useId();s.useEffect(()=>{var o;if(!t){$(""),b(0);return}(o=K.current)==null||o.focus()},[t]);const N=s.useMemo(()=>Q(x.trim()),[x]),u=s.useMemo(()=>N?n.filter(o=>{const p=[$e(o),...o.keywords??[]].join(" ");return Q(p).includes(N)}):n,[n,N]),L=s.useMemo(()=>u.reduce((o,d)=>d.disabled?o:o+1,0),[u]),Oe=s.useMemo(()=>z({query:x,visibleCount:u.length,enabledCount:L,totalCount:n.length}),[n.length,L,u.length,z,x]),C=s.useMemo(()=>u.findIndex(o=>!o.disabled),[u]),Ae=s.useMemo(()=>{var o;for(let d=u.length-1;d>=0;d-=1)if(!((o=u[d])!=null&&o.disabled))return d;return-1},[u]);s.useEffect(()=>{var d;if(u.length===0){f.current=null,b(-1);return}const o=f.current;if(o){const p=u.findIndex(w=>!w.disabled&&w.key===o);if(p>=0){b(p);return}}b(C),f.current=C>=0?((d=u[C])==null?void 0:d.key)??null:null},[u,C]),s.useEffect(()=>{var o;if(v<0){f.current=null;return}f.current=((o=u[v])==null?void 0:o.key)??null},[v,u]);const M=s.useCallback(o=>{var p;const d=u[o];!d||d.disabled||((p=d.onSelect)==null||p.call(d),r&&e(!1))},[r,u,e]),F=o=>{var p;if(u.length===0)return;let d=v<0?o===1?-1:0:v;for(let w=0;w<u.length;w+=1)if(d=(d+o+u.length)%u.length,!((p=u[d])!=null&&p.disabled)){b(d);return}};return a.jsx(qe,{open:t,onOpenChange:e,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",closeOnEscape:y,closeOnOutsidePointer:H,onEscapeKeyDown:Se,onPointerDownOutside:Ie,children:a.jsxs("div",{style:{display:"grid",gap:10},children:[a.jsx(He,{ref:K,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":k,"aria-activedescendant":v>=0?`${k}-option-${v}`:void 0,placeholder:je,value:x,onChange:o=>{$(o.target.value),h==null||h(o.target.value)},onKeyDown:o=>{if(!Ne(o)){if(o.key==="Escape"&&l&&x.length>0){o.preventDefault(),$(""),h==null||h("");return}if(o.key==="ArrowDown"){o.preventDefault(),F(1);return}if(o.key==="ArrowUp"){o.preventDefault(),F(-1);return}if(o.key==="Home"){o.preventDefault(),b(C);return}if(o.key==="End"){o.preventDefault(),b(Ae);return}o.key==="Enter"&&v>=0&&(o.preventDefault(),M(v))}},"aria-label":"Search commands"}),a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Oe}),a.jsx("div",{id:k,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.length>0?u.map((o,d)=>{const p=d===v;return a.jsx("button",{id:`${k}-option-${d}`,type:"button",role:"option","aria-selected":p,"aria-disabled":o.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,disabled:o.disabled,onMouseDown:w=>{w.preventDefault()},onMouseEnter:()=>{o.disabled||b(d)},onClick:()=>M(d),style:{border:"1px solid var(--aurora-border-default)",background:p?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)}):a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:Pe})})]})})}function $e(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function Q(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Ne(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ve({query:t,visibleCount:e,enabledCount:n,totalCount:r}){const l=t.trim();return l.length===0?n!==r?`${n} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${l}".`:n===0?`No enabled commands match "${l}".`:n!==e?`${n} of ${e} matching command${n===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const G=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],ct={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:G}};function Ge(){const[t,e]=s.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:G,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function ze(){const[t,e]=s.useState(!0),[n,r]=s.useState("None"),l=G.map(y=>({...y,onSelect:()=>r(typeof y.textValue=="string"?y.textValue:typeof y.label=="string"?y.label:y.key)}));return a.jsxs("div",{style:{minHeight:420,padding:20},children:[a.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,commands:l})]})}function Ke(){const[t,e]=s.useState(!0),[n,r]=s.useState("");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:l,visibleCount:y,enabledCount:H})=>l.trim().length===0?"Command search ready.":`${H}/${y} actionable AI workflow match${y===1?"":"es"} for ${l}`})]})}function Le(){const[t,e]=s.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Me(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",a.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(l=>l+1)}],placeholder:"Try searching publish..."})]})}function Fe(){const[t,e]=s.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:a.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Qe(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",a.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(l=>l+1)}]})]})}function Ue(){const[t,e]=s.useState(!1);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),a.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:t?"Close blocking palette":"Open blocking palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(m,{open:t,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function _e(){const[t,e]=s.useState(!1),[n,r]=s.useState(!0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",a.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:n?"enabled":"disabled"})]}),a.jsx("button",{type:"button",onClick:()=>e(l=>!l),children:t?"Close guarded palette":"Open guarded palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{n&&l.preventDefault()},onPointerDownOutside:l=>{n&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!n,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Je(){const[t,e]=s.useState(!0),[n,r]=s.useState("");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",a.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",a.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:t?"open":"closed"})]}),a.jsx(m,{open:t,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function We(){const[t,e]=s.useState(!0),[n,r]=s.useState("none");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",a.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}function Xe(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",a.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>r(l=>l+1)}]})]})}const B={render:()=>a.jsx(Ge,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await i(r).toHaveAttribute("aria-disabled","true"),await i(r).toHaveAttribute("tabindex","-1")}},E={render:()=>a.jsx(ze,{})},D={render:()=>a.jsx(Ke,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"release"),await i(e.getByText("release")).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},R={render:()=>a.jsx(Le,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"release"),await i(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},T={render:()=>a.jsx(Me,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await i(r).toHaveAttribute("aria-disabled","true"),await c.click(r),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i(e.getByTestId("executed-count")).toHaveTextContent("0")}},S={render:()=>a.jsx(Fe,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"cafe"),await i(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await i(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},I={render:()=>a.jsx(Qe,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("option",{name:"Run Lint"});await c.click(n),await i(e.getByTestId("selection-count")).toHaveTextContent("1"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},j={render:()=>a.jsx(Ue,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await c.click(await e.findByRole("button",{name:"Open blocking palette"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Outside target"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},P={render:()=>a.jsx(_e,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await c.click(await e.findByRole("button",{name:"Open guarded palette"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),V.pointerDown(n.body),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await c.clear(r),await c.type(r,"unlock"),await c.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await i(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await c.keyboard("{Escape}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},O={render:()=>a.jsx(Je,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"release"),await i(e.getByTestId("query-value")).toHaveTextContent("release"),await c.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i(e.getByTestId("query-value")).toHaveTextContent("N/A"),await i(e.getByTestId("open-state")).toHaveTextContent("open"),await c.keyboard("{Escape}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i(e.getByTestId("open-state")).toHaveTextContent("closed")}},A={render:()=>a.jsx(We,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.type(n,"search"),await i(n).toHaveAttribute("aria-activedescendant",i.stringContaining("option-0")),await c.clear(n),await i(n).toHaveAttribute("aria-activedescendant",i.stringContaining("option-1")),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},q={render:()=>a.jsx(Xe,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.click(n),await i(n).toHaveAttribute("aria-activedescendant",i.stringContaining("option-0")),V.keyDown(n,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),V.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await i(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await i(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}};var U,_,J;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(_=B.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var W,X,Y;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  }
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,se,ie;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,le,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,ge,ve;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,we,he;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(we=P.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var xe,fe,Ce;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var ke,Be,Ee;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ee=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var De,Re,Te;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Te=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};const lt=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand","ImeCompositionGuard"];export{E as AiInteractionFlow,T as DisabledCommandGuard,R as DisabledOnlyResults,O as EscapeClearsQueryFirst,P as GuardedDismissEvents,q as ImeCompositionGuard,j as NonDismissible,I as PersistentSelection,D as QueryTelemetry,A as RefinedSearchKeepsActiveCommand,B as SearchCommands,S as TextValueAndAccentSearch,lt as __namedExportsOrder,ct as default};
