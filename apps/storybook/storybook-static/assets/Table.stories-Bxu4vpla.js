import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as b}from"./Button-Drf1sTuy.js";import{B as f}from"./Badge-Dkm8CRgf.js";import"./index-BWu4c2F4.js";function u({columns:r,data:t,rowKey:n}){return e.jsx("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(a=>e.jsx("th",{style:{textAlign:"left",color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:a.width},children:a.header},String(a.key)))})}),e.jsx("tbody",{children:t.map((a,i)=>e.jsx("tr",{children:r.map(o=>e.jsx("td",{style:{padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)"},children:o.render?o.render(a,i):String(a[String(o.key)]??"")},String(o.key)))},n?n(a,i):String(i)))})]})})}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  render?: (row: T, rowIndex: number) => React.ReactNode;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""}}};const h=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],g=[{key:"id",header:"Issue",width:120},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status",width:140,render:r=>{const t=r.status==="ready"?"success":r.status==="review"?"default":"danger";return e.jsx(f,{tone:t,children:r.status})}}],R={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},s={render:()=>e.jsx("div",{style:{width:780,display:"grid",gap:10},children:e.jsx(u,{columns:g,data:h,rowKey:r=>r.id})})},d={render:()=>{const r=[...g,{key:"action",header:"Action",width:160,render:t=>e.jsx(b,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return e.jsx(u,{columns:r,data:h,rowKey:t=>t.id})}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 10
  }}>
      <Table columns={columns} data={rows} rowKey={row => row.id} />
    </div>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,y,w;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const j=["ReleaseChecklist","WithRowAction"];export{s as ReleaseChecklist,d as WithRowAction,j as __namedExportsOrder,R as default};
