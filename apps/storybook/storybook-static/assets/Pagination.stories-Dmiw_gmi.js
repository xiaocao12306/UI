import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as K}from"./index-BWu4c2F4.js";import{B as L}from"./Badge-Dkm8CRgf.js";import{within as E,expect as u,userEvent as v}from"./index-DgAF9SIF.js";function P(a,e,o){return Math.min(Math.max(a,e),o)}function G(a,e){const o=e-a+1;return Array.from({length:o},(r,m)=>a+m)}function ce(a,e,o,r){const m=r*2+o*2+3;if(e<=m)return G(1,e);const s=Math.max(a-o,r+2),d=Math.min(a+o,e-r-1),i=[],l=G(1,r),c=G(e-r+1,e);i.push(...l),s>r+2?i.push("ellipsis-left"):r+1<s&&i.push(r+1);for(let y=s;y<=d;y+=1)i.push(y);return d<e-r-1?i.push("ellipsis-right"):d+1<e-r+1&&i.push(e-r),i.push(...c),i}function x({page:a,pageCount:e,onPageChange:o,siblingCount:r=1,boundaryCount:m=1,disabled:s=!1,showFirstLast:d=!0,ariaLabel:i="Pagination",getItemAriaLabel:l=ge}){if(e<=1)return null;const c=P(a,1,e),y=ce(c,e,r,m),$=P(c-1,1,e),k=P(c+1,1,e),b=!s&&c>1,w=!s&&c<e,p=n=>{if(s)return;const g=P(n,1,e);g!==c&&o(g)},f=n=>{if(s)return;if(n.key==="Home")n.preventDefault(),p(1);else if(n.key==="End"){n.preventDefault(),p(e);return}const g=ue(n.key,n.currentTarget);g!==void 0&&(n.preventDefault(),p(c+g))};return t.jsx("nav",{"aria-label":i,children:t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[d?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!b,onClick:()=>p(1),onKeyDown:f,"aria-label":l("first",1),style:h(!1,!b),children:"«"})}):null,t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!b,onClick:()=>p($),onKeyDown:f,"aria-label":l("previous",$),style:h(!1,!b),children:"‹"})}),y.map((n,g)=>{if(typeof n!="number")return t.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${n}-${g}`);const A=n===c;return t.jsx("li",{children:t.jsx("button",{type:"button",onClick:()=>p(n),disabled:s,onKeyDown:f,"aria-current":A?"page":void 0,"aria-label":l(A?"current":"page",n),style:h(A,s),children:n})},n)}),t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!w,onClick:()=>p(k),onKeyDown:f,"aria-label":l("next",k),style:h(!1,!w),children:"›"})}),d?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!w,onClick:()=>p(e),onKeyDown:f,"aria-label":l("last",e),style:h(!1,!w),children:"»"})}):null]})})}function ue(a,e){if(!(a!=="ArrowLeft"&&a!=="ArrowRight"))return le(a,pe(e))}function le(a,e){return a==="ArrowRight"?e?-1:1:e?1:-1}function pe(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function ge(a,e){switch(a){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function h(a,e){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:a?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit"}}x.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const be={title:"Data/Pagination",component:x,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function de(){const[a,e]=K.useState(1);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),t.jsx(L,{tone:"default",children:a})]}),t.jsx(x,{page:a,pageCount:12,onPageChange:e})]})}const B={render:()=>t.jsx(de,{}),play:async({canvasElement:a})=>{const e=E(a);await v.click(e.getByRole("button",{name:"Go to page 2"})),await u(e.getByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function me(){const[a,e]=K.useState(4);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),t.jsx(L,{tone:"default",children:a})]}),t.jsx(x,{page:a,pageCount:12,onPageChange:e})]})}const C={render:()=>t.jsx(me,{}),play:async({canvasElement:a})=>{const e=E(a);e.getByRole("button",{name:"Current page, 4"}).focus(),await v.keyboard("{End}"),await u(e.getByRole("button",{name:"Current page, 12"})).toBeInTheDocument(),e.getByRole("button",{name:"Current page, 12"}).focus(),await v.keyboard("{Home}"),await u(e.getByRole("button",{name:"Current page, 1"})).toBeInTheDocument()}};function ye(){const[a,e]=K.useState(4);return t.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),t.jsx(L,{tone:"default","data-testid":"rtl-page-value",children:a})]}),t.jsx(x,{page:a,pageCount:12,onPageChange:e})]})}const T={render:()=>t.jsx(ye,{}),play:async({canvasElement:a})=>{const e=E(a);e.getByRole("button",{name:"Current page, 4"}).focus(),await v.keyboard("{ArrowRight}"),await u(e.getByRole("button",{name:"Current page, 3"})).toBeInTheDocument(),await u(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),e.getByRole("button",{name:"Current page, 3"}).focus(),await v.keyboard("{ArrowLeft}"),await u(e.getByRole("button",{name:"Current page, 4"})).toBeInTheDocument(),await u(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},D={args:{page:9,pageCount:48,onPageChange:()=>{}}},R={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},j={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},I={args:{page:2,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}}},S={args:{page:1,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}},play:async({canvasElement:a})=>{const e=E(a);await u(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await u(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}};var q,H,V;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(H=B.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var W,_,F;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=(_=C.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,N,O;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <RtlKeyboardShortcutsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = canvas.getByRole("button", {
      name: "Current page, 4"
    });
    current.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("button", {
      name: "Current page, 3"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("rtl-page-value")).toHaveTextContent("3");
    canvas.getByRole("button", {
      name: "Current page, 3"
    }).focus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect(canvas.getByRole("button", {
      name: "Current page, 4"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("rtl-page-value")).toHaveTextContent("4");
  }
}`,...(O=(N=T.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var z,J,Q;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(re=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const we=["Controlled","KeyboardShortcuts","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels"];export{S as BoundaryAriaLabels,D as CompactRange,B as Controlled,I as CustomAriaLabels,j as DisabledPagination,C as KeyboardShortcuts,T as RtlKeyboardShortcuts,R as WithoutFirstLast,we as __namedExportsOrder,be as default};
