import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as U}from"./Button-Hgh0jeno.js";import{r as k}from"./index-BWu4c2F4.js";import{B as G}from"./Badge-Dkm8CRgf.js";import{within as W,expect as u,userEvent as M}from"./index-DgAF9SIF.js";function X(t,a,o){if(!a)return null;const i=t.find(p=>String(p.key)===a);return i!=null&&i.sortable?{key:a,direction:o}:null}function m({columns:t,data:a,rowKey:o,caption:i,emptyContent:p="No data available.",defaultSortKey:_,defaultSortDirection:P="asc",onSortChange:T}){const[d,F]=k.useState(()=>X(t,_,P)),R=k.useMemo(()=>{if(!d)return a;const r=t.find(n=>String(n.key)===d.key);if(!(r!=null&&r.sortable))return a;const s=r.sortAccessor??(n=>{const c=n[String(r.key)];return c instanceof Date||typeof c=="number"||typeof c=="string"?c:String(c??"")});return[...a].sort((n,c)=>{const y=s(n),l=s(c),g=y instanceof Date?y.getTime():y,A=l instanceof Date?l.getTime():l;return g<A?d.direction==="asc"?-1:1:g>A?d.direction==="asc"?1:-1:0})},[t,a,d]);return e.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[i?e.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:i}):null,e.jsx("thead",{children:e.jsx("tr",{children:t.map(r=>{const s=String(r.key),n=(d==null?void 0:d.key)===s?d.direction:void 0,c=r.align??"left",y=typeof r.header=="string"?r.header:s,l=n==="asc"?"desc":"asc",g=l==="asc"?"ascending":"descending";return e.jsx("th",{scope:"col","aria-sort":n?n==="asc"?"ascending":"descending":"none",style:{textAlign:c,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:r.width},children:r.sortable?e.jsxs("button",{type:"button","aria-label":`${y} sort ${g}`,onClick:()=>{F({key:s,direction:l}),T==null||T(s,l)},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0},children:[r.header,e.jsx("span",{"aria-hidden":"true",children:n==="asc"?"▲":n==="desc"?"▼":"↕"})]}):r.header},s)})})}),e.jsx("tbody",{children:R.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:t.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:p})}):R.map((r,s)=>e.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(n=>e.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:n.align??"left"},children:n.render?n.render(r,s):String(r[String(n.key)]??"")},String(n.key)))},o?o(r,s):String(s)))})]})})}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const x=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const a=t.status==="ready"?"success":t.status==="review"?"default":"danger";return e.jsx(G,{tone:a,children:t.status})}}],ae={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},v={render:()=>e.jsx("div",{style:{width:780,display:"grid",gap:10},children:e.jsx(m,{caption:"Release readiness board",columns:S,data:x,rowKey:t=>t.id,defaultSortKey:"id"})})},w={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:a=>e.jsx(U,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${a.id}`,children:"Open Ticket"})}];return e.jsx(m,{columns:t,data:x,rowKey:a=>a.id})}},h={render:()=>e.jsx("div",{style:{width:780},children:e.jsx(m,{columns:S,data:[],emptyContent:"No release items yet."})})};function J(){const[t,a]=k.useState("id asc");return e.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[e.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",e.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),e.jsx(m,{columns:S,data:x,defaultSortKey:"id",onSortChange:(o,i)=>a(`${o} ${i}`)})]})}const b={render:()=>e.jsx(J,{}),play:async({canvasElement:t})=>{const a=W(t),o=a.getByRole("button",{name:"Issue sort descending"});await M.click(o),await u(a.getByText("id desc")).toBeInTheDocument();const p=a.getByRole("button",{name:"Issue sort ascending"}).closest("th");await u(p).toHaveAttribute("aria-sort","descending")}},f={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return e.jsx("div",{style:{width:620},children:e.jsx(m,{columns:t,data:x,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const a=W(t),o=a.getByRole("columnheader",{name:"Component"}),i=a.getByRole("columnheader",{name:"Status"});await u(o).toHaveAttribute("aria-sort","none"),await u(i).toHaveAttribute("aria-sort","none"),await u(a.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await u(a.getAllByRole("cell")[0]).toHaveTextContent("Button")}};var B,j,D;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(D=(j=v.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,C,q;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(C=w.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var H,N,E;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(E=(N=h.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var z,K,O;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(K=b.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var $,L,V;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    await expect(componentHeader).toHaveAttribute("aria-sort", "none");
    await expect(statusHeader).toHaveAttribute("aria-sort", "none");
    await expect(canvas.queryByRole("button", {
      name: /Status sort/
    })).not.toBeInTheDocument();
    await expect(canvas.getAllByRole("cell")[0]).toHaveTextContent("Button");
  }
}`,...(V=(L=f.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const re=["ReleaseChecklist","WithRowAction","EmptyState","SortTelemetry","InvalidDefaultSortKeyFallback"];export{h as EmptyState,f as InvalidDefaultSortKeyFallback,v as ReleaseChecklist,b as SortTelemetry,w as WithRowAction,re as __namedExportsOrder,ae as default};
