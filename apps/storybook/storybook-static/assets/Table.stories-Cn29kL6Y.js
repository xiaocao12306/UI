import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as ae}from"./Button-Hgh0jeno.js";import{r as A}from"./index-BWu4c2F4.js";import{B as ne}from"./Badge-Dkm8CRgf.js";import{within as k,expect as d,userEvent as re}from"./index-DgAF9SIF.js";function se(e,a,o){if(!a)return null;const i=e.find(g=>String(g.key)===a);return i!=null&&i.sortable?{key:a,direction:o}:null}function u({columns:e,data:a,rowKey:o,caption:i,ariaLabel:g,emptyContent:Q="No data available.",defaultSortKey:Y,defaultSortDirection:Z="asc",onSortChange:B}){const ee=g??(i?void 0:"Data table"),[l,te]=A.useState(()=>se(e,Y,Z)),j=A.useMemo(()=>{if(!l)return a;const n=e.find(r=>String(r.key)===l.key);if(!(n!=null&&n.sortable))return a;const s=n.sortAccessor??(r=>{const c=r[String(n.key)];return c instanceof Date||typeof c=="number"||typeof c=="string"?c:String(c??"")});return[...a].sort((r,c)=>{const v=s(r),m=s(c),b=v instanceof Date?v.getTime():v,D=m instanceof Date?m.getTime():m;return b<D?l.direction==="asc"?-1:1:b>D?l.direction==="asc"?1:-1:0})},[e,a,l]);return t.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:t.jsxs("table",{"aria-label":ee,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[i?t.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:i}):null,t.jsx("thead",{children:t.jsx("tr",{children:e.map(n=>{const s=String(n.key),r=(l==null?void 0:l.key)===s?l.direction:void 0,c=n.align??"left",v=typeof n.header=="string"?n.header:s,m=r==="asc"?"desc":"asc",b=m==="asc"?"ascending":"descending";return t.jsx("th",{scope:"col","aria-sort":r?r==="asc"?"ascending":"descending":"none",style:{textAlign:c,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:n.width},children:n.sortable?t.jsxs("button",{type:"button","aria-label":`${v} sort ${b}`,onClick:()=>{te({key:s,direction:m}),B==null||B(s,m)},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0},children:[n.header,t.jsx("span",{"aria-hidden":"true",children:r==="asc"?"▲":r==="desc"?"▼":"↕"})]}):n.header},s)})})}),t.jsx("tbody",{children:j.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:Q})}):j.map((n,s)=>t.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(r=>t.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:r.align??"left"},children:r.render?r.render(n,s):String(n[String(r.key)]??"")},String(r.key)))},o?o(n,s):String(s)))})]})})}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],y=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const a=e.status==="ready"?"success":e.status==="review"?"default":"danger";return t.jsx(ne,{tone:a,children:e.status})}}],me={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},w={render:()=>t.jsx("div",{style:{width:780,display:"grid",gap:10},children:t.jsx(u,{caption:"Release readiness board",columns:y,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},h={render:()=>{const e=[...y,{key:"action",header:"Action",width:160,render:a=>t.jsx(ae,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${a.id}`,children:"Open Ticket"})}];return t.jsx(u,{columns:e,data:p,rowKey:a=>a.id})}},f={render:()=>t.jsx("div",{style:{width:780},children:t.jsx(u,{columns:y,data:[],emptyContent:"No release items yet."})})},x={render:()=>t.jsx("div",{style:{width:780},children:t.jsx(u,{ariaLabel:"Release checklist table",columns:y,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const a=k(e);await d(a.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},S={render:()=>t.jsx("div",{style:{width:780},children:t.jsx(u,{columns:y,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const a=k(e);await d(a.getByRole("table",{name:"Data table"})).toBeInTheDocument()}};function oe(){const[e,a]=A.useState("id asc");return t.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),t.jsx(u,{columns:y,data:p,defaultSortKey:"id",onSortChange:(o,i)=>a(`${o} ${i}`)})]})}const T={render:()=>t.jsx(oe,{}),play:async({canvasElement:e})=>{const a=k(e),o=a.getByRole("button",{name:"Issue sort descending"});await re.click(o),await d(a.getByText("id desc")).toBeInTheDocument();const g=a.getByRole("button",{name:"Issue sort ascending"}).closest("th");await d(g).toHaveAttribute("aria-sort","descending")}},R={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return t.jsx("div",{style:{width:620},children:t.jsx(u,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const a=k(e),o=a.getByRole("columnheader",{name:"Component"}),i=a.getByRole("columnheader",{name:"Status"});await d(o).toHaveAttribute("aria-sort","none"),await d(i).toHaveAttribute("aria-sort","none"),await d(a.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await d(a.getAllByRole("cell")[0]).toHaveTextContent("Button")}};var I,C,N;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(N=(C=w.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var q,H,E;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(H=h.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var K,z,L;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(L=(z=f.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var O,W,$;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(W=x.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var F,V,_;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(_=(V=S.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var P,U,G;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(U=T.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var M,X,J;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(J=(X=R.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};const pe=["ReleaseChecklist","WithRowAction","EmptyState","AccessibleNameWithoutCaption","AccessibleNameFallback","SortTelemetry","InvalidDefaultSortKeyFallback"];export{S as AccessibleNameFallback,x as AccessibleNameWithoutCaption,f as EmptyState,R as InvalidDefaultSortKeyFallback,w as ReleaseChecklist,T as SortTelemetry,h as WithRowAction,pe as __namedExportsOrder,me as default};
