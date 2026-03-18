import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as Le}from"./Button-BCHo91JE.js";import{r as q}from"./index-BWu4c2F4.js";import{B as Ve}from"./Badge-Dkm8CRgf.js";import{within as y,expect as a,userEvent as v}from"./index-DgAF9SIF.js";function ze(e,t,o){if(!t)return null;const c=e.find(x=>String(x.key)===t);return c!=null&&c.sortable?{key:t,direction:o}:null}function u({columns:e,data:t,rowKey:o,caption:c,ariaLabel:x,loading:$=!1,loadingContent:Ae="Loading data...",emptyContent:Ke="No data available.",defaultSortKey:Ce,defaultSortDirection:Ee="asc",getSortAriaLabel:Ne=Ge,getSortStatusText:z=Oe,onSortChange:L}){const qe=x??(c?void 0:"Data table"),[l,$e]=q.useState(()=>ze(e,Ce,Ee)),V=q.useMemo(()=>{const r=t.map((m,s)=>({row:m,sourceIndex:s}));if(!l)return r;const i=e.find(m=>String(m.key)===l.key);if(!(i!=null&&i.sortable))return r;const d=i.sortAccessor??(m=>{const s=m[String(i.key)];return s instanceof Date||typeof s=="number"||typeof s=="string"?s:String(s??"")});return r.sort((m,s)=>{const g=d(m.row),w=d(s.row),h=g instanceof Date?g.getTime():g,f=w instanceof Date?w.getTime():w;return h<f?l.direction==="asc"?-1:1:h>f?l.direction==="asc"?1:-1:m.sourceIndex-s.sourceIndex})},[e,t,l]),G=q.useMemo(()=>{if(!l)return"";const r=e.find(d=>String(d.key)===l.key);if(!(r!=null&&r.sortable))return"";const i=typeof r.header=="string"?r.header:String(r.key);return z({columnKey:l.key,columnHeader:i,direction:l.direction})},[e,z,l]);return n.jsxs("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[G?n.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:G}):null,n.jsxs("table",{"aria-label":qe,"aria-busy":$||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[c?n.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:c}):null,n.jsx("thead",{children:n.jsx("tr",{children:e.map(r=>{const i=String(r.key),d=(l==null?void 0:l.key)===i?l.direction:void 0,m=!!r.sortable,s=d?d==="asc"?"ascending":"descending":void 0,g=r.align??"left",w=typeof r.header=="string"?r.header:i,h=d==="asc"?"desc":"asc",f=Ne({columnKey:i,columnHeader:w,nextDirection:h}),S=$||V.length===0,O=()=>{S||($e({key:i,direction:h}),L==null||L(i,h))};return n.jsx("th",{scope:"col","aria-sort":s,style:{textAlign:g,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:r.width},children:m?n.jsxs("button",{type:"button","aria-label":f,disabled:S,onClick:O,onKeyDown:W=>{We(W.key)&&(W.preventDefault(),O())},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:S?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0,opacity:S?.64:1},children:[r.header,n.jsx("span",{"aria-hidden":"true",children:d==="asc"?"▲":d==="desc"?"▼":"↕"})]}):r.header},i)})})}),n.jsx("tbody",{children:$?n.jsx("tr",{children:n.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:n.jsx("span",{role:"status","aria-live":"polite",children:Ae})})}):V.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:n.jsx("span",{role:"status","aria-live":"polite",children:Ke})})}):V.map((r,i)=>{const d=r.row,m=String(r.sourceIndex);return n.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(s=>{const g=s.render?s.render(d,i,r.sourceIndex):String(d[String(s.key)]??""),w={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:s.align??"left"};return s.rowHeader?n.jsx("th",{scope:"row",style:{...w,fontWeight:"var(--aurora-font-weight-medium)"},children:g},String(s.key)):n.jsx("td",{style:w,children:g},String(s.key))})},o?o(d,r.sourceIndex):m)})})]})]})}function Ge({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function Oe({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function We(e){return e===" "||e==="Spacebar"}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},getSortStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}) => string`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}`,signature:{properties:[{key:"columnKey",value:{name:"string",required:!0}},{key:"columnHeader",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}},name:"params"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetSortStatusText({
  columnHeader,
  direction
}: {
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}) {
  return \`Sorted by \${columnHeader} \${direction === "asc" ? "ascending" : "descending"}.\`;
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],b=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return n.jsx(Ve,{tone:t,children:e.status})}}],Je={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},B={render:()=>n.jsx("div",{style:{width:780,display:"grid",gap:10},children:n.jsx(u,{caption:"Release readiness board",columns:b,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},T={render:()=>{const e=[...b,{key:"action",header:"Action",width:160,render:t=>n.jsx(Le,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return n.jsx(u,{columns:e,data:p,rowKey:t=>t.id})}},R={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(u,{columns:b,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByText("No release items yet.")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("No release items yet."),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},k={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(u,{columns:b,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("table",{name:"Data table"});await a(o).toHaveAttribute("aria-busy","true"),await a(t.getByText("Syncing release feed...")).toBeInTheDocument(),await a(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},I={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(u,{ariaLabel:"Release checklist table",columns:b,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},D={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(u,{columns:b,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},H={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:p,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Fe(){const[e,t]=q.useState("id asc");return n.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),n.jsx(u,{columns:b,data:p,defaultSortKey:"id",onSortChange:(o,c)=>t(`${o} ${c}`)})]})}const j={render:()=>n.jsx(Fe,{}),play:async({canvasElement:e})=>{const t=y(e);t.getByRole("button",{name:"Issue sort descending"}).focus(),await v.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const c=t.getByRole("button",{name:"Issue sort ascending"}),x=c.closest("th");await a(x).toHaveAttribute("aria-sort","descending"),c.focus(),await v.keyboard("{Enter}"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(x).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},A={render:()=>n.jsx("div",{style:{width:780},children:n.jsx(u,{columns:b,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"按降序排序：Issue"});await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await v.click(o),await a(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},K={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return n.jsx("div",{style:{width:620},children:n.jsx(u,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("columnheader",{name:"Component"}),c=t.getByRole("columnheader",{name:"Status"});await a(o).not.toHaveAttribute("aria-sort"),await a(c).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},He=p.map(e=>({...e,note:""})),je=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>n.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],C={render:()=>n.jsx("div",{style:{width:720},children:n.jsx(u,{columns:je,data:He,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await v.type(o,"persist me"),await v.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},E={render:()=>n.jsx("div",{style:{width:720},children:n.jsx(u,{columns:je,data:He,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await v.type(o,"persist me"),await v.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},_e=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],N={render:()=>n.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),n.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,o)=>`${e.key} (visual:${t}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:_e,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=y(e);await v.click(t.getByRole("button",{name:"Score sort descending"})),await a(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var F,_,P;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(P=(_=B.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var M,U,Q;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Q=(U=T.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var X,J,Y;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(J=R.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,se,ie;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,le,de;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=H.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,ye;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");
    const issueSortAsc = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    const issueHeader = issueSortAsc.closest("th");
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    issueSortAsc.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
  }
}`,...(ye=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var pe,ge,we;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={rows} defaultSortKey="id" getSortAriaLabel={({
      columnHeader,
      nextDirection
    }) => \`按\${nextDirection === "asc" ? "升序" : "降序"}排序：\${columnHeader}\`} getSortStatusText={({
      columnHeader,
      direction
    }) => \`当前排序：\${columnHeader}（\${direction === "asc" ? "升序" : "降序"}）\`} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const descendingButton = canvas.getByRole("button", {
      name: "按降序排序：Issue"
    });
    await expect(canvas.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）");
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "按升序排序：Issue"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）");
  }
}`,...(we=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var ve,be,xe;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
    await expect(componentHeader).not.toHaveAttribute("aria-sort");
    await expect(statusHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.queryByRole("button", {
      name: /Status sort/
    })).not.toBeInTheDocument();
    await expect(canvas.getAllByRole("cell")[0]).toHaveTextContent("Button");
  }
}`,...(xe=(be=K.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var he,fe,Se;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Be,Te,Re;E.parameters={...E.parameters,docs:{...(Be=E.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Re=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var ke,Ie,De;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};const Ye=["ReleaseChecklist","WithRowAction","EmptyState","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{D as AccessibleNameFallback,I as AccessibleNameWithoutCaption,R as EmptyState,C as FallbackRowKeyStability,K as InvalidDefaultSortKeyFallback,k as LoadingState,A as LocalizedSortLabels,B as ReleaseChecklist,N as RenderIndexSemantics,H as RowHeaderSemantics,j as SortTelemetry,E as SourceIndexRowKeyStability,T as WithRowAction,Ye as __namedExportsOrder,Je as default};
