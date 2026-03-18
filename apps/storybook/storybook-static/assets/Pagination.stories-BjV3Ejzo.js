import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as ne}from"./index-BWu4c2F4.js";import{B as te}from"./Badge-Dkm8CRgf.js";import{within as I,expect as y,userEvent as G}from"./index-DgAF9SIF.js";function b(a,e,o){return Math.min(Math.max(a,e),o)}function E(a,e){const o=e-a+1;return Array.from({length:o},(r,g)=>a+g)}function re(a,e,o,r){const g=r*2+o*2+3;if(e<=g)return E(1,e);const i=Math.max(a-o,r+2),p=Math.min(a+o,e-r-1),l=[],u=E(1,r),s=E(e-r+1,e);l.push(...u),i>r+2?l.push("ellipsis-left"):r+1<i&&l.push(r+1);for(let d=i;d<=p;d+=1)l.push(d);return p<e-r-1?l.push("ellipsis-right"):p+1<e-r+1&&l.push(e-r),l.push(...s),l}function T({page:a,pageCount:e,onPageChange:o,siblingCount:r=1,boundaryCount:g=1,disabled:i=!1,showFirstLast:p=!0,ariaLabel:l="Pagination",getItemAriaLabel:u=se}){if(e<=1)return null;const s=b(a,1,e),d=re(s,e,r,g),$=b(s-1,1,e),k=b(s+1,1,e),h=!i&&s>1,v=!i&&s<e,c=t=>{if(i)return;const x=b(t,1,e);x!==s&&o(x)},m=t=>{i||(t.key==="Home"?(t.preventDefault(),c(1)):t.key==="End"?(t.preventDefault(),c(e)):t.key==="ArrowLeft"?(t.preventDefault(),c(s-1)):t.key==="ArrowRight"&&(t.preventDefault(),c(s+1)))};return n.jsx("nav",{"aria-label":l,children:n.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[p?n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!h,onClick:()=>c(1),onKeyDown:m,"aria-label":u("first",1),style:f(!1,!h),children:"«"})}):null,n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!h,onClick:()=>c($),onKeyDown:m,"aria-label":u("previous",$),style:f(!1,!h),children:"‹"})}),d.map((t,x)=>{if(typeof t!="number")return n.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${t}-${x}`);const S=t===s;return n.jsx("li",{children:n.jsx("button",{type:"button",onClick:()=>c(t),disabled:i,onKeyDown:m,"aria-current":S?"page":void 0,"aria-label":u(S?"current":"page",t),style:f(S,i),children:t})},t)}),n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!v,onClick:()=>c(k),onKeyDown:m,"aria-label":u("next",k),style:f(!1,!v),children:"›"})}),p?n.jsx("li",{children:n.jsx("button",{type:"button",disabled:!v,onClick:()=>c(e),onKeyDown:m,"aria-label":u("last",e),style:f(!1,!v),children:"»"})}):null]})})}function se(a,e){switch(a){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function f(a,e){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:a?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit"}}T.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const ge={title:"Data/Pagination",component:T,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function oe(){const[a,e]=ne.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),n.jsx(te,{tone:"default",children:a})]}),n.jsx(T,{page:a,pageCount:12,onPageChange:e})]})}const P={render:()=>n.jsx(oe,{}),play:async({canvasElement:a})=>{const e=I(a);await G.click(e.getByRole("button",{name:"Go to page 2"})),await y(e.getByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function ie(){const[a,e]=ne.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),n.jsx(te,{tone:"default",children:a})]}),n.jsx(T,{page:a,pageCount:12,onPageChange:e})]})}const w={render:()=>n.jsx(ie,{}),play:async({canvasElement:a})=>{const e=I(a);e.getByRole("button",{name:"Current page, 4"}).focus(),await G.keyboard("{End}"),await y(e.getByRole("button",{name:"Current page, 12"})).toBeInTheDocument(),e.getByRole("button",{name:"Current page, 12"}).focus(),await G.keyboard("{Home}"),await y(e.getByRole("button",{name:"Current page, 1"})).toBeInTheDocument()}},B={args:{page:9,pageCount:48,onPageChange:()=>{}}},j={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},C={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},D={args:{page:2,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}}},R={args:{page:1,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}},play:async({canvasElement:a})=>{const e=I(a);await y(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await y(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}};var L,A,K;P.parameters={...P.parameters,docs:{...(L=P.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(A=P.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var q,V,W;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(V=w.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,F,M;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(M=(F=B.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var H,N,O;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(O=(N=j.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var z,J,Q;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(Y=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const de=["Controlled","KeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels"];export{R as BoundaryAriaLabels,B as CompactRange,P as Controlled,D as CustomAriaLabels,C as DisabledPagination,w as KeyboardShortcuts,j as WithoutFirstLast,de as __namedExportsOrder,ge as default};
