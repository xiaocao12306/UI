import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Be}from"./Button-Hgh0jeno.js";import{r as N}from"./index-BWu4c2F4.js";import{B as ke}from"./Badge-Dkm8CRgf.js";import{within as y,expect as i,userEvent as w}from"./index-DgAF9SIF.js";function Ie(e,t,n){if(!t)return null;const c=e.find(h=>String(h.key)===t);return c!=null&&c.sortable?{key:t,direction:n}:null}function u({columns:e,data:t,rowKey:n,caption:c,ariaLabel:h,loading:b=!1,loadingContent:we="Loading data...",emptyContent:he="No data available.",defaultSortKey:xe,defaultSortDirection:fe="asc",getSortAriaLabel:Se=De,onSortChange:K}){const Re=h??(c?void 0:"Data table"),[m,Te]=N.useState(()=>Ie(e,xe,fe)),H=N.useMemo(()=>{const s=t.map((d,r)=>({row:d,sourceIndex:r}));if(!m)return s;const o=e.find(d=>String(d.key)===m.key);if(!(o!=null&&o.sortable))return s;const l=o.sortAccessor??(d=>{const r=d[String(o.key)];return r instanceof Date||typeof r=="number"||typeof r=="string"?r:String(r??"")});return s.sort((d,r)=>{const v=l(d.row),x=l(r.row),E=v instanceof Date?v.getTime():v,q=x instanceof Date?x.getTime():x;return E<q?m.direction==="asc"?-1:1:E>q?m.direction==="asc"?1:-1:d.sourceIndex-r.sourceIndex})},[e,t,m]);return a.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:a.jsxs("table",{"aria-label":Re,"aria-busy":b||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[c?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:c}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(s=>{const o=String(s.key),l=(m==null?void 0:m.key)===o?m.direction:void 0,d=s.align??"left",r=typeof s.header=="string"?s.header:o,v=l==="asc"?"desc":"asc",x=Se({columnKey:o,columnHeader:r,nextDirection:v});return a.jsx("th",{scope:"col","aria-sort":l?l==="asc"?"ascending":"descending":"none",style:{textAlign:d,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:s.sortable?a.jsxs("button",{type:"button","aria-label":x,disabled:b,onClick:()=>{b||(Te({key:o,direction:v}),K==null||K(o,v))},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:b?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0,opacity:b?.64:1},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:l==="asc"?"▲":l==="desc"?"▼":"↕"})]}):s.header},o)})})}),a.jsx("tbody",{children:b?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:we})})}):H.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:he})}):H.map((s,o)=>{const l=s.row,d=String(s.sourceIndex);return a.jsx("tr",{style:{background:o%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(r=>a.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:r.align??"left"},children:r.render?r.render(l,o):String(l[String(r.key)]??"")},String(r.key)))},n?n(l,s.sourceIndex):d)})})]})})}function De({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],g=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(ke,{tone:t,children:e.status})}}],Ee={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},f={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:g,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},S={render:()=>{const e=[...g,{key:"action",header:"Action",width:160,render:t=>a.jsx(Be,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:e,data:p,rowKey:t=>t.id})}},R={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:g,data:[],emptyContent:"No release items yet."})})},T={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:g,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("table",{name:"Data table"});await i(n).toHaveAttribute("aria-busy","true"),await i(t.getByText("Syncing release feed...")).toBeInTheDocument(),await i(t.queryByRole("cell",{name:"BTN-102"})).not.toBeInTheDocument(),await i(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},B={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{ariaLabel:"Release checklist table",columns:g,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await i(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},k={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:g,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await i(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}};function Ae(){const[e,t]=N.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(u,{columns:g,data:p,defaultSortKey:"id",onSortChange:(n,c)=>t(`${n} ${c}`)})]})}const I={render:()=>a.jsx(Ae,{}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Issue sort descending"});await w.click(n),await i(t.getByText("id desc")).toBeInTheDocument();const h=t.getByRole("button",{name:"Issue sort ascending"}).closest("th");await i(h).toHaveAttribute("aria-sort","descending")}},D={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(u,{columns:g,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"按降序排序：Issue"});await w.click(n),await i(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument()}},A={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(u,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("columnheader",{name:"Component"}),c=t.getByRole("columnheader",{name:"Status"});await i(n).toHaveAttribute("aria-sort","none"),await i(c).toHaveAttribute("aria-sort","none"),await i(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await i(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},ve=p.map(e=>({...e,note:""})),be=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],j={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(u,{columns:be,data:ve,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await w.type(n,"persist me"),await w.click(t.getByRole("button",{name:"Component sort descending"})),await i(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},C={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(u,{columns:be,data:ve,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await w.type(n,"persist me"),await w.click(t.getByRole("button",{name:"Component sort descending"})),await i(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}};var L,$,z;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(z=($=f.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var V,F,O;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(F=S.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var W,_,G;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
}`,...(G=(_=R.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var P,U,M;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(U=T.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var Q,X,J;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(X=B.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,se,oe;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=D.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,le;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,me;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ye,ge;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};const qe=["ReleaseChecklist","WithRowAction","EmptyState","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability"];export{k as AccessibleNameFallback,B as AccessibleNameWithoutCaption,R as EmptyState,j as FallbackRowKeyStability,A as InvalidDefaultSortKeyFallback,T as LoadingState,D as LocalizedSortLabels,f as ReleaseChecklist,I as SortTelemetry,C as SourceIndexRowKeyStability,S as WithRowAction,qe as __namedExportsOrder,Ee as default};
