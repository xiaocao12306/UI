import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as it}from"./Button-DeQ1OHWt.js";import{r as x}from"./index-BWu4c2F4.js";import{B as ct}from"./Badge-ZJmMstsz.js";import{within as y,expect as n,userEvent as S,fireEvent as ne}from"./index-DgAF9SIF.js";const lt=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function dt(e,t,o){if(!t)return null;const l=e.find(w=>String(w.key)===t);return l!=null&&l.sortable?{key:t,direction:o}:null}function m({columns:e,data:t,rowKey:o,caption:l,ariaLabel:w,ariaLabelledBy:P,loading:B=!1,loadingContent:Xe="Loading data...",emptyContent:Je="No data available.",defaultSortKey:Ze,defaultSortDirection:et="asc",getSortAriaLabel:tt=ut,getSortStatusText:_=mt,onSortChange:M}){const at=P?void 0:w??(l?void 0:"Data table"),U=x.useRef({}),W=x.useRef(!0),[nt,Y]=x.useState(null),[rt,k]=x.useState(null),[ot,I]=x.useState(null),[d,Q]=x.useState(()=>dt(e,Ze,et));x.useEffect(()=>{if(!d)return;const i=e.find(r=>String(r.key)===d.key);i!=null&&i.sortable||Q(null)},[e,d]);const R=x.useMemo(()=>{const i=t.map((u,c)=>({row:u,sourceIndex:c}));if(!d)return i;const r=e.find(u=>String(u.key)===d.key);if(!(r!=null&&r.sortable))return i;const g=r.sortAccessor??(u=>{const c=u[String(r.key)];return c instanceof Date||typeof c=="number"||typeof c=="string"?c:String(c??"")});return i.sort((u,c)=>{const b=g(u.row),h=g(c.row);if(typeof b=="string"&&typeof h=="string"){const p=lt.compare(b,h);return p!==0?d.direction==="asc"?p:-p:u.sourceIndex-c.sourceIndex}const T=b instanceof Date?b.getTime():b,D=h instanceof Date?h.getTime():h;return T<D?d.direction==="asc"?-1:1:T>D?d.direction==="asc"?1:-1:u.sourceIndex-c.sourceIndex})},[e,t,d]),X=x.useMemo(()=>{if(B||R.length<=1||!d)return"";const i=e.find(g=>String(g.key)===d.key);if(!(i!=null&&i.sortable))return"";const r=typeof i.header=="string"?i.header:String(i.key);return _({columnKey:d.key,columnHeader:r,direction:d.direction})},[e,_,B,d,R.length]),J=Math.max(e.length,1);return a.jsxs("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[X?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:X}):null,a.jsxs("table",{"aria-label":at,"aria-labelledby":P,"aria-busy":B||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[l?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:l}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(i=>{const r=String(i.key),g=!!i.sortable,u=!B&&g&&(d==null?void 0:d.key)===r&&R.length>1?d.direction:void 0,c=u?u==="asc"?"ascending":"descending":void 0,b=i.align??"left",h=typeof i.header=="string"?i.header:r,T=u==="asc"?"desc":"asc",D=tt({columnKey:r,columnHeader:h,nextDirection:T}),p=B||R.length<=1,Z=nt===r,ee=rt===r,te=ot===r,st=Z||te,ae=()=>{p||(Q({key:r,direction:T}),M==null||M(r,T))};return a.jsx("th",{scope:"col","aria-sort":c,style:{textAlign:b,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:g?a.jsxs("button",{type:"button",ref:s=>{U.current[r]=s},"aria-label":D,"aria-keyshortcuts":p?void 0:"Enter Space",disabled:p,onClick:ae,onMouseEnter:()=>{p||Y(r)},onMouseLeave:()=>{Y(s=>s===r?null:s),k(s=>s===r?null:s)},onMouseDown:()=>{p||(W.current=!1,I(s=>s===r?null:s),k(r))},onMouseUp:()=>{k(s=>s===r?null:s)},onFocus:()=>{if(p){I(s=>s===r?null:s);return}I(s=>pt(U.current[r],W.current)?r:s===r?null:s)},onBlur:()=>{I(s=>s===r?null:s),k(s=>s===r?null:s)},onKeyDown:s=>{W.current=!0,yt(s.key)&&(s.preventDefault(),!s.repeat&&ae())},style:{border:st?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ee?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Z?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",color:"inherit",font:"inherit",cursor:p?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",opacity:p?.64:1,boxShadow:te?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ee?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:u==="asc"?"▲":u==="desc"?"▼":"↕"})]}):i.header},r)})})}),a.jsx("tbody",{children:B?a.jsx("tr",{children:a.jsx("td",{colSpan:J,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Xe})})}):R.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:J,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Je})})}):R.map((i,r)=>{const g=i.row,u=String(i.sourceIndex);return a.jsx("tr",{style:{background:r%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(c=>{const b=c.render?c.render(g,r,i.sourceIndex):String(g[String(c.key)]??""),h={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:c.align??"left"};return c.rowHeader?a.jsx("th",{scope:"row",style:{...h,fontWeight:"var(--aurora-font-weight-medium)"},children:b},String(c.key)):a.jsx("td",{style:h,children:b},String(c.key))})},o?o(g,i.sourceIndex):u)})})]})]})}function ut({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function mt({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function yt(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function pt(e,t){if(!e)return t;try{return e.matches(":focus-visible")}catch{return t}}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],f=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(ct,{tone:t,children:e.status})}}],St={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},H={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(m,{caption:"Release readiness board",columns:f,data:v,rowKey:e=>e.id,defaultSortKey:"id"})})},A={render:()=>{const e=[...f,{key:"action",header:"Action",width:160,render:t=>a.jsx(it,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(m,{columns:e,data:v,rowKey:t=>t.id})}},j={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(m,{columns:f,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"Issue sort ascending"});await n(t.getByText("No release items yet.")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},E={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(m,{columns:f,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("status")).not.toBeInTheDocument(),await n(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},K={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(m,{columns:f,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("table",{name:"Data table"}),l=t.getByRole("button",{name:"Issue sort ascending"}),w=t.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(t.getByText("Syncing release feed...")).toBeInTheDocument(),await n(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(l).toBeDisabled(),await n(l).not.toHaveAttribute("aria-keyshortcuts"),await n(w).not.toHaveAttribute("aria-sort")}},C={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(m,{ariaLabel:"Release checklist table",columns:f,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await n(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},N={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(m,{columns:f,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await n(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},q={render:()=>a.jsxs("div",{style:{width:780,display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(m,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:f,data:v,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const o=y(e).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},$={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(m,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e);await n(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function gt(){const[e,t]=x.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(m,{columns:f,data:v,defaultSortKey:"id",onSortChange:(o,l)=>t(`${o} ${l}`)})]})}const L={render:()=>a.jsx(gt,{}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await S.keyboard("{Enter}"),await n(t.getByText("id desc")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const l=t.getByRole("button",{name:"Issue sort ascending"}),w=l.closest("th");await n(w).toHaveAttribute("aria-sort","descending"),ne.keyDown(l,{key:"Enter",repeat:!0}),await n(t.getByText("id desc")).toBeInTheDocument(),await n(w).toHaveAttribute("aria-sort","descending"),l.focus(),ne.keyDown(l,{key:"Space",repeat:!0}),await n(t.getByText("id desc")).toBeInTheDocument(),await n(w).toHaveAttribute("aria-sort","descending"),await S.keyboard("{Space}"),await n(t.getByText("id asc")).toBeInTheDocument(),await n(w).toHaveAttribute("aria-sort","ascending"),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},V={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(m,{columns:f,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"按降序排序：Issue"});await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await S.click(o),await n(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},z={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(m,{columns:e,data:v,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("columnheader",{name:"Component"}),l=t.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(l).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},Ye=v.map(e=>({...e,note:""})),Qe=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],F={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(m,{columns:Qe,data:Ye,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await S.type(o,"persist me"),await S.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},G={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(m,{columns:Qe,data:Ye,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await S.type(o,"persist me"),await S.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},vt=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],O={render:()=>a.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(m,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,o)=>`${e.key} (visual:${t}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:vt,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=y(e);await S.click(t.getByRole("button",{name:"Score sort descending"})),await n(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var re,oe,se;H.parameters={...H.parameters,docs:{...(re=H.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(se=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,le;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,me;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,pe,ge;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ve,we,be;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
      name: "Issue sort ascending"
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
}`,...(be=(we=K.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var he,xe,fe;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Se,Be,Re;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var Te,ke,Ie;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ie=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};var De,He,Ae;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ae=(He=$.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var je,Ee,Ke;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ke=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Ke.source}}};var Ce,Ne,qe;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var $e,Le,Ve;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var ze,Fe,Ge;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ge=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var Oe,Me,We;G.parameters={...G.parameters,docs:{...(Oe=G.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(We=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};var Pe,_e,Ue;O.parameters={...O.parameters,docs:{...(Pe=O.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ue=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};const Bt=["ReleaseChecklist","WithRowAction","EmptyState","SingleRowSortDisabled","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{N as AccessibleNameFallback,q as AccessibleNameLabelledByHeading,C as AccessibleNameWithoutCaption,j as EmptyState,F as FallbackRowKeyStability,z as InvalidDefaultSortKeyFallback,K as LoadingState,V as LocalizedSortLabels,H as ReleaseChecklist,O as RenderIndexSemantics,$ as RowHeaderSemantics,E as SingleRowSortDisabled,L as SortTelemetry,G as SourceIndexRowKeyStability,A as WithRowAction,Bt as __namedExportsOrder,St as default};
