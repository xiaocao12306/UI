import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as lt}from"./Button-DeQ1OHWt.js";import{r as h}from"./index-BWu4c2F4.js";import{B as dt}from"./Badge-ZJmMstsz.js";import{within as p,expect as n,userEvent as S,fireEvent as re}from"./index-DgAF9SIF.js";const ut=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function mt(e,t,o){if(!t)return null;const l=e.find(w=>String(w.key)===t);return l!=null&&l.sortable?{key:t,direction:o}:null}function u({columns:e,data:t,rowKey:o,caption:l,ariaLabel:w,ariaLabelledBy:_,loading:R=!1,loadingContent:Je="Loading data...",emptyContent:Ze="No data available.",defaultSortKey:et,defaultSortDirection:tt="asc",getSortAriaLabel:at=yt,getSortStatusText:U=pt,onSortChange:W}){const nt=_?void 0:w??(l?void 0:"Data table"),Y=h.useRef({}),P=h.useRef(!0),[rt,Q]=h.useState(null),[ot,k]=h.useState(null),[st,I]=h.useState(null),[d,X]=h.useState(()=>mt(e,et,tt));h.useEffect(()=>{if(!d)return;const i=e.find(r=>String(r.key)===d.key);i!=null&&i.sortable||X(null)},[e,d]);const T=h.useMemo(()=>{const i=t.map((m,c)=>({row:m,sourceIndex:c}));if(!d)return i;const r=e.find(m=>String(m.key)===d.key);if(!(r!=null&&r.sortable))return i;const v=r.sortAccessor??(m=>{const c=m[String(r.key)];return c instanceof Date||typeof c=="number"||typeof c=="string"?c:String(c??"")});return i.sort((m,c)=>{const y=v(m.row),b=v(c.row);if(typeof y=="string"&&typeof b=="string"){const B=ut.compare(y,b);return B!==0?d.direction==="asc"?B:-B:m.sourceIndex-c.sourceIndex}const D=y instanceof Date?y.getTime():y,H=b instanceof Date?b.getTime():b;return D<H?d.direction==="asc"?-1:1:D>H?d.direction==="asc"?1:-1:m.sourceIndex-c.sourceIndex})},[e,t,d]),J=h.useMemo(()=>{if(R||T.length<=1||!d)return"";const i=e.find(v=>String(v.key)===d.key);if(!(i!=null&&i.sortable))return"";const r=typeof i.header=="string"?i.header:String(i.key);return U({columnKey:d.key,columnHeader:r,direction:d.direction})},[e,U,R,d,T.length]),Z=Math.max(e.length,1);return a.jsxs("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[J?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:J}):null,a.jsxs("table",{"aria-label":nt,"aria-labelledby":_,"aria-busy":R||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[l?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:l}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(i=>{const r=String(i.key),v=!!i.sortable,m=T.length>1,c=v&&(d==null?void 0:d.key)===r?d.direction:void 0,y=!R&&m?c:void 0,b=y?y==="asc"?"ascending":"descending":void 0,D=i.align??"left",H=typeof i.header=="string"?i.header:r,B=c==="asc"?"desc":"asc",it=at({columnKey:r,columnHeader:H,nextDirection:B}),f=R||!m,ee=rt===r,te=ot===r,ae=st===r,ct=ee||ae,ne=()=>{f||(X({key:r,direction:B}),W==null||W(r,B))};return a.jsx("th",{scope:"col","aria-sort":b,style:{textAlign:D,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:v?a.jsxs("button",{type:"button",ref:s=>{Y.current[r]=s},"aria-label":it,"aria-keyshortcuts":f?void 0:"Enter Space",disabled:f,onClick:ne,onMouseEnter:()=>{f||Q(r)},onMouseLeave:()=>{Q(s=>s===r?null:s),k(s=>s===r?null:s)},onMouseDown:()=>{f||(P.current=!1,I(s=>s===r?null:s),k(r))},onMouseUp:()=>{k(s=>s===r?null:s)},onFocus:()=>{if(f){I(s=>s===r?null:s);return}I(s=>gt(Y.current[r],P.current)?r:s===r?null:s)},onBlur:()=>{I(s=>s===r?null:s),k(s=>s===r?null:s)},onKeyDown:s=>{P.current=!0,vt(s.key)&&(s.preventDefault(),!s.repeat&&ne())},style:{border:ct?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:te?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":ee?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:f?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ae?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:te?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:y==="asc"?"▲":y==="desc"?"▼":"↕"})]}):i.header},r)})})}),a.jsx("tbody",{children:R?a.jsx("tr",{children:a.jsx("td",{colSpan:Z,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Je})})}):T.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:Z,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Ze})})}):T.map((i,r)=>{const v=i.row,m=String(i.sourceIndex);return a.jsx("tr",{style:{background:r%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(c=>{const y=c.render?c.render(v,r,i.sourceIndex):String(v[String(c.key)]??""),b={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:c.align??"left"};return c.rowHeader?a.jsx("th",{scope:"row",style:{...b,fontWeight:"var(--aurora-font-weight-medium)"},children:y},String(c.key)):a.jsx("td",{style:b,children:y},String(c.key))})},o?o(v,i.sourceIndex):m)})})]})]})}function yt({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function pt({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function vt(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function gt(e,t){if(!e)return t;try{return e.matches(":focus-visible")}catch{return t}}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],x=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(dt,{tone:t,children:e.status})}}],Rt={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},A={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:x,data:g,rowKey:e=>e.id,defaultSortKey:"id"})})},j={render:()=>{const e=[...x,{key:"action",header:"Action",width:160,render:t=>a.jsx(lt,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:e,data:g,rowKey:t=>t.id})}},E={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("button",{name:"Issue sort ascending"});await n(t.getByText("No release items yet.")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},K={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("status")).not.toBeInTheDocument(),await n(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},C={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("table",{name:"Data table"}),l=t.getByRole("button",{name:"Issue sort descending"}),w=t.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(t.getByText("Syncing release feed...")).toBeInTheDocument(),await n(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(l).toBeDisabled(),await n(l).not.toHaveAttribute("aria-keyshortcuts"),await n(w).not.toHaveAttribute("aria-sort")}},N={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{ariaLabel:"Release checklist table",columns:x,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=p(e);await n(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},q={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=p(e);await n(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},$={render:()=>a.jsxs("div",{style:{width:780,display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:x,data:g,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const o=p(e).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},L={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=p(e);await n(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function wt(){const[e,t]=h.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(u,{columns:x,data:g,defaultSortKey:"id",onSortChange:(o,l)=>t(`${o} ${l}`)})]})}const V={render:()=>a.jsx(wt,{}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await S.keyboard("{Enter}"),await n(t.getByText("id desc")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const l=t.getByRole("button",{name:"Issue sort ascending"}),w=l.closest("th");await n(w).toHaveAttribute("aria-sort","descending"),re.keyDown(l,{key:"Enter",repeat:!0}),await n(t.getByText("id desc")).toBeInTheDocument(),await n(w).toHaveAttribute("aria-sort","descending"),l.focus(),re.keyDown(l,{key:"Space",repeat:!0}),await n(t.getByText("id desc")).toBeInTheDocument(),await n(w).toHaveAttribute("aria-sort","descending"),await S.keyboard("{Space}"),await n(t.getByText("id asc")).toBeInTheDocument(),await n(w).toHaveAttribute("aria-sort","ascending"),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},z={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:x,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("button",{name:"按降序排序：Issue"});await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await S.click(o),await n(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},F={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(u,{columns:e,data:g,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("columnheader",{name:"Component"}),l=t.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(l).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},Qe=g.map(e=>({...e,note:""})),Xe=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],G={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(u,{columns:Xe,data:Qe,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await S.type(o,"persist me"),await S.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},M={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(u,{columns:Xe,data:Qe,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await S.type(o,"persist me"),await S.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},bt=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],O={render:()=>a.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,o)=>`${e.key} (visual:${t}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:bt,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=p(e);await S.click(t.getByRole("button",{name:"Score sort descending"})),await n(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var oe,se,ie;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,le,de;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,ye;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sortButton = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    await expect(canvas.getByText("No release items yet.")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("No release items yet.");
    await expect(sortButton).toBeDisabled();
    await expect(sortButton).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(ye=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var pe,ve,ge;K.parameters={...K.parameters,docs:{...(pe=K.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
      name: "Issue sort descending"
    })).toBeDisabled();
  }
}`,...(ge=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var we,be,he;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
    const sortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    const issueHeader = canvas.getByRole("columnheader", {
      name: /Issue/
    });
    await expect(table).toHaveAttribute("aria-busy", "true");
    await expect(canvas.getByText("Syncing release feed...")).toBeInTheDocument();
    await expect(canvas.queryByRole("rowheader", {
      name: "BTN-102"
    })).not.toBeInTheDocument();
    await expect(sortButton).toBeDisabled();
    await expect(sortButton).not.toHaveAttribute("aria-keyshortcuts");
    await expect(issueHeader).not.toHaveAttribute("aria-sort");
  }
}`,...(he=(be=C.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,fe,Se;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Be,Re,Te;q.parameters={...q.parameters,docs:{...(Be=q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Te=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var ke,Ie,De;$.parameters={...$.parameters,docs:{...(ke=$.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Ie=$.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var He,Ae,je;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(je=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Ee,Ke,Ce;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
    fireEvent.keyDown(issueSortAsc, {
      key: "Enter",
      repeat: true
    });
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    issueSortAsc.focus();
    fireEvent.keyDown(issueSortAsc, {
      key: "Space",
      repeat: true
    });
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await userEvent.keyboard("{Space}");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
  }
}`,...(Ce=(Ke=V.parameters)==null?void 0:Ke.docs)==null?void 0:Ce.source}}};var Ne,qe,$e;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...($e=(qe=z.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};var Le,Ve,ze;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(ze=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Fe,Ge,Me;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:Me.source}}};var Oe,We,Pe;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Pe=(We=M.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};var _e,Ue,Ye;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 720,
    display: "grid",
    gap: 8
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        \`render(row, rowIndex, sourceIndex)\` exposes both sorted row position and source-data
        position.
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
}`,...(Ye=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};const Tt=["ReleaseChecklist","WithRowAction","EmptyState","SingleRowSortDisabled","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{q as AccessibleNameFallback,$ as AccessibleNameLabelledByHeading,N as AccessibleNameWithoutCaption,E as EmptyState,G as FallbackRowKeyStability,F as InvalidDefaultSortKeyFallback,C as LoadingState,z as LocalizedSortLabels,A as ReleaseChecklist,O as RenderIndexSemantics,L as RowHeaderSemantics,K as SingleRowSortDisabled,V as SortTelemetry,M as SourceIndexRowKeyStability,j as WithRowAction,Tt as __namedExportsOrder,Rt as default};
