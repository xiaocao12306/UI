import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as V}from"./Button-Hgh0jeno.js";import{r as x}from"./index-BWu4c2F4.js";import{B as W}from"./Badge-Dkm8CRgf.js";import{within as _,userEvent as P,expect as j}from"./index-DgAF9SIF.js";function m({columns:t,data:n,rowKey:d,caption:l,emptyContent:h="No data available.",defaultSortKey:k,defaultSortDirection:H="asc",onSortChange:b}){const[i,L]=x.useState(k?{key:k,direction:H}:null),S=x.useMemo(()=>{if(!i)return n;const r=t.find(a=>String(a.key)===i.key);if(!(r!=null&&r.sortable))return n;const s=r.sortAccessor??(a=>{const o=a[String(r.key)];return o instanceof Date||typeof o=="number"||typeof o=="string"?o:String(o??"")});return[...n].sort((a,o)=>{const u=s(a),c=s(o),p=u instanceof Date?u.getTime():u,R=c instanceof Date?c.getTime():c;return p<R?i.direction==="asc"?-1:1:p>R?i.direction==="asc"?1:-1:0})},[t,n,i]);return e.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[l?e.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:l}):null,e.jsx("thead",{children:e.jsx("tr",{children:t.map(r=>{const s=String(r.key),a=(i==null?void 0:i.key)===s?i.direction:void 0,o=r.align??"left",u=typeof r.header=="string"?r.header:s,c=a==="asc"?"desc":"asc",p=c==="asc"?"ascending":"descending";return e.jsx("th",{scope:"col","aria-sort":a?a==="asc"?"ascending":"descending":"none",style:{textAlign:o,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:r.width},children:r.sortable?e.jsxs("button",{type:"button","aria-label":`${u} sort ${p}`,onClick:()=>{L({key:s,direction:c}),b==null||b(s,c)},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0},children:[r.header,e.jsx("span",{"aria-hidden":"true",children:a==="asc"?"▲":a==="desc"?"▼":"↕"})]}):r.header},s)})})}),e.jsx("tbody",{children:S.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:t.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:h})}):S.map((r,s)=>e.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(a=>e.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:a.align??"left"},children:a.render?a.render(r,s):String(r[String(a.key)]??"")},String(a.key)))},d?d(r,s):String(s)))})]})})}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const T=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],v=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const n=t.status==="ready"?"success":t.status==="review"?"default":"danger";return e.jsx(W,{tone:n,children:t.status})}}],Q={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},y={render:()=>e.jsx("div",{style:{width:780,display:"grid",gap:10},children:e.jsx(m,{caption:"Release readiness board",columns:v,data:T,rowKey:t=>t.id,defaultSortKey:"id"})})},g={render:()=>{const t=[...v,{key:"action",header:"Action",width:160,render:n=>e.jsx(V,{size:"sm",variant:"outline",onClick:d=>d.preventDefault(),"aria-label":`Open ${n.id}`,children:"Open Ticket"})}];return e.jsx(m,{columns:t,data:T,rowKey:n=>n.id})}},f={render:()=>e.jsx("div",{style:{width:780},children:e.jsx(m,{columns:v,data:[],emptyContent:"No release items yet."})})};function U(){const[t,n]=x.useState("id asc");return e.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[e.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",e.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),e.jsx(m,{columns:v,data:T,defaultSortKey:"id",onSortChange:(d,l)=>n(`${d} ${l}`)})]})}const w={render:()=>e.jsx(U,{}),play:async({canvasElement:t})=>{const n=_(t),d=n.getByRole("button",{name:"Issue sort descending"});await P.click(d),await j(n.getByText("id desc")).toBeInTheDocument();const h=n.getByRole("button",{name:"Issue sort ascending"}).closest("th");await j(h).toHaveAttribute("aria-sort","descending")}};var A,D,B;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(B=(D=y.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var I,N,q;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var C,z,E;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(E=(z=f.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var K,O,$;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <SortTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await userEvent.click(issueSort);
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    const issueSortAsc = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    const issueHeader = issueSortAsc.closest("th");
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
  }
}`,...($=(O=w.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const Y=["ReleaseChecklist","WithRowAction","EmptyState","SortTelemetry"];export{f as EmptyState,y as ReleaseChecklist,w as SortTelemetry,g as WithRowAction,Y as __namedExportsOrder,Q as default};
