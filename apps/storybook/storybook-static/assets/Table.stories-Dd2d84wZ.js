import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as st}from"./Button-DeQ1OHWt.js";import{r as x}from"./index-BWu4c2F4.js";import{B as it}from"./Badge-fH5xjxKG.js";import{within as p,expect as n,userEvent as f}from"./index-DgAF9SIF.js";const ct=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function lt(e,t,o){if(!t)return null;const u=e.find(S=>String(S.key)===t);return u!=null&&u.sortable?{key:t,direction:o}:null}function l({columns:e,data:t,rowKey:o,caption:u,ariaLabel:S,ariaLabelledBy:P,loading:T=!1,loadingContent:Ye="Loading data...",emptyContent:Qe="No data available.",defaultSortKey:Xe,defaultSortDirection:Je="asc",getSortAriaLabel:Ze=dt,getSortStatusText:_=ut,onSortChange:M}){const et=P?void 0:S??(u?void 0:"Data table"),U=x.useRef({}),W=x.useRef(!0),[tt,Y]=x.useState(null),[at,k]=x.useState(null),[nt,I]=x.useState(null),[d,rt]=x.useState(()=>lt(e,Xe,Je)),B=x.useMemo(()=>{const i=t.map((y,c)=>({row:y,sourceIndex:c}));if(!d)return i;const r=e.find(y=>String(y.key)===d.key);if(!(r!=null&&r.sortable))return i;const m=r.sortAccessor??(y=>{const c=y[String(r.key)];return c instanceof Date||typeof c=="number"||typeof c=="string"?c:String(c??"")});return i.sort((y,c)=>{const b=m(y.row),w=m(c.row);if(typeof b=="string"&&typeof w=="string"){const g=ct.compare(b,w);return g!==0?d.direction==="asc"?g:-g:y.sourceIndex-c.sourceIndex}const R=b instanceof Date?b.getTime():b,D=w instanceof Date?w.getTime():w;return R<D?d.direction==="asc"?-1:1:R>D?d.direction==="asc"?1:-1:y.sourceIndex-c.sourceIndex})},[e,t,d]),Q=x.useMemo(()=>{if(T||B.length<=1||!d)return"";const i=e.find(m=>String(m.key)===d.key);if(!(i!=null&&i.sortable))return"";const r=typeof i.header=="string"?i.header:String(i.key);return _({columnKey:d.key,columnHeader:r,direction:d.direction})},[e,_,T,d,B.length]),X=Math.max(e.length,1);return a.jsxs("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Q?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Q}):null,a.jsxs("table",{"aria-label":et,"aria-labelledby":P,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[u?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:u}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(i=>{const r=String(i.key),m=(d==null?void 0:d.key)===r&&B.length>1?d.direction:void 0,y=!!i.sortable,c=m?m==="asc"?"ascending":"descending":void 0,b=i.align??"left",w=typeof i.header=="string"?i.header:r,R=m==="asc"?"desc":"asc",D=Ze({columnKey:r,columnHeader:w,nextDirection:R}),g=T||B.length<=1,J=tt===r,Z=at===r,ee=nt===r,ot=J||ee,te=()=>{g||(rt({key:r,direction:R}),M==null||M(r,R))};return a.jsx("th",{scope:"col","aria-sort":c,style:{textAlign:b,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:y?a.jsxs("button",{type:"button",ref:s=>{U.current[r]=s},"aria-label":D,"aria-keyshortcuts":"Enter Space",disabled:g,onClick:te,onMouseEnter:()=>{g||Y(r)},onMouseLeave:()=>{Y(s=>s===r?null:s),k(s=>s===r?null:s)},onMouseDown:()=>{g||(W.current=!1,I(s=>s===r?null:s),k(r))},onMouseUp:()=>{k(s=>s===r?null:s)},onFocus:()=>{if(g){I(s=>s===r?null:s);return}I(s=>yt(U.current[r],W.current)?r:s===r?null:s)},onBlur:()=>{I(s=>s===r?null:s),k(s=>s===r?null:s)},onKeyDown:s=>{W.current=!0,mt(s.key)&&(s.preventDefault(),te())},style:{border:ot?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Z?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":J?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",color:"inherit",font:"inherit",cursor:g?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",opacity:g?.64:1,boxShadow:ee?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Z?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:m==="asc"?"▲":m==="desc"?"▼":"↕"})]}):i.header},r)})})}),a.jsx("tbody",{children:T?a.jsx("tr",{children:a.jsx("td",{colSpan:X,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Ye})})}):B.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:X,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Qe})})}):B.map((i,r)=>{const m=i.row,y=String(i.sourceIndex);return a.jsx("tr",{style:{background:r%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(c=>{const b=c.render?c.render(m,r,i.sourceIndex):String(m[String(c.key)]??""),w={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:c.align??"left"};return c.rowHeader?a.jsx("th",{scope:"row",style:{...w,fontWeight:"var(--aurora-font-weight-medium)"},children:b},String(c.key)):a.jsx("td",{style:w,children:b},String(c.key))})},o?o(m,i.sourceIndex):y)})})]})]})}function dt({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function ut({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function mt(e){return e===" "||e==="Space"||e==="Spacebar"}function yt(e,t){if(!e)return t;try{return e.matches(":focus-visible")}catch{return t}}l.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],h=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(it,{tone:t,children:e.status})}}],ft={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},H={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(l,{caption:"Release readiness board",columns:h,data:v,rowKey:e=>e.id,defaultSortKey:"id"})})},A={render:()=>{const e=[...h,{key:"action",header:"Action",width:160,render:t=>a.jsx(st,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(l,{columns:e,data:v,rowKey:t=>t.id})}},j={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:h,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=p(e);await n(t.getByText("No release items yet.")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("No release items yet."),await n(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},C={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:h,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("status")).not.toBeInTheDocument(),await n(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},K={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:h,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("table",{name:"Data table"});await n(o).toHaveAttribute("aria-busy","true"),await n(t.getByText("Syncing release feed...")).toBeInTheDocument(),await n(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},E={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{ariaLabel:"Release checklist table",columns:h,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=p(e);await n(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},N={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:h,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=p(e);await n(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},q={render:()=>a.jsxs("div",{style:{width:780,display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(l,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:h,data:v,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const o=p(e).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},$={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=p(e);await n(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function pt(){const[e,t]=x.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(l,{columns:h,data:v,defaultSortKey:"id",onSortChange:(o,u)=>t(`${o} ${u}`)})]})}const L={render:()=>a.jsx(pt,{}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await f.keyboard("{Enter}"),await n(t.getByText("id desc")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const u=t.getByRole("button",{name:"Issue sort ascending"}),S=u.closest("th");await n(S).toHaveAttribute("aria-sort","descending"),u.focus(),await f.keyboard("{Space}"),await n(t.getByText("id asc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","ascending"),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},V={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:h,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("button",{name:"按降序排序：Issue"});await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await f.click(o),await n(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},z={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(l,{columns:e,data:v,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("columnheader",{name:"Component"}),u=t.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(u).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},_e=v.map(e=>({...e,note:""})),Ue=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],F={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(l,{columns:Ue,data:_e,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await f.type(o,"persist me"),await f.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},G={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(l,{columns:Ue,data:_e,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=p(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await f.type(o,"persist me"),await f.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},gt=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],O={render:()=>a.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(l,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,o)=>`${e.key} (visual:${t}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:gt,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=p(e);await f.click(t.getByRole("button",{name:"Score sort descending"})),await n(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var ae,ne,re;H.parameters={...H.parameters,docs:{...(ae=H.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(re=(ne=H.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ie;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,le,de;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,ye;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var pe,ge,ve;K.parameters={...K.parameters,docs:{...(pe=K.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=(ge=K.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,we,he;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(we=E.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var xe,fe,Se;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Be,Re,Te;q.parameters={...q.parameters,docs:{...(Be=q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Te=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var ke,Ie,De;$.parameters={...$.parameters,docs:{...(ke=$.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Ie=$.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var He,Ae,je;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(je=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Ce,Ke,Ee;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Ke=V.parameters)==null?void 0:Ke.docs)==null?void 0:Ee.source}}};var Ne,qe,$e;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...($e=(qe=z.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};var Le,Ve,ze;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(ze=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Fe,Ge,Oe;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Oe=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var Me,We,Pe;O.parameters={...O.parameters,docs:{...(Me=O.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Pe=(We=O.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};const St=["ReleaseChecklist","WithRowAction","EmptyState","SingleRowSortDisabled","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{N as AccessibleNameFallback,q as AccessibleNameLabelledByHeading,E as AccessibleNameWithoutCaption,j as EmptyState,F as FallbackRowKeyStability,z as InvalidDefaultSortKeyFallback,K as LoadingState,V as LocalizedSortLabels,H as ReleaseChecklist,O as RenderIndexSemantics,$ as RowHeaderSemantics,C as SingleRowSortDisabled,L as SortTelemetry,G as SourceIndexRowKeyStability,A as WithRowAction,St as __namedExportsOrder,ft as default};
