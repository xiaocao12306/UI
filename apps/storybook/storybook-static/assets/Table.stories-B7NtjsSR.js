import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as Ae}from"./Button-Hgh0jeno.js";import{r as q}from"./index-BWu4c2F4.js";import{B as je}from"./Badge-Dkm8CRgf.js";import{within as m,expect as s,userEvent as b}from"./index-DgAF9SIF.js";function Ke(e,t,a){if(!t)return null;const l=e.find(x=>String(x.key)===t);return l!=null&&l.sortable?{key:t,direction:a}:null}function c({columns:e,data:t,rowKey:a,caption:l,ariaLabel:x,loading:C=!1,loadingContent:Se="Loading data...",emptyContent:Be="No data available.",defaultSortKey:Re,defaultSortDirection:Te="asc",getSortAriaLabel:ke=Ne,onSortChange:E}){const Ie=x??(l?void 0:"Data table"),[y,De]=q.useState(()=>Ke(e,Re,Te)),H=q.useMemo(()=>{const o=t.map((u,r)=>({row:u,sourceIndex:r}));if(!y)return o;const i=e.find(u=>String(u.key)===y.key);if(!(i!=null&&i.sortable))return o;const d=i.sortAccessor??(u=>{const r=u[String(i.key)];return r instanceof Date||typeof r=="number"||typeof r=="string"?r:String(r??"")});return o.sort((u,r)=>{const v=d(u.row),h=d(r.row),w=v instanceof Date?v.getTime():v,$=h instanceof Date?h.getTime():h;return w<$?y.direction==="asc"?-1:1:w>$?y.direction==="asc"?1:-1:u.sourceIndex-r.sourceIndex})},[e,t,y]);return n.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:n.jsxs("table",{"aria-label":Ie,"aria-busy":C||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[l?n.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:l}):null,n.jsx("thead",{children:n.jsx("tr",{children:e.map(o=>{const i=String(o.key),d=(y==null?void 0:y.key)===i?y.direction:void 0,u=o.align??"left",r=typeof o.header=="string"?o.header:i,v=d==="asc"?"desc":"asc",h=ke({columnKey:i,columnHeader:r,nextDirection:v}),w=C||H.length===0;return n.jsx("th",{scope:"col","aria-sort":d?d==="asc"?"ascending":"descending":"none",style:{textAlign:u,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:o.width},children:o.sortable?n.jsxs("button",{type:"button","aria-label":h,disabled:w,onClick:()=>{w||(De({key:i,direction:v}),E==null||E(i,v))},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:w?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0,opacity:w?.64:1},children:[o.header,n.jsx("span",{"aria-hidden":"true",children:d==="asc"?"▲":d==="desc"?"▼":"↕"})]}):o.header},i)})})}),n.jsx("tbody",{children:C?n.jsx("tr",{children:n.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:n.jsx("span",{role:"status","aria-live":"polite",children:Se})})}):H.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:Be})}):H.map((o,i)=>{const d=o.row,u=String(o.sourceIndex);return n.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(r=>n.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:r.align??"left"},children:r.render?r.render(d,i,o.sourceIndex):String(d[String(r.key)]??"")},String(r.key)))},a?a(d,o.sourceIndex):u)})})]})})}function Ne({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}c.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],g=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return n.jsx(je,{tone:t,children:e.status})}}],Ve={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},f={render:()=>n.jsx("div",{style:{width:780,display:"grid",gap:10},children:n.jsx(c,{caption:"Release readiness board",columns:g,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},S={render:()=>{const e=[...g,{key:"action",header:"Action",width:160,render:t=>n.jsx(Ae,{size:"sm",variant:"outline",onClick:a=>a.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return n.jsx(c,{columns:e,data:p,rowKey:t=>t.id})}},B={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(c,{columns:g,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=m(e);await s(t.getByText("No release items yet.")).toBeInTheDocument(),await s(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},R={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(c,{columns:g,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("table",{name:"Data table"});await s(a).toHaveAttribute("aria-busy","true"),await s(t.getByText("Syncing release feed...")).toBeInTheDocument(),await s(t.queryByRole("cell",{name:"BTN-102"})).not.toBeInTheDocument(),await s(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},T={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(c,{ariaLabel:"Release checklist table",columns:g,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await s(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},k={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(c,{columns:g,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await s(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}};function Ce(){const[e,t]=q.useState("id asc");return n.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),n.jsx(c,{columns:g,data:p,defaultSortKey:"id",onSortChange:(a,l)=>t(`${a} ${l}`)})]})}const I={render:()=>n.jsx(Ce,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("button",{name:"Issue sort descending"});await b.click(a),await s(t.getByText("id desc")).toBeInTheDocument();const x=t.getByRole("button",{name:"Issue sort ascending"}).closest("th");await s(x).toHaveAttribute("aria-sort","descending")}},D={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(c,{columns:g,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`})}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("button",{name:"按降序排序：Issue"});await b.click(a),await s(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument()}},A={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return n.jsx("div",{style:{width:620},children:n.jsx(c,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("columnheader",{name:"Component"}),l=t.getByRole("columnheader",{name:"Status"});await s(a).toHaveAttribute("aria-sort","none"),await s(l).toHaveAttribute("aria-sort","none"),await s(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await s(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},he=p.map(e=>({...e,note:""})),fe=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>n.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],j={render:()=>n.jsx("div",{style:{width:720},children:n.jsx(c,{columns:fe,data:he,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("textbox",{name:"BTN-102 note"});await b.type(a,"persist me"),await b.click(t.getByRole("button",{name:"Component sort descending"})),await s(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},K={render:()=>n.jsx("div",{style:{width:720},children:n.jsx(c,{columns:fe,data:he,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("textbox",{name:"BTN-102 note"});await b.type(a,"persist me"),await b.click(t.getByRole("button",{name:"Component sort descending"})),await s(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ee=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],N={render:()=>n.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),n.jsx(c,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,a)=>`${e.key} (visual:${t}, source:${a})`},{key:"score",header:"Score",sortable:!0}],data:Ee,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=m(e);await b.click(t.getByRole("button",{name:"Score sort descending"})),await s(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await s(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var L,z,V;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(V=(z=f.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var F,G,O;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(G=S.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var W,_,P;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(_=B.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var U,M,Q;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(M=R.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,J,Y;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,oe,ie;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,de;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=A.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,ye;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var pe,ge,ve;K.parameters={...K.parameters,docs:{...(pe=K.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=(ge=K.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var we,be,xe;N.parameters={...N.parameters,docs:{...(we=N.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(xe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};const Fe=["ReleaseChecklist","WithRowAction","EmptyState","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{k as AccessibleNameFallback,T as AccessibleNameWithoutCaption,B as EmptyState,j as FallbackRowKeyStability,A as InvalidDefaultSortKeyFallback,R as LoadingState,D as LocalizedSortLabels,f as ReleaseChecklist,N as RenderIndexSemantics,I as SortTelemetry,K as SourceIndexRowKeyStability,S as WithRowAction,Fe as __namedExportsOrder,Ve as default};
