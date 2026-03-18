import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as Ce}from"./Button-Hgh0jeno.js";import{r as L}from"./index-BWu4c2F4.js";import{B as Ne}from"./Badge-Dkm8CRgf.js";import{within as m,expect as a,userEvent as v}from"./index-DgAF9SIF.js";function qe(e,t,r){if(!t)return null;const c=e.find(x=>String(x.key)===t);return c!=null&&c.sortable?{key:t,direction:r}:null}function l({columns:e,data:t,rowKey:r,caption:c,ariaLabel:x,loading:N=!1,loadingContent:Ie="Loading data...",emptyContent:De="No data available.",defaultSortKey:Ae,defaultSortDirection:je="asc",getSortAriaLabel:He=$e,onSortChange:q}){const Ke=x??(c?void 0:"Data table"),[w,Ee]=L.useState(()=>qe(e,Ae,je)),$=L.useMemo(()=>{const s=t.map((u,o)=>({row:u,sourceIndex:o}));if(!w)return s;const i=e.find(u=>String(u.key)===w.key);if(!(i!=null&&i.sortable))return s;const d=i.sortAccessor??(u=>{const o=u[String(i.key)];return o instanceof Date||typeof o=="number"||typeof o=="string"?o:String(o??"")});return s.sort((u,o)=>{const y=d(u.row),g=d(o.row),h=y instanceof Date?y.getTime():y,f=g instanceof Date?g.getTime():g;return h<f?w.direction==="asc"?-1:1:h>f?w.direction==="asc"?1:-1:u.sourceIndex-o.sourceIndex})},[e,t,w]);return n.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:n.jsxs("table",{"aria-label":Ke,"aria-busy":N||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[c?n.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:c}):null,n.jsx("thead",{children:n.jsx("tr",{children:e.map(s=>{const i=String(s.key),d=(w==null?void 0:w.key)===i?w.direction:void 0,u=s.align??"left",o=typeof s.header=="string"?s.header:i,y=d==="asc"?"desc":"asc",g=He({columnKey:i,columnHeader:o,nextDirection:y}),h=N||$.length===0,f=()=>{h||(Ee({key:i,direction:y}),q==null||q(i,y))};return n.jsx("th",{scope:"col","aria-sort":d?d==="asc"?"ascending":"descending":"none",style:{textAlign:u,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:s.sortable?n.jsxs("button",{type:"button","aria-label":g,disabled:h,onClick:f,onKeyDown:z=>{Le(z.key)&&(z.preventDefault(),f())},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:h?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0,opacity:h?.64:1},children:[s.header,n.jsx("span",{"aria-hidden":"true",children:d==="asc"?"▲":d==="desc"?"▼":"↕"})]}):s.header},i)})})}),n.jsx("tbody",{children:N?n.jsx("tr",{children:n.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:n.jsx("span",{role:"status","aria-live":"polite",children:Ie})})}):$.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:De})}):$.map((s,i)=>{const d=s.row,u=String(s.sourceIndex);return n.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(o=>{const y=o.render?o.render(d,i,s.sourceIndex):String(d[String(o.key)]??""),g={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:o.align??"left"};return o.rowHeader?n.jsx("th",{scope:"row",style:{...g,fontWeight:"var(--aurora-font-weight-medium)"},children:y},String(o.key)):n.jsx("td",{style:g,children:y},String(o.key))})},r?r(d,s.sourceIndex):u)})})]})})}function $e({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function Le(e){return e===" "||e==="Spacebar"}l.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  rowHeader?: boolean;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],b=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return n.jsx(Ne,{tone:t,children:e.status})}}],Pe={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},S={render:()=>n.jsx("div",{style:{width:780,display:"grid",gap:10},children:n.jsx(l,{caption:"Release readiness board",columns:b,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},B={render:()=>{const e=[...b,{key:"action",header:"Action",width:160,render:t=>n.jsx(Ce,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return n.jsx(l,{columns:e,data:p,rowKey:t=>t.id})}},R={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(l,{columns:b,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=m(e);await a(t.getByText("No release items yet.")).toBeInTheDocument(),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},T={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(l,{columns:b,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("table",{name:"Data table"});await a(r).toHaveAttribute("aria-busy","true"),await a(t.getByText("Syncing release feed...")).toBeInTheDocument(),await a(t.queryByRole("cell",{name:"BTN-102"})).not.toBeInTheDocument(),await a(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},k={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(l,{ariaLabel:"Release checklist table",columns:b,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await a(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},I={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(l,{columns:b,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},D={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(l,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:p,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=m(e);await a(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function ze(){const[e,t]=L.useState("id asc");return n.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),n.jsx(l,{columns:b,data:p,defaultSortKey:"id",onSortChange:(r,c)=>t(`${r} ${c}`)})]})}const A={render:()=>n.jsx(ze,{}),play:async({canvasElement:e})=>{const t=m(e);t.getByRole("button",{name:"Issue sort descending"}).focus(),await v.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument();const c=t.getByRole("button",{name:"Issue sort ascending"}),x=c.closest("th");await a(x).toHaveAttribute("aria-sort","descending"),c.focus(),await v.keyboard("{Enter}"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(x).toHaveAttribute("aria-sort","ascending")}},j={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(l,{columns:b,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("button",{name:"按降序排序：Issue"});await v.click(r),await a(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument()}},H={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return n.jsx("div",{style:{width:620},children:n.jsx(l,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("columnheader",{name:"Component"}),c=t.getByRole("columnheader",{name:"Status"});await a(r).toHaveAttribute("aria-sort","none"),await a(c).toHaveAttribute("aria-sort","none"),await a(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},Te=p.map(e=>({...e,note:""})),ke=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>n.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],K={render:()=>n.jsx("div",{style:{width:720},children:n.jsx(l,{columns:ke,data:Te,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("textbox",{name:"BTN-102 note"});await v.type(r,"persist me"),await v.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},E={render:()=>n.jsx("div",{style:{width:720},children:n.jsx(l,{columns:ke,data:Te,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("textbox",{name:"BTN-102 note"});await v.type(r,"persist me"),await v.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ve=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],C={render:()=>n.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),n.jsx(l,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,r)=>`${e.key} (visual:${t}, source:${r})`},{key:"score",header:"Score",sortable:!0}],data:Ve,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=m(e);await v.click(t.getByRole("button",{name:"Score sort descending"})),await a(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var V,O,W;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(W=(O=S.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var F,G,_;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(_=(G=B.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var P,U,M;R.parameters={...R.parameters,docs:{...(P=R.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("button", {
      name: "Issue sort ascending"
    })).toBeDisabled();
  }
}`,...(M=(U=R.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var Q,X,J;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(X=T.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,oe,se;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,le;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <SortTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    issueSort.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    const issueSortAsc = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    const issueHeader = issueSortAsc.closest("th");
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    issueSortAsc.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
  }
}`,...(le=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,me;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,pe,we;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:we.source}}};var ge,ve,be;K.parameters={...K.parameters,docs:{...(ge=K.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var he,xe,fe;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Se,Be,Re;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};const Ue=["ReleaseChecklist","WithRowAction","EmptyState","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{I as AccessibleNameFallback,k as AccessibleNameWithoutCaption,R as EmptyState,K as FallbackRowKeyStability,H as InvalidDefaultSortKeyFallback,T as LoadingState,j as LocalizedSortLabels,S as ReleaseChecklist,C as RenderIndexSemantics,D as RowHeaderSemantics,A as SortTelemetry,E as SourceIndexRowKeyStability,B as WithRowAction,Ue as __namedExportsOrder,Pe as default};
