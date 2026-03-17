import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as J}from"./index-BWu4c2F4.js";import{B as Q}from"./Badge-Dkm8CRgf.js";import{within as U,userEvent as R,expect as T}from"./index-DgAF9SIF.js";function S(a,e,o){return Math.min(Math.max(a,e),o)}function D(a,e){const o=e-a+1;return Array.from({length:o},(r,g)=>a+g)}function X(a,e,o,r){const g=r*2+o*2+3;if(e<=g)return D(1,e);const i=Math.max(a-o,r+2),p=Math.min(a+o,e-r-1),l=[],c=D(1,r),s=D(e-r+1,e);l.push(...c),i>r+2?l.push("ellipsis-left"):r+1<i&&l.push(r+1);for(let d=i;d<=p;d+=1)l.push(d);return p<e-r-1?l.push("ellipsis-right"):p+1<e-r+1&&l.push(e-r),l.push(...s),l}function C({page:a,pageCount:e,onPageChange:o,siblingCount:r=1,boundaryCount:g=1,disabled:i=!1,showFirstLast:p=!0,ariaLabel:l="Pagination",getItemAriaLabel:c=Y}){if(e<=1)return null;const s=S(a,1,e),d=X(s,e,r,g),f=!i&&s>1,h=!i&&s<e,u=n=>{if(i)return;const y=S(n,1,e);y!==s&&o(y)};return t.jsx("nav",{"aria-label":l,onKeyDown:n=>{i||(n.key==="Home"?(n.preventDefault(),u(1)):n.key==="End"?(n.preventDefault(),u(e)):n.key==="ArrowLeft"?(n.preventDefault(),u(s-1)):n.key==="ArrowRight"&&(n.preventDefault(),u(s+1)))},children:t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[p?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!f,onClick:()=>u(1),"aria-label":c("first",1),style:m(!1,!f),children:"«"})}):null,t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!f,onClick:()=>u(s-1),"aria-label":c("previous",s-1),style:m(!1,!f),children:"‹"})}),d.map((n,y)=>{if(typeof n!="number")return t.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${n}-${y}`);const B=n===s;return t.jsx("li",{children:t.jsx("button",{type:"button",onClick:()=>u(n),disabled:i,"aria-current":B?"page":void 0,"aria-label":c(B?"current":"page",n),style:m(B,i),children:n})},n)}),t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!h,onClick:()=>u(s+1),"aria-label":c("next",s+1),style:m(!1,!h),children:"›"})}),p?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!h,onClick:()=>u(e),"aria-label":c("last",e),style:m(!1,!h),children:"»"})}):null]})})}function Y(a,e){switch(a){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function m(a,e){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:a?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit"}}C.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const se={title:"Data/Pagination",component:C,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function Z(){const[a,e]=J.useState(1);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),t.jsx(Q,{tone:"default",children:a})]}),t.jsx(C,{page:a,pageCount:12,onPageChange:e})]})}const x={render:()=>t.jsx(Z,{}),play:async({canvasElement:a})=>{const e=U(a);await R.click(e.getByRole("button",{name:"Go to page 2"})),await T(e.getByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function ee(){const[a,e]=J.useState(4);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),t.jsx(Q,{tone:"default",children:a})]}),t.jsx(C,{page:a,pageCount:12,onPageChange:e})]})}const v={render:()=>t.jsx(ee,{}),play:async({canvasElement:a})=>{const e=U(a);e.getByRole("button",{name:"Current page, 4"}).focus(),await R.keyboard("{End}"),await T(e.getByRole("button",{name:"Current page, 12"})).toBeInTheDocument(),e.getByRole("button",{name:"Current page, 12"}).focus(),await R.keyboard("{Home}"),await T(e.getByRole("button",{name:"Current page, 1"})).toBeInTheDocument()}},b={args:{page:9,pageCount:48,onPageChange:()=>{}}},P={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},w={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},j={args:{page:2,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}}};var G,E,k;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ControlledPaginationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Go to page 2"
    }));
    await expect(canvas.getByRole("button", {
      name: "Current page, 2"
    })).toBeInTheDocument();
  }
}`,...(k=(E=x.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var I,$,q;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <KeyboardShortcutsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = canvas.getByRole("button", {
      name: "Current page, 4"
    });
    current.focus();
    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("button", {
      name: "Current page, 12"
    })).toBeInTheDocument();
    canvas.getByRole("button", {
      name: "Current page, 12"
    }).focus();
    await userEvent.keyboard("{Home}");
    await expect(canvas.getByRole("button", {
      name: "Current page, 1"
    })).toBeInTheDocument();
  }
}`,...(q=($=v.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var L,A,K;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(K=(A=b.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var V,W,_;P.parameters={...P.parameters,docs:{...(V=P.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(_=(W=P.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var F,M,H;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(H=(M=w.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var N,O,z;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(z=(O=j.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const oe=["Controlled","KeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels"];export{b as CompactRange,x as Controlled,j as CustomAriaLabels,w as DisabledPagination,v as KeyboardShortcuts,P as WithoutFirstLast,oe as __namedExportsOrder,se as default};
