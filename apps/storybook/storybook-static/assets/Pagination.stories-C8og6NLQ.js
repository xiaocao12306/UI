import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as Q}from"./index-BWu4c2F4.js";import{B as U}from"./Badge-Dkm8CRgf.js";import{within as X,userEvent as T,expect as S}from"./index-DgAF9SIF.js";function G(a,e,o){return Math.min(Math.max(a,e),o)}function R(a,e){const o=e-a+1;return Array.from({length:o},(r,g)=>a+g)}function Y(a,e,o,r){const g=r*2+o*2+3;if(e<=g)return R(1,e);const i=Math.max(a-o,r+2),p=Math.min(a+o,e-r-1),l=[],c=R(1,r),s=R(e-r+1,e);l.push(...c),i>r+2?l.push("ellipsis-left"):r+1<i&&l.push(r+1);for(let d=i;d<=p;d+=1)l.push(d);return p<e-r-1?l.push("ellipsis-right"):p+1<e-r+1&&l.push(e-r),l.push(...s),l}function D({page:a,pageCount:e,onPageChange:o,siblingCount:r=1,boundaryCount:g=1,disabled:i=!1,showFirstLast:p=!0,ariaLabel:l="Pagination",getItemAriaLabel:c=Z}){if(e<=1)return null;const s=G(a,1,e),d=Y(s,e,r,g),y=!i&&s>1,h=!i&&s<e,u=t=>{if(i)return;const x=G(t,1,e);x!==s&&o(x)},m=t=>{i||(t.key==="Home"?(t.preventDefault(),u(1)):t.key==="End"?(t.preventDefault(),u(e)):t.key==="ArrowLeft"?(t.preventDefault(),u(s-1)):t.key==="ArrowRight"&&(t.preventDefault(),u(s+1)))};return n.jsx("nav",{"aria-label":l,children:n.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[p?n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!y,onClick:()=>u(1),onKeyDown:m,"aria-label":c("first",1),style:f(!1,!y),children:"«"})}):null,n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!y,onClick:()=>u(s-1),onKeyDown:m,"aria-label":c("previous",s-1),style:f(!1,!y),children:"‹"})}),d.map((t,x)=>{if(typeof t!="number")return n.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${t}-${x}`);const B=t===s;return n.jsx("li",{children:n.jsx("button",{type:"button",onClick:()=>u(t),disabled:i,onKeyDown:m,"aria-current":B?"page":void 0,"aria-label":c(B?"current":"page",t),style:f(B,i),children:t})},t)}),n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!h,onClick:()=>u(s+1),onKeyDown:m,"aria-label":c("next",s+1),style:f(!1,!h),children:"›"})}),p?n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!h,onClick:()=>u(e),onKeyDown:m,"aria-label":c("last",e),style:f(!1,!h),children:"»"})}):null]})})}function Z(a,e){switch(a){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function f(a,e){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:a?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit"}}D.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const oe={title:"Data/Pagination",component:D,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function ee(){const[a,e]=Q.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),n.jsx(U,{tone:"default",children:a})]}),n.jsx(D,{page:a,pageCount:12,onPageChange:e})]})}const v={render:()=>n.jsx(ee,{}),play:async({canvasElement:a})=>{const e=X(a);await T.click(e.getByRole("button",{name:"Go to page 2"})),await S(e.getByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function ae(){const[a,e]=Q.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),n.jsx(U,{tone:"default",children:a})]}),n.jsx(D,{page:a,pageCount:12,onPageChange:e})]})}const b={render:()=>n.jsx(ae,{}),play:async({canvasElement:a})=>{const e=X(a);e.getByRole("button",{name:"Current page, 4"}).focus(),await T.keyboard("{End}"),await S(e.getByRole("button",{name:"Current page, 12"})).toBeInTheDocument(),e.getByRole("button",{name:"Current page, 12"}).focus(),await T.keyboard("{Home}"),await S(e.getByRole("button",{name:"Current page, 1"})).toBeInTheDocument()}},w={args:{page:9,pageCount:48,onPageChange:()=>{}}},P={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},j={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},C={args:{page:2,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}}};var E,k,K;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(K=(k=v.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var I,$,q;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var L,A,V;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(V=(A=w.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var W,_,F;P.parameters={...P.parameters,docs:{...(W=P.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(F=(_=P.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,H,N;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(N=(H=j.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var O,z,J;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(J=(z=C.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const ie=["Controlled","KeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels"];export{w as CompactRange,v as Controlled,C as CustomAriaLabels,j as DisabledPagination,b as KeyboardShortcuts,P as WithoutFirstLast,ie as __namedExportsOrder,oe as default};
