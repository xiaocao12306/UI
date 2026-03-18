import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Me}from"./Button-BCHo91JE.js";import{r as L}from"./index-BWu4c2F4.js";import{B as Ue}from"./Badge-Dkm8CRgf.js";import{within as m,expect as n,userEvent as v}from"./index-DgAF9SIF.js";function Qe(e,t,r){if(!t)return null;const l=e.find(h=>String(h.key)===t);return l!=null&&l.sortable?{key:t,direction:r}:null}function c({columns:e,data:t,rowKey:r,caption:l,ariaLabel:h,ariaLabelledBy:G,loading:V=!1,loadingContent:ze="Loading data...",emptyContent:Fe="No data available.",defaultSortKey:Ge,defaultSortDirection:Oe="asc",getSortAriaLabel:We=Xe,getSortStatusText:O=Je,onSortChange:z}){const _e=G?void 0:h??(l?void 0:"Data table"),[d,Pe]=L.useState(()=>Qe(e,Ge,Oe)),F=L.useMemo(()=>{const s=t.map((y,o)=>({row:y,sourceIndex:o}));if(!d)return s;const i=e.find(y=>String(y.key)===d.key);if(!(i!=null&&i.sortable))return s;const u=i.sortAccessor??(y=>{const o=y[String(i.key)];return o instanceof Date||typeof o=="number"||typeof o=="string"?o:String(o??"")});return s.sort((y,o)=>{const w=u(y.row),b=u(o.row),x=w instanceof Date?w.getTime():w,f=b instanceof Date?b.getTime():b;return x<f?d.direction==="asc"?-1:1:x>f?d.direction==="asc"?1:-1:y.sourceIndex-o.sourceIndex})},[e,t,d]),W=L.useMemo(()=>{if(!d)return"";const s=e.find(u=>String(u.key)===d.key);if(!(s!=null&&s.sortable))return"";const i=typeof s.header=="string"?s.header:String(s.key);return O({columnKey:d.key,columnHeader:i,direction:d.direction})},[e,O,d]);return a.jsxs("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[W?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:W}):null,a.jsxs("table",{"aria-label":_e,"aria-labelledby":G,"aria-busy":V||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[l?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:l}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(s=>{const i=String(s.key),u=(d==null?void 0:d.key)===i?d.direction:void 0,y=!!s.sortable,o=u?u==="asc"?"ascending":"descending":void 0,w=s.align??"left",b=typeof s.header=="string"?s.header:i,x=u==="asc"?"desc":"asc",f=We({columnKey:i,columnHeader:b,nextDirection:x}),S=V||F.length<=1,_=()=>{S||(Pe({key:i,direction:x}),z==null||z(i,x))};return a.jsx("th",{scope:"col","aria-sort":o,style:{textAlign:w,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:y?a.jsxs("button",{type:"button","aria-label":f,disabled:S,onClick:_,onKeyDown:P=>{Ye(P.key)&&(P.preventDefault(),_())},style:{border:0,background:"transparent",color:"inherit",font:"inherit",cursor:S?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:0,opacity:S?.64:1},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:u==="asc"?"▲":u==="desc"?"▼":"↕"})]}):s.header},i)})})}),a.jsx("tbody",{children:V?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:ze})})}):F.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:e.length,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Fe})})}):F.map((s,i)=>{const u=s.row,y=String(s.sourceIndex);return a.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(o=>{const w=o.render?o.render(u,i,s.sourceIndex):String(u[String(o.key)]??""),b={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:o.align??"left"};return o.rowHeader?a.jsx("th",{scope:"row",style:{...b,fontWeight:"var(--aurora-font-weight-medium)"},children:w},String(o.key)):a.jsx("td",{style:b,children:w},String(o.key))})},r?r(u,s.sourceIndex):y)})})]})]})}function Xe({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function Je({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function Ye(e){return e===" "||e==="Space"||e==="Spacebar"}c.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  rowHeader?: boolean;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],g=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(Ue,{tone:t,children:e.status})}}],ot={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},B={render:()=>a.jsx("div",{style:{width:780,display:"grid",gap:10},children:a.jsx(c,{caption:"Release readiness board",columns:g,data:p,rowKey:e=>e.id,defaultSortKey:"id"})})},T={render:()=>{const e=[...g,{key:"action",header:"Action",width:160,render:t=>a.jsx(Me,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(c,{columns:e,data:p,rowKey:t=>t.id})}},R={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(c,{columns:g,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByText("No release items yet.")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("No release items yet."),await n(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},k={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(c,{columns:g,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}]})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByRole("button",{name:"Issue sort ascending"})).toBeDisabled()}},I={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(c,{columns:g,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("table",{name:"Data table"});await n(r).toHaveAttribute("aria-busy","true"),await n(t.getByText("Syncing release feed...")).toBeInTheDocument(),await n(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},D={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(c,{ariaLabel:"Release checklist table",columns:g,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},H={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(c,{columns:g,data:p,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},j={render:()=>a.jsxs("div",{style:{width:780,display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(c,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:g,data:p,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const r=m(e).getByRole("table",{name:"Release board metrics"});await n(r).toHaveAttribute("aria-labelledby","release-board-heading"),await n(r).not.toHaveAttribute("aria-label")}},A={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(c,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:p,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=m(e);await n(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Ze(){const[e,t]=L.useState("id asc");return a.jsxs("div",{style:{width:780,display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(c,{columns:g,data:p,defaultSortKey:"id",onSortChange:(r,l)=>t(`${r} ${l}`)})]})}const K={render:()=>a.jsx(Ze,{}),play:async({canvasElement:e})=>{const t=m(e);t.getByRole("button",{name:"Issue sort descending"}).focus(),await v.keyboard("{Enter}"),await n(t.getByText("id desc")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const l=t.getByRole("button",{name:"Issue sort ascending"}),h=l.closest("th");await n(h).toHaveAttribute("aria-sort","descending"),l.focus(),await v.keyboard("{Space}"),await n(t.getByText("id asc")).toBeInTheDocument(),await n(h).toHaveAttribute("aria-sort","ascending"),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},C={render:()=>a.jsx("div",{style:{width:780},children:a.jsx(c,{columns:g,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("button",{name:"按降序排序：Issue"});await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await v.click(r),await n(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},E={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:620},children:a.jsx(c,{columns:e,data:p,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("columnheader",{name:"Component"}),l=t.getByRole("columnheader",{name:"Status"});await n(r).not.toHaveAttribute("aria-sort"),await n(l).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},Le=p.map(e=>({...e,note:""})),Ve=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],N={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(c,{columns:Ve,data:Le,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("textbox",{name:"BTN-102 note"});await v.type(r,"persist me"),await v.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},q={render:()=>a.jsx("div",{style:{width:720},children:a.jsx(c,{columns:Ve,data:Le,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=m(e),r=t.getByRole("textbox",{name:"BTN-102 note"});await v.type(r,"persist me"),await v.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},et=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],$={render:()=>a.jsxs("div",{style:{width:720,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(c,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,r)=>`${e.key} (visual:${t}, source:${r})`},{key:"score",header:"Score",sortable:!0}],data:et,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=m(e);await v.click(t.getByRole("button",{name:"Score sort descending"})),await n(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var M,U,Q;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(Q=(U=B.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var X,J,Y;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,ee,te;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780
  }}>
      <Table columns={columns} data={[{
      id: "BTN-102",
      component: "Button",
      owner: "Design System",
      status: "ready"
    }]} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", {
      name: "Issue sort ascending"
    })).toBeDisabled();
  }
}`,...(re=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,oe,ie;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,de;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=D.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,ye;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(me=H.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var pe,ge,we;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <h3 id="release-board-heading" style={{
      margin: 0
    }}>
        Release board metrics
      </h3>
      <Table ariaLabelledBy="release-board-heading" ariaLabel="Fallback table label" columns={columns} data={rows} rowKey={row => row.id} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Release board metrics"
    });
    await expect(table).toHaveAttribute("aria-labelledby", "release-board-heading");
    await expect(table).not.toHaveAttribute("aria-label");
  }
}`,...(we=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var be,ve,he;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var xe,fe,Se;K.parameters={...K.parameters,docs:{...(xe=K.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
    await userEvent.keyboard("{Space}");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
  }
}`,...(Se=(fe=K.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Be,Te,Re;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Re=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var ke,Ie,De;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var He,je,Ae;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ae=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var Ke,Ce,Ee;q.parameters={...q.parameters,docs:{...(Ke=q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ee=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var Ne,qe,$e;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...($e=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};const it=["ReleaseChecklist","WithRowAction","EmptyState","SingleRowSortDisabled","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{H as AccessibleNameFallback,j as AccessibleNameLabelledByHeading,D as AccessibleNameWithoutCaption,R as EmptyState,N as FallbackRowKeyStability,E as InvalidDefaultSortKeyFallback,I as LoadingState,C as LocalizedSortLabels,B as ReleaseChecklist,$ as RenderIndexSemantics,A as RowHeaderSemantics,k as SingleRowSortDisabled,K as SortTelemetry,q as SourceIndexRowKeyStability,T as WithRowAction,it as __namedExportsOrder,ot as default};
