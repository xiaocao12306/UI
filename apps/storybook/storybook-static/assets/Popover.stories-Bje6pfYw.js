import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as h}from"./Button-Hgh0jeno.js";import{I as k}from"./Input-vIzakoOT.js";import{r as a}from"./index-BWu4c2F4.js";import{D as z}from"./DismissableLayer-0Dn_Gr2D.js";import"./FieldStyles-CQy9UjBZ.js";function x({triggerLabel:w,children:R,open:d,defaultOpen:q,onOpenChange:o,align:D="start",sideOffset:I=8,contentLabel:j="Popover content"}){const[P,T]=a.useState(q??!1),c=a.useId(),u=a.useRef(null),p=a.useRef(null),i=d!==void 0,r=i?d:P,l=a.useCallback(e=>{i||T(e),o==null||o(e)},[i,o]);a.useEffect(()=>{if(!r)return;const e=p.current;if(!e)return;(e.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')??e).focus()},[r]);const S=D==="start"?{left:0}:{right:0};return t.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[t.jsx(h,{ref:u,variant:"outline","aria-haspopup":"dialog","aria-expanded":r,"aria-controls":c,onClick:()=>l(!r),onKeyDown:e=>{e.key==="ArrowDown"&&!r&&(e.preventDefault(),l(!0))},children:w}),r?t.jsx(z,{id:c,ref:p,role:"dialog","aria-label":j,tabIndex:-1,onDismiss:()=>{var e;l(!1),(e=u.current)==null||e.focus()},style:{position:"absolute",top:`calc(100% + ${I}px)`,minWidth:220,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",padding:10,zIndex:1200,...S},children:R}):null]})}x.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{triggerLabel:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},contentLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Popover content"',computed:!1}}}};const F={title:"Overlay/Popover",component:x,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},n={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})}},s={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(k,{id:"name",defaultValue:"Aurora Team"}),t.jsx(h,{size:"sm",children:"Save"})]})}};var m,f,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      margin: 0
    }}>Popover content for quick context editing.</p>
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,b,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Edit Name",
    children: <div style={{
      width: 280,
      display: "grid",
      gap: 8
    }}>
        <label htmlFor="name" style={{
        fontSize: "var(--aurora-font-size-sm)",
        fontWeight: 600
      }}>
          Display name
        </label>
        <Input id="name" defaultValue="Aurora Team" />
        <Button size="sm">Save</Button>
      </div>
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const O=["Default","WithInteractiveContent"];export{n as Default,s as WithInteractiveContent,O as __namedExportsOrder,F as default};
