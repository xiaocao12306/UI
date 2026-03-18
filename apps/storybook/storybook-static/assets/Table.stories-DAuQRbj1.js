import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as qe}from"./Button-BCHo91JE.js";import{r as z}from"./index-BWu4c2F4.js";import{B as $e}from"./Badge-Dkm8CRgf.js";import{within as m,expect as n,userEvent as v}from"./index-DgAF9SIF.js";function Le(e,t,r){if(!t)return null;const c=e.find(h=>String(h.key)===t);return c!=null&&c.sortable?{key:t,direction:r}:null}function l({columns:e,data:t,rowKey:r,caption:c,ariaLabel:h,loading:q=!1,loadingContent:je="Loading data...",emptyContent:Ae="No data available.",defaultSortKey:He,defaultSortDirection:Ke="asc",getSortAriaLabel:Ee=ze,onSortChange:$}){const Ce=h??(c?void 0:"Data table"),[p,Ne]=z.useState(()=>Le(e,He,Ke)),L=z.useMemo(()=>{const s=t.map((d,o)=>({row:d,sourceIndex:o}));if(!p)return s;const i=e.find(d=>String(d.key)===p.key);if(!(i!=null&&i.sortable))return s;const u=i.sortAccessor??(d=>{const o=d[String(i.key)];return o instanceof Date||typeof o=="number"||typeof o=="string"?o:String(o??"")});return s.sort((d,o)=>{const w=u(d.row),g=u(o.row),x=w instanceof Date?w.getTime():w,f=g instanceof Date?g.getTime():g;return x<f?p.direction==="asc"?-1:1:x>f?p.direction==="asc"?1:-1:d.sourceIndex-o.sourceIndex})},[e,t,p]);return a.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:a.jsxs("table",{"aria-label":Ce,"aria-busy":q||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[c?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:c}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(s=>{const i=String(s.key),u=(p==null?void 0:p.key)===i?p.direction:void 0,d=!!s.sortable,o=d?u?u==="asc"?"ascending":"descending":"none":void 0,w=s.align??"left",g=typeof s.header=="string"?s.header:i,x=u==="asc"?"desc":"asc",f=Ee({columnKey:i,columnHeader:g,nextDirection:x}),S=q||L.length===0,V=()=>{S||(Ne({key:i,direction:x}),$==null||$(i,x))};return a.jsx("th",{scope:"col","aria-sort":o,style:{textAlign:w,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:d?a.jsxs("button",{type:"button","aria-label":f,disabled:S,onClick:V,onKeyDown:O=>{Ve(O.key)&&(O.preventDefault(),V())},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:S?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0,opacity:S?.64:1},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:u==="asc"?"▲":u==="desc"?"▼":"↕"})]}):s.header},i)})})}),a.jsx("tbody",{children:q?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:je})})}):L.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Ae})})}):L.map((s,i)=>{const u=s.row,d=String(s.sourceIndex);return a.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(o=>{const w=o.render?o.render(u,i,s.sourceIndex):String(u[String(o.key)]??""),g={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:o.align??"left"};return o.rowHeader?a.jsx("th",{scope:"row",style:{...g,fontWeight:"var(--aurora-font-weight-medium)"},children:w},String(o.key)):a.jsx("td",{style:g,children:w},String(o.key))})},r?r(u,s.sourceIndex):d)})})]})})}function ze({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function Ve(e){return e===" "||e==="Spacebar"}l.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const y=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],b=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx($e,{tone:t,children:e.status})}}],Me={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},B={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(l,{caption:"Release readiness board",columns:b,data:y,rowKey:e=>e.id,defaultSortKey:"id"})})},R={render:()=>{const e=[...b,{key:"action",header:"Action",width:160,render:t=>a.jsx(qe,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(l,{columns:e,data:y,rowKey:t=>t.id})}},T={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:b,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByText("No release items yet.")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("No release items yet."),await n(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},k={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:b,data:y,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("table",{name:"Data table"});await n(r).toHaveAttribute("aria-busy","true"),await n(t.getByText("Syncing release feed...")).toBeInTheDocument(),await n(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},I={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{ariaLabel:"Release checklist table",columns:b,data:y,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},D={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:b,data:y,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},j={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:y,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Oe(){const[e,t]=z.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(l,{columns:b,data:y,defaultSortKey:"id",onSortChange:(r,c)=>t(`${r} ${c}`)})]})}const A={render:()=>a.jsx(Oe,{}),play:async({canvasElement:e})=>{const t=m(e);t.getByRole("button",{name:"Issue sort descending"}).focus(),await v.keyboard("{Enter}"),await n(t.getByText("id desc")).toBeInTheDocument();const c=t.getByRole("button",{name:"Issue sort ascending"}),h=c.closest("th");await n(h).toHaveAttribute("aria-sort","descending"),c.focus(),await v.keyboard("{Enter}"),await n(t.getByText("id asc")).toBeInTheDocument(),await n(h).toHaveAttribute("aria-sort","ascending")}},H={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:b,data:y,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("button",{name:"按降序排序：Issue"});await v.click(r),await n(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument()}},K={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(l,{columns:e,data:y,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("columnheader",{name:"Component"}),c=t.getByRole("columnheader",{name:"Status"});await n(r).toHaveAttribute("aria-sort","none"),await n(c).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},Ie=y.map(e=>({...e,note:""})),De=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],E={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(l,{columns:De,data:Ie,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("textbox",{name:"BTN-102 note"});await v.type(r,"persist me"),await v.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},C={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(l,{columns:De,data:Ie,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("textbox",{name:"BTN-102 note"});await v.type(r,"persist me"),await v.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},We=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],N={render:()=>a.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(l,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,r)=>`${e.key} (visual:${t}, source:${r})`},{key:"score",header:"Score",sortable:!0}],data:We,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=m(e);await v.click(t.getByRole("button",{name:"Score sort descending"})),await n(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var W,F,G;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(G=(F=B.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var _,P,U;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(P=R.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var M,Q,X;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("status")).toHaveTextContent("No release items yet.");
    await expect(canvas.getByRole("button", {
      name: "Issue sort ascending"
    })).toBeDisabled();
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,Y,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    await expect(canvas.queryByRole("rowheader", {
      name: "BTN-102"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Issue sort descending"
    })).toBeDisabled();
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,oe;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=D.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ye,pe;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:pe.source}}};var we,ge,ve;K.parameters={...K.parameters,docs:{...(we=K.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
    await expect(statusHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.queryByRole("button", {
      name: /Status sort/
    })).not.toBeInTheDocument();
    await expect(canvas.getAllByRole("cell")[0]).toHaveTextContent("Button");
  }
}`,...(ve=(ge=K.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,he,xe;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(he=E.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,Se,Be;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Be=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Re,Te,ke;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(ke=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};const Qe=["ReleaseChecklist","WithRowAction","EmptyState","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{D as AccessibleNameFallback,I as AccessibleNameWithoutCaption,T as EmptyState,E as FallbackRowKeyStability,K as InvalidDefaultSortKeyFallback,k as LoadingState,H as LocalizedSortLabels,B as ReleaseChecklist,N as RenderIndexSemantics,j as RowHeaderSemantics,A as SortTelemetry,C as SourceIndexRowKeyStability,R as WithRowAction,Qe as __namedExportsOrder,Me as default};
