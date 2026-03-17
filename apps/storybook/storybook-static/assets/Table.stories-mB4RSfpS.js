import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as V}from"./Button-Hgh0jeno.js";import{r as x}from"./index-BWu4c2F4.js";import{B as W}from"./Badge-Dkm8CRgf.js";import{within as _,userEvent as P,expect as R}from"./index-DgAF9SIF.js";function U(t,r,o){if(!r)return null;const d=t.find(u=>String(u.key)===r);return d!=null&&d.sortable?{key:r,direction:o}:null}function p({columns:t,data:r,rowKey:o,caption:d,emptyContent:u="No data available.",defaultSortKey:$,defaultSortDirection:H="asc",onSortChange:b}){const[c,L]=x.useState(()=>U(t,$,H)),k=x.useMemo(()=>{if(!c)return r;const a=t.find(n=>String(n.key)===c.key);if(!(a!=null&&a.sortable))return r;const s=a.sortAccessor??(n=>{const i=n[String(a.key)];return i instanceof Date||typeof i=="number"||typeof i=="string"?i:String(i??"")});return[...r].sort((n,i)=>{const m=s(n),l=s(i),y=m instanceof Date?m.getTime():m,S=l instanceof Date?l.getTime():l;return y<S?c.direction==="asc"?-1:1:y>S?c.direction==="asc"?1:-1:0})},[t,r,c]);return e.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[d?e.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:d}):null,e.jsx("thead",{children:e.jsx("tr",{children:t.map(a=>{const s=String(a.key),n=(c==null?void 0:c.key)===s?c.direction:void 0,i=a.align??"left",m=typeof a.header=="string"?a.header:s,l=n==="asc"?"desc":"asc",y=l==="asc"?"ascending":"descending";return e.jsx("th",{scope:"col","aria-sort":n?n==="asc"?"ascending":"descending":"none",style:{textAlign:i,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:a.width},children:a.sortable?e.jsxs("button",{type:"button","aria-label":`${m} sort ${y}`,onClick:()=>{L({key:s,direction:l}),b==null||b(s,l)},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0},children:[a.header,e.jsx("span",{"aria-hidden":"true",children:n==="asc"?"▲":n==="desc"?"▼":"↕"})]}):a.header},s)})})}),e.jsx("tbody",{children:k.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:t.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:u})}):k.map((a,s)=>e.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(n=>e.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:n.align??"left"},children:n.render?n.render(a,s):String(a[String(n.key)]??"")},String(n.key)))},o?o(a,s):String(s)))})]})})}p.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const T=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],h=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const r=t.status==="ready"?"success":t.status==="review"?"default":"danger";return e.jsx(W,{tone:r,children:t.status})}}],Y={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},g={render:()=>e.jsx("div",{style:{width:780,display:"grid",gap:10},children:e.jsx(p,{caption:"Release readiness board",columns:h,data:T,rowKey:t=>t.id,defaultSortKey:"id"})})},f={render:()=>{const t=[...h,{key:"action",header:"Action",width:160,render:r=>e.jsx(V,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${r.id}`,children:"Open Ticket"})}];return e.jsx(p,{columns:t,data:T,rowKey:r=>r.id})}},v={render:()=>e.jsx("div",{style:{width:780},children:e.jsx(p,{columns:h,data:[],emptyContent:"No release items yet."})})};function G(){const[t,r]=x.useState("id asc");return e.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[e.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",e.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),e.jsx(p,{columns:h,data:T,defaultSortKey:"id",onSortChange:(o,d)=>r(`${o} ${d}`)})]})}const w={render:()=>e.jsx(G,{}),play:async({canvasElement:t})=>{const r=_(t),o=r.getByRole("button",{name:"Issue sort descending"});await P.click(o),await R(r.getByText("id desc")).toBeInTheDocument();const u=r.getByRole("button",{name:"Issue sort ascending"}).closest("th");await R(u).toHaveAttribute("aria-sort","descending")}};var j,A,D;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(D=(A=g.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var B,I,N;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(I=f.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var q,C,z;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(z=(C=v.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var E,K,O;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(K=w.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};const Z=["ReleaseChecklist","WithRowAction","EmptyState","SortTelemetry"];export{v as EmptyState,g as ReleaseChecklist,w as SortTelemetry,f as WithRowAction,Z as __namedExportsOrder,Y as default};
