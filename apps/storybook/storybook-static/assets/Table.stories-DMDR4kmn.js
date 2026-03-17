import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as he}from"./Button-Hgh0jeno.js";import{r as H}from"./index-BWu4c2F4.js";import{B as xe}from"./Badge-Dkm8CRgf.js";import{within as b,expect as i,userEvent as I}from"./index-DgAF9SIF.js";function fe(e,t,r){if(!t)return null;const c=e.find(w=>String(w.key)===t);return c!=null&&c.sortable?{key:t,direction:r}:null}function u({columns:e,data:t,rowKey:r,caption:c,ariaLabel:w,loading:v=!1,loadingContent:me="Loading data...",emptyContent:pe="No data available.",defaultSortKey:ye,defaultSortDirection:ge="asc",getSortAriaLabel:be=Se,onSortChange:C}){const ve=w??(c?void 0:"Data table"),[m,we]=H.useState(()=>fe(e,ye,ge)),N=H.useMemo(()=>{const o=t.map((d,n)=>({row:d,sourceIndex:n}));if(!m)return o;const s=e.find(d=>String(d.key)===m.key);if(!(s!=null&&s.sortable))return o;const l=s.sortAccessor??(d=>{const n=d[String(s.key)];return n instanceof Date||typeof n=="number"||typeof n=="string"?n:String(n??"")});return o.sort((d,n)=>{const g=l(d.row),h=l(n.row),K=g instanceof Date?g.getTime():g,q=h instanceof Date?h.getTime():h;return K<q?m.direction==="asc"?-1:1:K>q?m.direction==="asc"?1:-1:d.sourceIndex-n.sourceIndex})},[e,t,m]);return a.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:a.jsxs("table",{"aria-label":ve,"aria-busy":v||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[c?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:c}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(o=>{const s=String(o.key),l=(m==null?void 0:m.key)===s?m.direction:void 0,d=o.align??"left",n=typeof o.header=="string"?o.header:s,g=l==="asc"?"desc":"asc",h=be({columnKey:s,columnHeader:n,nextDirection:g});return a.jsx("th",{scope:"col","aria-sort":l?l==="asc"?"ascending":"descending":"none",style:{textAlign:d,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:o.width},children:o.sortable?a.jsxs("button",{type:"button","aria-label":h,disabled:v,onClick:()=>{v||(we({key:s,direction:g}),C==null||C(s,g))},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:v?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0,opacity:v?.64:1},children:[o.header,a.jsx("span",{"aria-hidden":"true",children:l==="asc"?"▲":l==="desc"?"▼":"↕"})]}):o.header},s)})})}),a.jsx("tbody",{children:v?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:me})})}):N.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:pe})}):N.map((o,s)=>{const l=o.row,d=String(o.sourceIndex);return a.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(n=>a.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:n.align??"left"},children:n.render?n.render(l,s):String(l[String(n.key)]??"")},String(n.key)))},r?r(l,s):d)})})]})})}function Se({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],y=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(xe,{tone:t,children:e.status})}}],Ce={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},x={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:y,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},f={render:()=>{const e=[...y,{key:"action",header:"Action",width:160,render:t=>a.jsx(he,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:e,data:p,rowKey:t=>t.id})}},S={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:y,data:[],emptyContent:"No release items yet."})})},T={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:y,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("table",{name:"Data table"});await i(r).toHaveAttribute("aria-busy","true"),await i(t.getByText("Syncing release feed...")).toBeInTheDocument(),await i(t.queryByRole("cell",{name:"BTN-102"})).not.toBeInTheDocument(),await i(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},R={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{ariaLabel:"Release checklist table",columns:y,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=b(e);await i(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},B={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:y,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=b(e);await i(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}};function Te(){const[e,t]=H.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(u,{columns:y,data:p,defaultSortKey:"id",onSortChange:(r,c)=>t(`${r} ${c}`)})]})}const k={render:()=>a.jsx(Te,{}),play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("button",{name:"Issue sort descending"});await I.click(r),await i(t.getByText("id desc")).toBeInTheDocument();const w=t.getByRole("button",{name:"Issue sort ascending"}).closest("th");await i(w).toHaveAttribute("aria-sort","descending")}},D={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:y,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`})}),play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("button",{name:"按降序排序：Issue"});await I.click(r),await i(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument()}},A={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(u,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("columnheader",{name:"Component"}),c=t.getByRole("columnheader",{name:"Status"});await i(r).toHaveAttribute("aria-sort","none"),await i(c).toHaveAttribute("aria-sort","none"),await i(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await i(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},Re=p.map(e=>({...e,note:""})),Be=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],j={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(u,{columns:Be,data:Re,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=b(e),r=t.getByRole("textbox",{name:"BTN-102 note"});await I.type(r,"persist me"),await I.click(t.getByRole("button",{name:"Component sort descending"})),await i(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}};var E,L,$;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...($=(L=x.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var z,V,F;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(V=f.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var O,W,_;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(_=(W=S.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var G,P,U;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    await expect(canvas.queryByRole("cell", {
      name: "BTN-102"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Issue sort descending"
    })).toBeDisabled();
  }
}`,...(U=(P=T.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var M,Q,X;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,Y,Z;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,se;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=D.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ce;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const He=["ReleaseChecklist","WithRowAction","EmptyState","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability"];export{B as AccessibleNameFallback,R as AccessibleNameWithoutCaption,S as EmptyState,j as FallbackRowKeyStability,A as InvalidDefaultSortKeyFallback,T as LoadingState,D as LocalizedSortLabels,x as ReleaseChecklist,k as SortTelemetry,f as WithRowAction,He as __namedExportsOrder,Ce as default};
