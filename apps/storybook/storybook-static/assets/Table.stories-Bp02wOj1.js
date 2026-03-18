import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as st}from"./Button-DeQ1OHWt.js";import{r as h}from"./index-BWu4c2F4.js";import{B as it}from"./Badge-fH5xjxKG.js";import{within as y,expect as r,userEvent as f}from"./index-DgAF9SIF.js";const ct=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function lt(e,t,o){if(!t)return null;const m=e.find(S=>String(S.key)===t);return m!=null&&m.sortable?{key:t,direction:o}:null}function u({columns:e,data:t,rowKey:o,caption:m,ariaLabel:S,ariaLabelledBy:P,loading:T=!1,loadingContent:Qe="Loading data...",emptyContent:Xe="No data available.",defaultSortKey:Je,defaultSortDirection:Ze="asc",getSortAriaLabel:et=dt,getSortStatusText:_=ut,onSortChange:M}){const tt=P?void 0:S??(m?void 0:"Data table"),U=h.useRef({}),W=h.useRef(!0),[at,Y]=h.useState(null),[nt,k]=h.useState(null),[rt,I]=h.useState(null),[l,Q]=h.useState(()=>lt(e,Je,Ze));h.useEffect(()=>{if(!l)return;const s=e.find(n=>String(n.key)===l.key);s!=null&&s.sortable||Q(null)},[e,l]);const B=h.useMemo(()=>{const s=t.map((d,c)=>({row:d,sourceIndex:c}));if(!l)return s;const n=e.find(d=>String(d.key)===l.key);if(!(n!=null&&n.sortable))return s;const p=n.sortAccessor??(d=>{const c=d[String(n.key)];return c instanceof Date||typeof c=="number"||typeof c=="string"?c:String(c??"")});return s.sort((d,c)=>{const b=p(d.row),w=p(c.row);if(typeof b=="string"&&typeof w=="string"){const g=ct.compare(b,w);return g!==0?l.direction==="asc"?g:-g:d.sourceIndex-c.sourceIndex}const R=b instanceof Date?b.getTime():b,D=w instanceof Date?w.getTime():w;return R<D?l.direction==="asc"?-1:1:R>D?l.direction==="asc"?1:-1:d.sourceIndex-c.sourceIndex})},[e,t,l]),X=h.useMemo(()=>{if(T||B.length<=1||!l)return"";const s=e.find(p=>String(p.key)===l.key);if(!(s!=null&&s.sortable))return"";const n=typeof s.header=="string"?s.header:String(s.key);return _({columnKey:l.key,columnHeader:n,direction:l.direction})},[e,_,T,l,B.length]),J=Math.max(e.length,1);return a.jsxs("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[X?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:X}):null,a.jsxs("table",{"aria-label":tt,"aria-labelledby":P,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[m?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:m}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(s=>{const n=String(s.key),p=!!s.sortable,d=p&&(l==null?void 0:l.key)===n&&B.length>1?l.direction:void 0,c=d?d==="asc"?"ascending":"descending":void 0,b=s.align??"left",w=typeof s.header=="string"?s.header:n,R=d==="asc"?"desc":"asc",D=et({columnKey:n,columnHeader:w,nextDirection:R}),g=T||B.length<=1,Z=at===n,ee=nt===n,te=rt===n,ot=Z||te,ae=()=>{g||(Q({key:n,direction:R}),M==null||M(n,R))};return a.jsx("th",{scope:"col","aria-sort":c,style:{textAlign:b,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:p?a.jsxs("button",{type:"button",ref:i=>{U.current[n]=i},"aria-label":D,"aria-keyshortcuts":"Enter Space",disabled:g,onClick:ae,onMouseEnter:()=>{g||Y(n)},onMouseLeave:()=>{Y(i=>i===n?null:i),k(i=>i===n?null:i)},onMouseDown:()=>{g||(W.current=!1,I(i=>i===n?null:i),k(n))},onMouseUp:()=>{k(i=>i===n?null:i)},onFocus:()=>{if(g){I(i=>i===n?null:i);return}I(i=>yt(U.current[n],W.current)?n:i===n?null:i)},onBlur:()=>{I(i=>i===n?null:i),k(i=>i===n?null:i)},onKeyDown:i=>{W.current=!0,mt(i.key)&&(i.preventDefault(),ae())},style:{border:ot?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ee?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Z?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",color:"inherit",font:"inherit",cursor:g?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",opacity:g?.64:1,boxShadow:te?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ee?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:d==="asc"?"▲":d==="desc"?"▼":"↕"})]}):s.header},n)})})}),a.jsx("tbody",{children:T?a.jsx("tr",{children:a.jsx("td",{colSpan:J,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Qe})})}):B.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:J,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Xe})})}):B.map((s,n)=>{const p=s.row,d=String(s.sourceIndex);return a.jsx("tr",{style:{background:n%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(c=>{const b=c.render?c.render(p,n,s.sourceIndex):String(p[String(c.key)]??""),w={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:c.align??"left"};return c.rowHeader?a.jsx("th",{scope:"row",style:{...w,fontWeight:"var(--aurora-font-weight-medium)"},children:b},String(c.key)):a.jsx("td",{style:w,children:b},String(c.key))})},o?o(p,s.sourceIndex):d)})})]})]})}function dt({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function ut({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function mt(e){return e===" "||e==="Space"||e==="Spacebar"}function yt(e,t){if(!e)return t;try{return e.matches(":focus-visible")}catch{return t}}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  rowHeader?: boolean;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  columnKey: string;
  columnHeader: string;
  nextDirection: TableSortDirection;
}) => string`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnKey: string;
  columnHeader: string;
  nextDirection: TableSortDirection;
}`,signature:{properties:[{key:"columnKey",value:{name:"string",required:!0}},{key:"columnHeader",value:{name:"string",required:!0}},{key:"nextDirection",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}},name:"params"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetSortAriaLabel({
  columnHeader,
  nextDirection
}: {
  columnKey: string;
  columnHeader: string;
  nextDirection: TableSortDirection;
}) {
  return \`\${columnHeader} sort \${nextDirection === "asc" ? "ascending" : "descending"}\`;
}`,computed:!1}},getSortStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}) => string`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}`,signature:{properties:[{key:"columnKey",value:{name:"string",required:!0}},{key:"columnHeader",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}},name:"params"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetSortStatusText({
  columnHeader,
  direction
}: {
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}) {
  return \`Sorted by \${columnHeader} \${direction === "asc" ? "ascending" : "descending"}.\`;
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],x=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(it,{tone:t,children:e.status})}}],ft={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},H={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:x,data:v,rowKey:e=>e.id,defaultSortKey:"id"})})},A={render:()=>{const e=[...x,{key:"action",header:"Action",width:160,render:t=>a.jsx(st,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:e,data:v,rowKey:t=>t.id})}},j={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=y(e);await r(t.getByText("No release items yet.")).toBeInTheDocument(),await r(t.getByRole("status")).toHaveTextContent("No release items yet."),await r(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},K={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("columnheader",{name:/Issue/});await r(o).not.toHaveAttribute("aria-sort"),await r(t.queryByRole("status")).not.toBeInTheDocument(),await r(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},C={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("table",{name:"Data table"});await r(o).toHaveAttribute("aria-busy","true"),await r(t.getByText("Syncing release feed...")).toBeInTheDocument(),await r(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await r(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},E={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{ariaLabel:"Release checklist table",columns:x,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await r(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},N={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await r(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},q={render:()=>a.jsxs("div",{style:{width:780,display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:x,data:v,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const o=y(e).getByRole("table",{name:"Release board metrics"});await r(o).toHaveAttribute("aria-labelledby","release-board-heading"),await r(o).not.toHaveAttribute("aria-label")}},$={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e);await r(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await r(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function pt(){const[e,t]=h.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(u,{columns:x,data:v,defaultSortKey:"id",onSortChange:(o,m)=>t(`${o} ${m}`)})]})}const L={render:()=>a.jsx(pt,{}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"Issue sort descending"});await r(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await f.keyboard("{Enter}"),await r(t.getByText("id desc")).toBeInTheDocument(),await r(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const m=t.getByRole("button",{name:"Issue sort ascending"}),S=m.closest("th");await r(S).toHaveAttribute("aria-sort","descending"),m.focus(),await f.keyboard("{Space}"),await r(t.getByText("id asc")).toBeInTheDocument(),await r(S).toHaveAttribute("aria-sort","ascending"),await r(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},V={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"按降序排序：Issue"});await r(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await f.click(o),await r(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await r(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},z={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(u,{columns:e,data:v,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("columnheader",{name:"Component"}),m=t.getByRole("columnheader",{name:"Status"});await r(o).not.toHaveAttribute("aria-sort"),await r(m).not.toHaveAttribute("aria-sort"),await r(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await r(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},Ue=v.map(e=>({...e,note:""})),Ye=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],F={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(u,{columns:Ye,data:Ue,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await f.type(o,"persist me"),await f.click(t.getByRole("button",{name:"Component sort descending"})),await r(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},G={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(u,{columns:Ye,data:Ue,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await f.type(o,"persist me"),await f.click(t.getByRole("button",{name:"Component sort descending"})),await r(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},gt=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],O={render:()=>a.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,o)=>`${e.key} (visual:${t}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:gt,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=y(e);await f.click(t.getByRole("button",{name:"Score sort descending"})),await r(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await r(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var ne,re,oe;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(oe=(re=H.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const actionColumns: Array<TableColumn<ReleaseRow>> = [...columns, {
      key: "action",
      header: "Action",
      width: 160,
      render: row => <Button size="sm" variant="outline" onClick={event => event.preventDefault()} aria-label={\`Open \${row.id}\`}>
            Open Ticket
          </Button>
    }];
    return <Table columns={actionColumns} data={rows} rowKey={row => row.id} />;
  }
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("No release items yet.")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("No release items yet.");
    await expect(canvas.getByRole("button", {
      name: "Issue sort ascending"
    })).toBeDisabled();
  }
}`,...(ue=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ye,pe;K.parameters={...K.parameters,docs:{...(me=K.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[{
      id: "BTN-102",
      component: "Button",
      owner: "Design System",
      status: "ready"
    }]} defaultSortKey="id" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueHeader = canvas.getByRole("columnheader", {
      name: /Issue/
    });
    await expect(issueHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Issue sort ascending"
    })).toBeDisabled();
  }
}`,...(pe=(ye=K.parameters)==null?void 0:ye.docs)==null?void 0:pe.source}}};var ge,ve,be;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={rows} loading loadingContent="Syncing release feed..." defaultSortKey="id" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Data table"
    });
    await expect(table).toHaveAttribute("aria-busy", "true");
    await expect(canvas.getByText("Syncing release feed...")).toBeInTheDocument();
    await expect(canvas.queryByRole("rowheader", {
      name: "BTN-102"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Issue sort descending"
    })).toBeDisabled();
  }
}`,...(be=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var we,he,xe;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table ariaLabel="Release checklist table" columns={columns} data={rows} rowKey={row => row.id} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", {
      name: "Release checklist table"
    })).toBeInTheDocument();
  }
}`,...(xe=(he=E.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,Se,Be;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={rows} rowKey={row => row.id} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", {
      name: "Data table"
    })).toBeInTheDocument();
  }
}`,...(Be=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Re,Te,ke;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <h3 id="release-board-heading" style={{
      margin: 0
    }}>
        Release board metrics
      </h3>
      <Table ariaLabelledBy="release-board-heading" ariaLabel="Fallback table label" columns={columns} data={rows} rowKey={row => row.id} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Release board metrics"
    });
    await expect(table).toHaveAttribute("aria-labelledby", "release-board-heading");
    await expect(table).not.toHaveAttribute("aria-label");
  }
}`,...(ke=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Ie,De,He;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={[{
      key: "component",
      header: "Component",
      rowHeader: true,
      sortable: true
    }, {
      key: "owner",
      header: "Owner",
      sortable: true
    }, {
      key: "status",
      header: "Status",
      sortable: true
    }]} data={rows} rowKey={row => row.id} defaultSortKey="component" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("rowheader", {
      name: "Button"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("rowheader", {
      name: "Dialog"
    })).toBeInTheDocument();
  }
}`,...(He=(De=$.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Ae,je,Ke;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <SortTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await expect(issueSort).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    issueSort.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");
    const issueSortAsc = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    const issueHeader = issueSortAsc.closest("th");
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    issueSortAsc.focus();
    await userEvent.keyboard("{Space}");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
  }
}`,...(Ke=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ke.source}}};var Ce,Ee,Ne;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={rows} defaultSortKey="id" getSortAriaLabel={({
      columnHeader,
      nextDirection
    }) => \`按\${nextDirection === "asc" ? "升序" : "降序"}排序：\${columnHeader}\`} getSortStatusText={({
      columnHeader,
      direction
    }) => \`当前排序：\${columnHeader}（\${direction === "asc" ? "升序" : "降序"}）\`} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const descendingButton = canvas.getByRole("button", {
      name: "按降序排序：Issue"
    });
    await expect(canvas.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）");
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "按升序排序：Issue"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）");
  }
}`,...(Ne=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var qe,$e,Le;z.parameters={...z.parameters,docs:{...(qe=z.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    const nonSortableStatusColumns: Array<TableColumn<ReleaseRow>> = [{
      key: "component",
      header: "Component",
      sortable: true
    }, {
      key: "status",
      header: "Status",
      width: 140
    }];
    return <div style={{
      width: 620
    }}>
        <Table columns={nonSortableStatusColumns} data={rows} defaultSortKey="status" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const componentHeader = canvas.getByRole("columnheader", {
      name: "Component"
    });
    const statusHeader = canvas.getByRole("columnheader", {
      name: "Status"
    });
    await expect(componentHeader).not.toHaveAttribute("aria-sort");
    await expect(statusHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.queryByRole("button", {
      name: /Status sort/
    })).not.toBeInTheDocument();
    await expect(canvas.getAllByRole("cell")[0]).toHaveTextContent("Button");
  }
}`,...(Le=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var Ve,ze,Fe;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 720
  }}>
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alphaInput = canvas.getByRole("textbox", {
      name: "BTN-102 note"
    });
    await userEvent.type(alphaInput, "persist me");
    await userEvent.click(canvas.getByRole("button", {
      name: "Component sort descending"
    }));
    await expect(canvas.getByRole("textbox", {
      name: "BTN-102 note"
    })).toHaveValue("persist me");
  }
}`,...(Fe=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};var Ge,Oe,Me;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 720
  }}>
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" rowKey={(row, rowIndex) => \`\${rowIndex}-\${row.id}\`} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alphaInput = canvas.getByRole("textbox", {
      name: "BTN-102 note"
    });
    await userEvent.type(alphaInput, "persist me");
    await userEvent.click(canvas.getByRole("button", {
      name: "Component sort descending"
    }));
    await expect(canvas.getByRole("textbox", {
      name: "BTN-102 note"
    })).toHaveValue("persist me");
  }
}`,...(Me=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Me.source}}};var We,Pe,_e;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 720,
    display: "grid",
    gap: 8
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        \`render(row, rowIndex, sourceIndex)\` exposes both sorted row position and source-data position.
      </p>
      <Table columns={[{
      key: "key",
      header: "Item",
      sortable: true,
      render: (row, rowIndex, sourceIndex) => \`\${row.key} (visual:\${rowIndex}, source:\${sourceIndex})\`
    }, {
      key: "score",
      header: "Score",
      sortable: true
    }]} data={indexSemanticsRows} defaultSortKey="score" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Score sort descending"
    }));
    await expect(canvas.getByRole("cell", {
      name: "Gamma (visual:0, source:2)"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("cell", {
      name: "Alpha (visual:2, source:0)"
    })).toBeInTheDocument();
  }
}`,...(_e=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};const St=["ReleaseChecklist","WithRowAction","EmptyState","SingleRowSortDisabled","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{N as AccessibleNameFallback,q as AccessibleNameLabelledByHeading,E as AccessibleNameWithoutCaption,j as EmptyState,F as FallbackRowKeyStability,z as InvalidDefaultSortKeyFallback,C as LoadingState,V as LocalizedSortLabels,H as ReleaseChecklist,O as RenderIndexSemantics,$ as RowHeaderSemantics,K as SingleRowSortDisabled,L as SortTelemetry,G as SourceIndexRowKeyStability,A as WithRowAction,St as __namedExportsOrder,ft as default};
