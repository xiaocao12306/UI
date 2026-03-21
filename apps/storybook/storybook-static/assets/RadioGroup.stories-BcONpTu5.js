import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{a as le}from"./a11y-CU5SQrEA.js";import{B as se}from"./Badge-ZJmMstsz.js";import{within as S,userEvent as j,expect as v}from"./index-DgAF9SIF.js";function m({name:n,value:t,defaultValue:l,options:y,onChange:w,ariaLabel:Q,ariaLabelledBy:U,invalid:W,"aria-invalid":X,disabled:b=!1,direction:L="vertical"}){const[Y,Z]=i.useState(l),[ee,B]=i.useState(null),[ae,u]=i.useState(null),V=i.useRef(null),d=i.useRef(!1),re=t??Y,A=le(W,X),z=A!==void 0,E=C(U),ne=E?void 0:C(Q),te=z?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";i.useEffect(()=>{b&&(B(null),u(null))},[b]),i.useEffect(()=>{var c;const e=((c=V.current)==null?void 0:c.ownerDocument)??document,o=a=>{a.metaKey||a.altKey||a.ctrlKey||(d.current=!0)},s=a=>{"button"in a&&typeof a.button=="number"&&a.button!==0||(d.current=!1)};return e.addEventListener("keydown",o,!0),e.addEventListener("pointerdown",s,!0),e.addEventListener("mousedown",s,!0),e.addEventListener("touchstart",s,!0),()=>{e.removeEventListener("keydown",o,!0),e.removeEventListener("pointerdown",s,!0),e.removeEventListener("mousedown",s,!0),e.removeEventListener("touchstart",s,!0)}},[]);const oe=(e,o)=>{b||o||(t===void 0&&Z(e),w==null||w(e))};return r.jsx("div",{ref:V,style:{display:L==="horizontal"?"flex":"grid",gap:8,alignItems:L==="horizontal"?"center":void 0},role:"radiogroup","aria-label":E?void 0:ne??n,"aria-labelledby":E,"aria-invalid":A,children:y.map(e=>{const o=!!(b||e.disabled),s=ee===e.value,c=ae===e.value;return r.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:o?.7:1,cursor:o?"not-allowed":"pointer"},children:[r.jsx("input",{type:"radio",name:n,value:e.value,checked:re===e.value,disabled:o,"data-focused":s?"true":void 0,"data-focus-visible":c?"true":void 0,onChange:()=>oe(e.value,e.disabled),onFocus:a=>{B(e.value),u(ie(a.currentTarget,d.current)?e.value:null)},onBlur:()=>{B(a=>a===e.value?null:a),u(a=>a===e.value?null:a)},onMouseDown:a=>{a.button===0&&(d.current=!1,u(p=>p===e.value?null:p))},onPointerDown:a=>{a.button===0&&(d.current=!1,u(p=>p===e.value?null:p))},onKeyDown:()=>{d.current=!0},style:{marginTop:2,accentColor:z?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:o?"not-allowed":"pointer",boxShadow:s&&c&&!o?`0 0 0 3px ${te}`:"none"}}),r.jsxs("span",{style:{display:"grid",gap:e.description?2:0},children:[r.jsx("span",{children:e.label}),e.description?r.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:e.description}):null]})]},e.value)})})}function C(n){if(typeof n!="string")return;const t=n.trim();return t.length>0?t:void 0}function ie(n,t){try{return n.matches(":focus-visible")||t}catch{return t}}m.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const k=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],ye={title:"Form/RadioGroup",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:k}};function de(){const[n,t]=i.useState("m");return r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),r.jsx(se,{children:n})]}),r.jsx(m,{name:"Size selection",value:n,onChange:t,options:k})]})}const f={render:()=>r.jsx(de,{}),play:async({canvasElement:n})=>{const l=S(n).getByRole("radio",{name:/Large/i});await j.click(l),await v(l).toBeChecked()}},g={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},R={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},h={render:()=>r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),r.jsx(m,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:k})]}),play:async({canvasElement:n})=>{const l=S(n).getByRole("radiogroup",{name:"Release preference heading"});await v(l).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await v(l).not.toHaveAttribute("aria-label")}},x={render:()=>r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),r.jsx("button",{type:"button",children:"Before radio group"}),r.jsx(m,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:n})=>{const t=S(n),l=await t.findByRole("button",{name:"Before radio group"}),y=t.getByRole("radio",{name:/^Medium/});await j.click(l),await j.tab(),await v(y).toHaveFocus(),await v(y).toHaveAttribute("data-focus-visible","true")}};var q,I,T;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ControlledRadioGroup />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const large = canvas.getByRole("radio", {
      name: /Large/i
    });
    await userEvent.click(large);
    await expect(large).toBeChecked();
  }
}`,...(T=(I=f.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var F,D,G;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: "Approval",
    invalid: true,
    options: [{
      label: "Approved",
      value: "approved"
    }, {
      label: "Rejected",
      value: "rejected"
    }]
  }
}`,...(G=(D=g.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var H,N,M;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    name: "Release track",
    defaultValue: "stable",
    options: [{
      label: "Stable",
      value: "stable"
    }, {
      label: "Canary",
      value: "canary",
      disabled: true
    }, {
      label: "Experimental",
      value: "experimental"
    }]
  }
}`,...(M=(N=R.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var K,O,P;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 340,
    display: "grid",
    gap: 12
  }}>
      <p id="radiogroup-story-heading" style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Release preference heading
      </p>
      <RadioGroup name="Release preference fallback" ariaLabel="Release preference fallback label" ariaLabelledBy="radiogroup-story-heading" defaultValue="m" options={options} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", {
      name: "Release preference heading"
    });
    await expect(group).toHaveAttribute("aria-labelledby", "radiogroup-story-heading");
    await expect(group).not.toHaveAttribute("aria-label");
  }
}`,...(P=(O=h.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,$,J;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 340,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores radio
        focus-visible state.
      </p>
      <button type="button">Before radio group</button>
      <RadioGroup name="Focus intent group" defaultValue="m" options={[{
      label: "Small",
      value: "s",
      description: "Compact layout"
    }, {
      label: "Medium",
      value: "m",
      description: "Balanced layout"
    }, {
      label: "Large",
      value: "l",
      description: "Readable layout"
    }]} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before radio group"
    });
    const medium = canvas.getByRole("radio", {
      name: /^Medium/
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(medium).toHaveFocus();
    await expect(medium).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(J=($=x.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};const be=["Controlled","InvalidState","DisabledOption","LabelledByPrecedence","FocusIntentReentry"];export{f as Controlled,R as DisabledOption,x as FocusIntentReentry,g as InvalidState,h as LabelledByPrecedence,be as __namedExportsOrder,ye as default};
