import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as pe}from"./Button-Hgh0jeno.js";import{r as I}from"./index-BWu4c2F4.js";import{B as ye}from"./Badge-Dkm8CRgf.js";import{within as b,expect as d,userEvent as D}from"./index-DgAF9SIF.js";function ge(e,t,r){if(!t)return null;const i=e.find(v=>String(v.key)===t);return i!=null&&i.sortable?{key:t,direction:r}:null}function u({columns:e,data:t,rowKey:r,caption:i,ariaLabel:v,emptyContent:ie="No data available.",defaultSortKey:ce,defaultSortDirection:le="asc",getSortAriaLabel:de=be,onSortChange:j}){const ue=v??(i?void 0:"Data table"),[m,me]=I.useState(()=>ge(e,ce,le)),C=I.useMemo(()=>{const o=t.map((l,n)=>({row:l,sourceIndex:n}));if(!m)return o;const s=e.find(l=>String(l.key)===m.key);if(!(s!=null&&s.sortable))return o;const c=s.sortAccessor??(l=>{const n=l[String(s.key)];return n instanceof Date||typeof n=="number"||typeof n=="string"?n:String(n??"")});return o.sort((l,n)=>{const y=c(l.row),w=c(n.row),H=y instanceof Date?y.getTime():y,K=w instanceof Date?w.getTime():w;return H<K?m.direction==="asc"?-1:1:H>K?m.direction==="asc"?1:-1:l.sourceIndex-n.sourceIndex})},[e,t,m]);return a.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:a.jsxs("table",{"aria-label":ue,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[i?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:i}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(o=>{const s=String(o.key),c=(m==null?void 0:m.key)===s?m.direction:void 0,l=o.align??"left",n=typeof o.header=="string"?o.header:s,y=c==="asc"?"desc":"asc",w=de({columnKey:s,columnHeader:n,nextDirection:y});return a.jsx("th",{scope:"col","aria-sort":c?c==="asc"?"ascending":"descending":"none",style:{textAlign:l,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:o.width},children:o.sortable?a.jsxs("button",{type:"button","aria-label":w,onClick:()=>{me({key:s,direction:y}),j==null||j(s,y)},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0},children:[o.header,a.jsx("span",{"aria-hidden":"true",children:c==="asc"?"▲":c==="desc"?"▼":"↕"})]}):o.header},s)})})}),a.jsx("tbody",{children:C.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:ie})}):C.map((o,s)=>{const c=o.row,l=String(o.sourceIndex);return a.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(n=>a.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:n.align??"left"},children:n.render?n.render(c,s):String(c[String(n.key)]??"")},String(n.key)))},r?r(c,s):l)})})]})})}function be({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],g=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(ye,{tone:t,children:e.status})}}],ke={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},h={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:g,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},x={render:()=>{const e=[...g,{key:"action",header:"Action",width:160,render:t=>a.jsx(pe,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:e,data:p,rowKey:t=>t.id})}},f={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:g,data:[],emptyContent:"No release items yet."})})},S={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{ariaLabel:"Release checklist table",columns:g,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=b(e);await d(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},T={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:g,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=b(e);await d(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}};function ve(){const[e,t]=I.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(u,{columns:g,data:p,defaultSortKey:"id",onSortChange:(r,i)=>t(`${r} ${i}`)})]})}const R={render:()=>a.jsx(ve,{}),play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("button",{name:"Issue sort descending"});await D.click(r),await d(t.getByText("id desc")).toBeInTheDocument();const v=t.getByRole("button",{name:"Issue sort ascending"}).closest("th");await d(v).toHaveAttribute("aria-sort","descending")}},k={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:g,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`})}),play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("button",{name:"按降序排序：Issue"});await D.click(r),await d(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument()}},B={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(u,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("columnheader",{name:"Component"}),i=t.getByRole("columnheader",{name:"Status"});await d(r).toHaveAttribute("aria-sort","none"),await d(i).toHaveAttribute("aria-sort","none"),await d(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await d(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},we=p.map(e=>({...e,note:""})),he=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],A={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(u,{columns:he,data:we,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("textbox",{name:"BTN-102 note"});await D.type(r,"persist me"),await D.click(t.getByRole("button",{name:"Component sort descending"})),await d(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}};var N,E,q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(q=(E=h.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var L,$,z;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=($=x.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var V,F,O;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(O=(F=f.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var W,_,G;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(_=S.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var P,U,M;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(U=T.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var Q,X,J;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(X=R.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={rows} defaultSortKey="id" getSortAriaLabel={({
      columnHeader,
      nextDirection
    }) => \`按\${nextDirection === "asc" ? "升序" : "降序"}排序：\${columnHeader}\`} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const descendingButton = canvas.getByRole("button", {
      name: "按降序排序：Issue"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "按升序排序：Issue"
    })).toBeInTheDocument();
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,se,oe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=A.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const Be=["ReleaseChecklist","WithRowAction","EmptyState","AccessibleNameWithoutCaption","AccessibleNameFallback","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability"];export{T as AccessibleNameFallback,S as AccessibleNameWithoutCaption,f as EmptyState,A as FallbackRowKeyStability,B as InvalidDefaultSortKeyFallback,k as LocalizedSortLabels,h as ReleaseChecklist,R as SortTelemetry,x as WithRowAction,Be as __namedExportsOrder,ke as default};
