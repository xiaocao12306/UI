import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-BWu4c2F4.js";import{B as k}from"./Badge-Dkm8CRgf.js";import{within as R,expect as o,userEvent as B}from"./index-DgAF9SIF.js";function x(a,e,s){return Math.min(Math.max(a,e),s)}function $(a,e){const s=e-a+1;return Array.from({length:s},(r,c)=>a+c)}function ye(a,e,s,r){const c=r*2+s*2+3;if(e<=c)return $(1,e);const l=Math.max(a-s,r+2),g=Math.min(a+s,e-r-1),u=[],C=$(1,r),d=$(e-r+1,e);u.push(...C),l>r+2?u.push("ellipsis-left"):r+1<l&&u.push(r+1);for(let m=l;m<=g;m+=1)u.push(m);return g<e-r-1?u.push("ellipsis-right"):g+1<e-r+1&&u.push(e-r),u.push(...d),u}function h({page:a,pageCount:e,onPageChange:s,siblingCount:r=1,boundaryCount:c=1,disabled:l=!1,showFirstLast:g=!0,ariaLabel:u="Pagination",ariaLabelledBy:C,getItemAriaLabel:d=be}){if(e<=1)return null;const m=v.useRef(null),w=v.useRef(null),p=x(a,1,e),fe=ye(p,e,r,c),q=x(p-1,1,e),V=x(p+1,1,e),D=!l&&p>1,T=!l&&p<e,f=t=>{if(l)return;const i=x(t,1,e);i!==p&&s(i)};v.useEffect(()=>{var y;if(w.current===null)return;const t=w.current;w.current=null;const i=(y=m.current)==null?void 0:y.querySelector(`button[data-aurora-pagination-page="${t}"]`);i==null||i.focus()},[p]);const K=t=>{const i=x(t,1,e);if(i===p){w.current=null;return}w.current=i,f(i)},b=t=>{if(l)return;if(t.key==="Home")t.preventDefault(),K(1);else if(t.key==="End"){t.preventDefault(),K(e);return}const i=ve(t.key,t.currentTarget);i!==void 0&&(t.preventDefault(),K(p+i))};return n.jsx("nav",{ref:m,"aria-label":C?void 0:u,"aria-labelledby":C,children:n.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[g?n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!D,onClick:()=>f(1),onKeyDown:b,"aria-label":d("first",1),style:P(!1,!D),children:"«"})}):null,n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!D,onClick:()=>f(q),onKeyDown:b,"aria-label":d("previous",q),style:P(!1,!D),children:"‹"})}),fe.map((t,i)=>{if(typeof t!="number")return n.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${t}-${i}`);const y=t===p;return n.jsx("li",{children:n.jsx("button",{type:"button",onClick:()=>f(t),disabled:l,onKeyDown:b,"data-aurora-pagination-page":t,"aria-current":y?"page":void 0,"aria-label":d(y?"current":"page",t),style:P(y,l),children:t})},t)}),n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!T,onClick:()=>f(V),onKeyDown:b,"aria-label":d("next",V),style:P(!1,!T),children:"›"})}),g?n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!T,onClick:()=>f(e),onKeyDown:b,"aria-label":d("last",e),style:P(!1,!T),children:"»"})}):null]})})}function ve(a,e){if(!(a!=="ArrowLeft"&&a!=="ArrowRight"))return he(a,we(e))}function he(a,e){return a==="ArrowRight"?e?-1:1:e?1:-1}function we(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function be(a,e){switch(a){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function P(a,e){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:a?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit"}}h.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  type: "page" | "current" | "first" | "last" | "next" | "previous",
  page: number
) => string`,signature:{arguments:[{type:{name:"union",raw:'"page" | "current" | "first" | "last" | "next" | "previous"',elements:[{name:"literal",value:'"page"'},{name:"literal",value:'"current"'},{name:"literal",value:'"first"'},{name:"literal",value:'"last"'},{name:"literal",value:'"next"'},{name:"literal",value:'"previous"'}]},name:"type"},{type:{name:"number"},name:"page"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetItemAriaLabel(
  type: "page" | "current" | "first" | "last" | "next" | "previous",
  page: number
) {
  switch (type) {
    case "first":
      return "Go to first page";
    case "last":
      return "Go to last page";
    case "previous":
      return "Go to previous page";
    case "next":
      return "Go to next page";
    case "current":
      return \`Current page, \${page}\`;
    default:
      return \`Go to page \${page}\`;
  }
}`,computed:!1}}}};const je={title:"Data/Pagination",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function xe(){const[a,e]=v.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),n.jsx(k,{tone:"default",children:a})]}),n.jsx(h,{page:a,pageCount:12,onPageChange:e})]})}const j={render:()=>n.jsx(xe,{}),play:async({canvasElement:a})=>{const e=R(a);await B.click(await e.findByRole("button",{name:"Go to page 2"})),await o(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function Pe(){const[a,e]=v.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),n.jsx(k,{tone:"default",children:a})]}),n.jsx(h,{page:a,pageCount:12,onPageChange:e})]})}const S={render:()=>n.jsx(Pe,{}),play:async({canvasElement:a})=>{const e=R(a),s=await e.findByRole("button",{name:"Current page, 4"});s.focus(),await o(s).toHaveFocus(),await B.keyboard("{End}");const r=await e.findByRole("button",{name:"Current page, 12"});await o(r).toBeInTheDocument(),await o(r).toHaveFocus(),await B.keyboard("{Home}");const c=await e.findByRole("button",{name:"Current page, 1"});await o(c).toBeInTheDocument(),await o(c).toHaveFocus()}};function Be(){const[a,e]=v.useState(4);return n.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),n.jsx(k,{tone:"default","data-testid":"rtl-page-value",children:a})]}),n.jsx(h,{page:a,pageCount:12,onPageChange:e})]})}const E={render:()=>n.jsx(Be,{}),play:async({canvasElement:a})=>{const e=R(a),s=await e.findByRole("button",{name:"Current page, 4"});s.focus(),await o(s).toHaveFocus(),await B.keyboard("{ArrowRight}");const r=await e.findByRole("button",{name:"Current page, 3"});await o(r).toBeInTheDocument(),await o(r).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await B.keyboard("{ArrowLeft}");const c=await e.findByRole("button",{name:"Current page, 4"});await o(c).toBeInTheDocument(),await o(c).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},H={args:{page:9,pageCount:48,onPageChange:()=>{}}},I={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},A={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},F={args:{page:2,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}}},L={args:{page:1,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}},play:async({canvasElement:a})=>{const e=R(a);await o(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}},G={render:a=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),n.jsx(h,{...a,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:a})=>{const s=await R(a).findByRole("navigation",{name:"Release pages"});await o(s).toHaveAttribute("aria-labelledby","pagination-release-heading"),await o(s).not.toHaveAttribute("aria-label")}};var W,_,M;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ControlledPaginationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Go to page 2"
    }));
    await expect(await canvas.findByRole("button", {
      name: "Current page, 2"
    })).toBeInTheDocument();
  }
}`,...(M=(_=j.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var N,O,z;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <KeyboardShortcutsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    current.focus();
    await expect(current).toHaveFocus();
    await userEvent.keyboard("{End}");
    const currentLast = await canvas.findByRole("button", {
      name: "Current page, 12"
    });
    await expect(currentLast).toBeInTheDocument();
    await expect(currentLast).toHaveFocus();
    await userEvent.keyboard("{Home}");
    const currentFirst = await canvas.findByRole("button", {
      name: "Current page, 1"
    });
    await expect(currentFirst).toBeInTheDocument();
    await expect(currentFirst).toHaveFocus();
  }
}`,...(z=(O=S.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var J,Q,U;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <RtlKeyboardShortcutsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    current.focus();
    await expect(current).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    const currentRtl = await canvas.findByRole("button", {
      name: "Current page, 3"
    });
    await expect(currentRtl).toBeInTheDocument();
    await expect(currentRtl).toHaveFocus();
    await expect(canvas.getByTestId("rtl-page-value")).toHaveTextContent("3");
    await userEvent.keyboard("{ArrowLeft}");
    const currentDefault = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    await expect(currentDefault).toBeInTheDocument();
    await expect(currentDefault).toHaveFocus();
    await expect(canvas.getByTestId("rtl-page-value")).toHaveTextContent("4");
  }
}`,...(U=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;H.parameters={...H.parameters,docs:{...(X=H.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(Z=(Y=H.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(ne=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,se;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(se=(re=A.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ce;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(ce=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ue,pe;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", {
      name: "Pagination previous 1"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Pagination next 2"
    })).toBeInTheDocument();
  }
}`,...(pe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,ge,me;G.parameters={...G.parameters,docs:{...(de=G.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 640,
    display: "grid",
    gap: 12
  }}>
      <h3 id="pagination-release-heading" style={{
      margin: 0
    }}>
        Release pages
      </h3>
      <Pagination {...args} ariaLabelledBy="pagination-release-heading" />
    </div>,
  args: {
    page: 3,
    pageCount: 12,
    onPageChange: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nav = await canvas.findByRole("navigation", {
      name: "Release pages"
    });
    await expect(nav).toHaveAttribute("aria-labelledby", "pagination-release-heading");
    await expect(nav).not.toHaveAttribute("aria-label");
  }
}`,...(me=(ge=G.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};const Se=["Controlled","KeyboardShortcuts","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","LabelledByHeading"];export{L as BoundaryAriaLabels,H as CompactRange,j as Controlled,F as CustomAriaLabels,A as DisabledPagination,S as KeyboardShortcuts,G as LabelledByHeading,E as RtlKeyboardShortcuts,I as WithoutFirstLast,Se as __namedExportsOrder,je as default};
