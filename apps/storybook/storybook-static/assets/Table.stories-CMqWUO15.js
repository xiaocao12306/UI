import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as je}from"./Button-Hgh0jeno.js";import{r as $}from"./index-BWu4c2F4.js";import{B as Ee}from"./Badge-Dkm8CRgf.js";import{within as m,expect as r,userEvent as g}from"./index-DgAF9SIF.js";function Ke(e,t,n){if(!t)return null;const c=e.find(x=>String(x.key)===t);return c!=null&&c.sortable?{key:t,direction:n}:null}function l({columns:e,data:t,rowKey:n,caption:c,ariaLabel:x,loading:C=!1,loadingContent:Be="Loading data...",emptyContent:Re="No data available.",defaultSortKey:Te,defaultSortDirection:ke="asc",getSortAriaLabel:Ie=Ne,onSortChange:H}){const De=x??(c?void 0:"Data table"),[y,Ae]=$.useState(()=>Ke(e,Te,ke)),q=$.useMemo(()=>{const o=t.map((u,s)=>({row:u,sourceIndex:s}));if(!y)return o;const i=e.find(u=>String(u.key)===y.key);if(!(i!=null&&i.sortable))return o;const d=i.sortAccessor??(u=>{const s=u[String(i.key)];return s instanceof Date||typeof s=="number"||typeof s=="string"?s:String(s??"")});return o.sort((u,s)=>{const w=d(u.row),h=d(s.row),b=w instanceof Date?w.getTime():w,f=h instanceof Date?h.getTime():h;return b<f?y.direction==="asc"?-1:1:b>f?y.direction==="asc"?1:-1:u.sourceIndex-s.sourceIndex})},[e,t,y]);return a.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:a.jsxs("table",{"aria-label":De,"aria-busy":C||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[c?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:c}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(o=>{const i=String(o.key),d=(y==null?void 0:y.key)===i?y.direction:void 0,u=o.align??"left",s=typeof o.header=="string"?o.header:i,w=d==="asc"?"desc":"asc",h=Ie({columnKey:i,columnHeader:s,nextDirection:w}),b=C||q.length===0,f=()=>{b||(Ae({key:i,direction:w}),H==null||H(i,w))};return a.jsx("th",{scope:"col","aria-sort":d?d==="asc"?"ascending":"descending":"none",style:{textAlign:u,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:o.width},children:o.sortable?a.jsxs("button",{type:"button","aria-label":h,disabled:b,onClick:f,onKeyDown:L=>{Ce(L.key)&&(L.preventDefault(),f())},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:b?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0,opacity:b?.64:1},children:[o.header,a.jsx("span",{"aria-hidden":"true",children:d==="asc"?"▲":d==="desc"?"▼":"↕"})]}):o.header},i)})})}),a.jsx("tbody",{children:C?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Be})})}):q.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:Re})}):q.map((o,i)=>{const d=o.row,u=String(o.sourceIndex);return a.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(s=>a.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:s.align??"left"},children:s.render?s.render(d,i,o.sourceIndex):String(d[String(s.key)]??"")},String(s.key)))},n?n(d,o.sourceIndex):u)})})]})})}function Ne({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function Ce(e){return e===" "||e==="Spacebar"}l.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],v=[{key:"id",header:"Issue",width:120,sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(Ee,{tone:t,children:e.status})}}],Ge={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},S={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(l,{caption:"Release readiness board",columns:v,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},B={render:()=>{const e=[...v,{key:"action",header:"Action",width:160,render:t=>a.jsx(je,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(l,{columns:e,data:p,rowKey:t=>t.id})}},R={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:v,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=m(e);await r(t.getByText("No release items yet.")).toBeInTheDocument(),await r(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},T={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:v,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("table",{name:"Data table"});await r(n).toHaveAttribute("aria-busy","true"),await r(t.getByText("Syncing release feed...")).toBeInTheDocument(),await r(t.queryByRole("cell",{name:"BTN-102"})).not.toBeInTheDocument(),await r(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},k={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{ariaLabel:"Release checklist table",columns:v,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await r(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},I={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:v,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await r(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}};function He(){const[e,t]=$.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(l,{columns:v,data:p,defaultSortKey:"id",onSortChange:(n,c)=>t(`${n} ${c}`)})]})}const D={render:()=>a.jsx(He,{}),play:async({canvasElement:e})=>{const t=m(e);t.getByRole("button",{name:"Issue sort descending"}).focus(),await g.keyboard("{Enter}"),await r(t.getByText("id desc")).toBeInTheDocument();const c=t.getByRole("button",{name:"Issue sort ascending"}),x=c.closest("th");await r(x).toHaveAttribute("aria-sort","descending"),c.focus(),await g.keyboard("{Enter}"),await r(t.getByText("id asc")).toBeInTheDocument(),await r(x).toHaveAttribute("aria-sort","ascending")}},A={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(l,{columns:v,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("button",{name:"按降序排序：Issue"});await g.click(n),await r(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument()}},j={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(l,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("columnheader",{name:"Component"}),c=t.getByRole("columnheader",{name:"Status"});await r(n).toHaveAttribute("aria-sort","none"),await r(c).toHaveAttribute("aria-sort","none"),await r(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await r(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},fe=p.map(e=>({...e,note:""})),Se=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],E={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(l,{columns:Se,data:fe,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await g.type(n,"persist me"),await g.click(t.getByRole("button",{name:"Component sort descending"})),await r(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},K={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(l,{columns:Se,data:fe,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await g.type(n,"persist me"),await g.click(t.getByRole("button",{name:"Component sort descending"})),await r(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},qe=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],N={render:()=>a.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(l,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,n)=>`${e.key} (visual:${t}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:qe,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=m(e);await g.click(t.getByRole("button",{name:"Score sort descending"})),await r(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await r(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var z,V,F;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(F=(V=S.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var G,O,W;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(W=(O=B.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var _,P,U;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(P=R.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var M,Q,X;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,Y,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,se;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=D.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ce;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ye,pe;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:pe.source}}};var ge,ve,we;K.parameters={...K.parameters,docs:{...(ge=K.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var be,xe,he;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};const Oe=["ReleaseChecklist","WithRowAction","EmptyState","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{I as AccessibleNameFallback,k as AccessibleNameWithoutCaption,R as EmptyState,E as FallbackRowKeyStability,j as InvalidDefaultSortKeyFallback,T as LoadingState,A as LocalizedSortLabels,S as ReleaseChecklist,N as RenderIndexSemantics,D as SortTelemetry,K as SourceIndexRowKeyStability,B as WithRowAction,Oe as __namedExportsOrder,Ge as default};
