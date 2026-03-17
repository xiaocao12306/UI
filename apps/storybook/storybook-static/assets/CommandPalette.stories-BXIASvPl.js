import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{D as Z}from"./Dialog-lfL8UqXn.js";import{I as ee}from"./Input-CY7BO4jw.js";import{within as T,userEvent as m,expect as b}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";function f({open:t,onOpenChange:a,commands:n,placeholder:i="Search commands...",emptyMessage:u="No commands found.",onQueryChange:c,getResultsStatusText:h=te}){const[g,$]=l.useState(""),[p,y]=l.useState(0),q=l.useRef(null),w=l.useId();l.useEffect(()=>{var e;if(!t){$(""),y(0);return}(e=q.current)==null||e.focus()},[t]);const D=l.useMemo(()=>O(g.trim()),[g]),s=l.useMemo(()=>D?n.filter(e=>{const d=[ae(e),...e.keywords??[]].join(" ");return O(d).includes(D)}):n,[n,D]),j=l.useMemo(()=>s.reduce((e,o)=>o.disabled?e:e+1,0),[s]),X=l.useMemo(()=>h({query:g,visibleCount:s.length,enabledCount:j,totalCount:n.length}),[n.length,j,s.length,h,g]),A=l.useMemo(()=>s.findIndex(e=>!e.disabled),[s]),Y=l.useMemo(()=>{var e;for(let o=s.length-1;o>=0;o-=1)if(!((e=s[o])!=null&&e.disabled))return o;return-1},[s]);l.useEffect(()=>{if(s.length===0){y(-1);return}y(A)},[s,A]);const I=l.useCallback(e=>{var d;const o=s[e];!o||o.disabled||((d=o.onSelect)==null||d.call(o),a(!1))},[s,a]),B=e=>{var d;if(s.length===0)return;let o=p<0?e===1?-1:0:p;for(let v=0;v<s.length;v+=1)if(o=(o+e+s.length)%s.length,!((d=s[o])!=null&&d.disabled)){y(o);return}};return r.jsx(Z,{open:t,onOpenChange:a,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",children:r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx(ee,{ref:q,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":w,"aria-activedescendant":p>=0?`${w}-option-${p}`:void 0,placeholder:i,value:g,onChange:e=>{$(e.target.value),c==null||c(e.target.value)},onKeyDown:e=>{if(e.key==="ArrowDown"){e.preventDefault(),B(1);return}if(e.key==="ArrowUp"){e.preventDefault(),B(-1);return}if(e.key==="Home"){e.preventDefault(),y(A);return}if(e.key==="End"){e.preventDefault(),y(Y);return}e.key==="Enter"&&p>=0&&(e.preventDefault(),I(p))},"aria-label":"Search commands"}),r.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:X}),r.jsx("div",{id:w,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:s.length>0?s.map((e,o)=>{const d=o===p;return r.jsx("button",{id:`${w}-option-${o}`,type:"button",role:"option","aria-selected":d,"aria-disabled":e.disabled||void 0,tabIndex:-1,disabled:e.disabled,onMouseDown:v=>{v.preventDefault()},onMouseEnter:()=>{e.disabled||y(o)},onClick:()=>I(o),style:{border:"1px solid var(--aurora-border-default)",background:d?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.key)}):r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:u})})]})})}function ae(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function O(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function te({query:t,visibleCount:a,enabledCount:n,totalCount:i}){const u=t.trim();return u.length===0?n!==i?`${n} of ${i} command${i===1?"":"s"} available.`:`${i} command${i===1?"":"s"} available.`:a===0?`No commands match "${u}".`:n===0?`No enabled commands match "${u}".`:n!==a?`${n} of ${a} matching command${n===1?"":"s"} available for "${u}".`:`${a} command${a===1?"":"s"} found for "${u}".`}f.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const E=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],he={title:"AI/CommandPalette",component:f,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:E}};function ne(){const[t,a]=l.useState(!0);return r.jsx(f,{open:t,onOpenChange:a,commands:E,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function re(){const[t,a]=l.useState(!0),[n,i]=l.useState("None"),u=E.map(c=>({...c,onSelect:()=>i(typeof c.textValue=="string"?c.textValue:typeof c.label=="string"?c.label:c.key)}));return r.jsxs("div",{style:{minHeight:420,padding:20},children:[r.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",r.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),r.jsx(f,{open:t,onOpenChange:a,commands:u})]})}function oe(){const[t,a]=l.useState(!0),[n,i]=l.useState("");return r.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[r.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",r.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),r.jsx(f,{open:t,onOpenChange:a,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:i,getResultsStatusText:({query:u,visibleCount:c,enabledCount:h})=>u.trim().length===0?"Command search ready.":`${h}/${c} actionable AI workflow match${c===1?"":"es"} for ${u}`})]})}function se(){const[t,a]=l.useState(!0);return r.jsx(f,{open:t,onOpenChange:a,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function le(){const[t,a]=l.useState(!0);return r.jsx(f,{open:t,onOpenChange:a,commands:[{key:"cafe-settings",label:r.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}const x={render:()=>r.jsx(ne,{}),play:async({canvasElement:t})=>{const a=T(t.ownerDocument.body),n=await a.findByRole("combobox",{name:"Search commands"});await m.clear(n),await m.type(n,"publish");const i=a.getByRole("option",{name:"Publish Release"});await b(i).toHaveAttribute("aria-disabled","true"),await b(i).toHaveAttribute("tabindex","-1")}},k={render:()=>r.jsx(re,{})},C={render:()=>r.jsx(oe,{}),play:async({canvasElement:t})=>{const a=T(t.ownerDocument.body),n=await a.findByRole("combobox",{name:"Search commands"});await m.clear(n),await m.type(n,"release"),await b(a.getByText("release")).toBeInTheDocument(),await m.keyboard("{ArrowDown}{Enter}"),await b(a.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},S={render:()=>r.jsx(se,{}),play:async({canvasElement:t})=>{const a=T(t.ownerDocument.body),n=await a.findByRole("combobox",{name:"Search commands"});await m.clear(n),await m.type(n,"release"),await b(a.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},R={render:()=>r.jsx(le,{}),play:async({canvasElement:t})=>{const a=T(t.ownerDocument.body),n=await a.findByRole("combobox",{name:"Search commands"});await m.clear(n),await m.type(n,"cafe"),await b(a.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await b(a.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}};var P,N,V;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(N=x.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var z,M,H;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(H=(M=k.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var F,Q,L;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:L.source}}};var _,G,U;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(G=S.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var K,J,W;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(J=R.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};const we=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","TextValueAndAccentSearch"];export{k as AiInteractionFlow,S as DisabledOnlyResults,C as QueryTelemetry,x as SearchCommands,R as TextValueAndAccentSearch,we as __namedExportsOrder,he as default};
