import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as ce}from"./Button-Hgh0jeno.js";import{r as j}from"./index-BWu4c2F4.js";import{B as le}from"./Badge-Dkm8CRgf.js";import{within as g,expect as u,userEvent as I}from"./index-DgAF9SIF.js";function de(e,a,o){if(!a)return null;const i=e.find(v=>String(v.key)===a);return i!=null&&i.sortable?{key:a,direction:o}:null}function m({columns:e,data:a,rowKey:o,caption:i,ariaLabel:v,emptyContent:ne="No data available.",defaultSortKey:re,defaultSortDirection:se="asc",onSortChange:A}){const oe=v??(i?void 0:"Data table"),[d,ie]=j.useState(()=>de(e,re,se)),D=j.useMemo(()=>{const r=a.map((l,n)=>({row:l,sourceIndex:n}));if(!d)return r;const s=e.find(l=>String(l.key)===d.key);if(!(s!=null&&s.sortable))return r;const c=s.sortAccessor??(l=>{const n=l[String(s.key)];return n instanceof Date||typeof n=="number"||typeof n=="string"?n:String(n??"")});return r.sort((l,n)=>{const p=c(l.row),w=c(n.row),C=p instanceof Date?p.getTime():p,N=w instanceof Date?w.getTime():w;return C<N?d.direction==="asc"?-1:1:C>N?d.direction==="asc"?1:-1:l.sourceIndex-n.sourceIndex})},[e,a,d]);return t.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:t.jsxs("table",{"aria-label":oe,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[i?t.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:i}):null,t.jsx("thead",{children:t.jsx("tr",{children:e.map(r=>{const s=String(r.key),c=(d==null?void 0:d.key)===s?d.direction:void 0,l=r.align??"left",n=typeof r.header=="string"?r.header:s,p=c==="asc"?"desc":"asc",w=p==="asc"?"ascending":"descending";return t.jsx("th",{scope:"col","aria-sort":c?c==="asc"?"ascending":"descending":"none",style:{textAlign:l,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:r.width},children:r.sortable?t.jsxs("button",{type:"button","aria-label":`${n} sort ${w}`,onClick:()=>{ie({key:s,direction:p}),A==null||A(s,p)},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0},children:[r.header,t.jsx("span",{"aria-hidden":"true",children:c==="asc"?"▲":c==="desc"?"▼":"↕"})]}):r.header},s)})})}),t.jsx("tbody",{children:D.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:ne})}):D.map((r,s)=>{const c=r.row,l=String(r.sourceIndex);return t.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(n=>t.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:n.align??"left"},children:n.render?n.render(c,s):String(c[String(n.key)]??"")},String(n.key)))},o?o(c,s):l)})})]})})}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const y=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],b=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const a=e.status==="ready"?"success":e.status==="review"?"default":"danger";return t.jsx(le,{tone:a,children:e.status})}}],he={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},h={render:()=>t.jsx("div",{style:{width:780,display:"grid",gap:10},children:t.jsx(m,{caption:"Release readiness board",columns:b,data:y,rowKey:e=>e.id,defaultSortKey:"id"})})},x={render:()=>{const e=[...b,{key:"action",header:"Action",width:160,render:a=>t.jsx(ce,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${a.id}`,children:"Open Ticket"})}];return t.jsx(m,{columns:e,data:y,rowKey:a=>a.id})}},f={render:()=>t.jsx("div",{style:{width:780},children:t.jsx(m,{columns:b,data:[],emptyContent:"No release items yet."})})},R={render:()=>t.jsx("div",{style:{width:780},children:t.jsx(m,{ariaLabel:"Release checklist table",columns:b,data:y,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const a=g(e);await u(a.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},S={render:()=>t.jsx("div",{style:{width:780},children:t.jsx(m,{columns:b,data:y,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const a=g(e);await u(a.getByRole("table",{name:"Data table"})).toBeInTheDocument()}};function ue(){const[e,a]=j.useState("id asc");return t.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),t.jsx(m,{columns:b,data:y,defaultSortKey:"id",onSortChange:(o,i)=>a(`${o} ${i}`)})]})}const T={render:()=>t.jsx(ue,{}),play:async({canvasElement:e})=>{const a=g(e),o=a.getByRole("button",{name:"Issue sort descending"});await I.click(o),await u(a.getByText("id desc")).toBeInTheDocument();const v=a.getByRole("button",{name:"Issue sort ascending"}).closest("th");await u(v).toHaveAttribute("aria-sort","descending")}},k={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return t.jsx("div",{style:{width:620},children:t.jsx(m,{columns:e,data:y,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const a=g(e),o=a.getByRole("columnheader",{name:"Component"}),i=a.getByRole("columnheader",{name:"Status"});await u(o).toHaveAttribute("aria-sort","none"),await u(i).toHaveAttribute("aria-sort","none"),await u(a.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await u(a.getAllByRole("cell")[0]).toHaveTextContent("Button")}},me=y.map(e=>({...e,note:""})),pe=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>t.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],B={render:()=>t.jsx("div",{style:{width:720},children:t.jsx(m,{columns:pe,data:me,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const a=g(e),o=a.getByRole("textbox",{name:"BTN-102 note"});await I.type(o,"persist me"),await I.click(a.getByRole("button",{name:"Component sort descending"})),await u(a.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}};var E,H,K;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(K=(H=h.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var q,z,L;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(z=x.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var V,$,F;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(F=($=f.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var O,W,_;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(W=R.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var P,U,G;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(U=S.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var M,Q,X;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,Y,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const xe=["ReleaseChecklist","WithRowAction","EmptyState","AccessibleNameWithoutCaption","AccessibleNameFallback","SortTelemetry","InvalidDefaultSortKeyFallback","FallbackRowKeyStability"];export{S as AccessibleNameFallback,R as AccessibleNameWithoutCaption,f as EmptyState,B as FallbackRowKeyStability,k as InvalidDefaultSortKeyFallback,h as ReleaseChecklist,T as SortTelemetry,x as WithRowAction,xe as __namedExportsOrder,he as default};
