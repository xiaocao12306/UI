import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as Q}from"./Button-Hgh0jeno.js";import{r as k}from"./index-BWu4c2F4.js";import{B as Y}from"./Badge-Dkm8CRgf.js";import{within as A,expect as u,userEvent as Z}from"./index-DgAF9SIF.js";function ee(e,a,o){if(!a)return null;const i=e.find(p=>String(p.key)===a);return i!=null&&i.sortable?{key:a,direction:o}:null}function m({columns:e,data:a,rowKey:o,caption:i,ariaLabel:p,emptyContent:G="No data available.",defaultSortKey:M,defaultSortDirection:X="asc",onSortChange:R}){const[d,J]=k.useState(()=>ee(e,M,X)),B=k.useMemo(()=>{if(!d)return a;const n=e.find(r=>String(r.key)===d.key);if(!(n!=null&&n.sortable))return a;const s=n.sortAccessor??(r=>{const c=r[String(n.key)];return c instanceof Date||typeof c=="number"||typeof c=="string"?c:String(c??"")});return[...a].sort((r,c)=>{const y=s(r),l=s(c),h=y instanceof Date?y.getTime():y,j=l instanceof Date?l.getTime():l;return h<j?d.direction==="asc"?-1:1:h>j?d.direction==="asc"?1:-1:0})},[e,a,d]);return t.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:t.jsxs("table",{"aria-label":p,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[i?t.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:i}):null,t.jsx("thead",{children:t.jsx("tr",{children:e.map(n=>{const s=String(n.key),r=(d==null?void 0:d.key)===s?d.direction:void 0,c=n.align??"left",y=typeof n.header=="string"?n.header:s,l=r==="asc"?"desc":"asc",h=l==="asc"?"ascending":"descending";return t.jsx("th",{scope:"col","aria-sort":r?r==="asc"?"ascending":"descending":"none",style:{textAlign:c,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:n.width},children:n.sortable?t.jsxs("button",{type:"button","aria-label":`${y} sort ${h}`,onClick:()=>{J({key:s,direction:l}),R==null||R(s,l)},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0},children:[n.header,t.jsx("span",{"aria-hidden":"true",children:r==="asc"?"▲":r==="desc"?"▼":"↕"})]}):n.header},s)})})}),t.jsx("tbody",{children:B.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:G})}):B.map((n,s)=>t.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(r=>t.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:r.align??"left"},children:r.render?r.render(n,s):String(n[String(r.key)]??"")},String(r.key)))},o?o(n,s):String(s)))})]})})}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],v=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const a=e.status==="ready"?"success":e.status==="review"?"default":"danger";return t.jsx(Y,{tone:a,children:e.status})}}],ie={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},b={render:()=>t.jsx("div",{style:{width:780,display:"grid",gap:10},children:t.jsx(m,{caption:"Release readiness board",columns:v,data:g,rowKey:e=>e.id,defaultSortKey:"id"})})},w={render:()=>{const e=[...v,{key:"action",header:"Action",width:160,render:a=>t.jsx(Q,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${a.id}`,children:"Open Ticket"})}];return t.jsx(m,{columns:e,data:g,rowKey:a=>a.id})}},f={render:()=>t.jsx("div",{style:{width:780},children:t.jsx(m,{columns:v,data:[],emptyContent:"No release items yet."})})},x={render:()=>t.jsx("div",{style:{width:780},children:t.jsx(m,{ariaLabel:"Release checklist table",columns:v,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const a=A(e);await u(a.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}};function te(){const[e,a]=k.useState("id asc");return t.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),t.jsx(m,{columns:v,data:g,defaultSortKey:"id",onSortChange:(o,i)=>a(`${o} ${i}`)})]})}const S={render:()=>t.jsx(te,{}),play:async({canvasElement:e})=>{const a=A(e),o=a.getByRole("button",{name:"Issue sort descending"});await Z.click(o),await u(a.getByText("id desc")).toBeInTheDocument();const p=a.getByRole("button",{name:"Issue sort ascending"}).closest("th");await u(p).toHaveAttribute("aria-sort","descending")}},T={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return t.jsx("div",{style:{width:620},children:t.jsx(m,{columns:e,data:g,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const a=A(e),o=a.getByRole("columnheader",{name:"Component"}),i=a.getByRole("columnheader",{name:"Status"});await u(o).toHaveAttribute("aria-sort","none"),await u(i).toHaveAttribute("aria-sort","none"),await u(a.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await u(a.getAllByRole("cell")[0]).toHaveTextContent("Button")}};var D,I,C;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(C=(I=b.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var N,q,H;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(q=w.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var E,K,z;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(z=(K=f.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var L,O,W;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(O=x.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var $,V,_;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(V=S.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var P,F,U;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(F=T.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const ce=["ReleaseChecklist","WithRowAction","EmptyState","AccessibleNameWithoutCaption","SortTelemetry","InvalidDefaultSortKeyFallback"];export{x as AccessibleNameWithoutCaption,f as EmptyState,T as InvalidDefaultSortKeyFallback,b as ReleaseChecklist,S as SortTelemetry,w as WithRowAction,ce as __namedExportsOrder,ie as default};
