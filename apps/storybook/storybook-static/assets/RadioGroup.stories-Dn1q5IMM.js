import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{a as me}from"./a11y-CU5SQrEA.js";import{B as ve}from"./Badge-ZJmMstsz.js";import{within as B,userEvent as L,expect as d,fireEvent as ye}from"./index-DgAF9SIF.js";function b({name:a,value:n,defaultValue:u,options:c,onChange:S,ariaLabel:ee,ariaLabelledBy:ae,invalid:te,"aria-invalid":re,disabled:f=!1,direction:k="vertical"}){const[ne,oe]=l.useState(u),[ie,j]=l.useState(null),[se,m]=l.useState(null),V=l.useRef(null),p=l.useRef(!1);l.useRef(null);const le=n??ne,z=me(te,re),C=z!==void 0,A=H(ae),ue=A?void 0:H(ee),ce=C?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";l.useEffect(()=>{f&&(j(null),m(null))},[f]),l.useEffect(()=>{},[c]);const de=l.useMemo(()=>{const e=new Map;return c.map(t=>{const o=e.get(t.value)??0;return e.set(t.value,o+1),o===0?t.value:`${t.value}__duplicate-${o}`})},[c]);l.useEffect(()=>{var v;const e=((v=V.current)==null?void 0:v.ownerDocument)??document,t=s=>{s.metaKey||s.altKey||s.ctrlKey||(p.current=!0)},o=s=>{"button"in s&&!q(s.button)||"ctrlKey"in s&&s.ctrlKey||(p.current=!1)};return e.addEventListener("keydown",t,!0),e.addEventListener("pointerdown",o,!0),e.addEventListener("mousedown",o,!0),e.addEventListener("touchstart",o,!0),()=>{e.removeEventListener("keydown",t,!0),e.removeEventListener("pointerdown",o,!0),e.removeEventListener("mousedown",o,!0),e.removeEventListener("touchstart",o,!0)}},[]);const pe=(e,t)=>{f||t||(n===void 0&&oe(e),S==null||S(e))};return r.jsx("div",{ref:V,style:{display:k==="horizontal"?"flex":"grid",gap:8,alignItems:k==="horizontal"?"center":void 0},role:"radiogroup","aria-label":A?void 0:ue??a,"aria-labelledby":A,"aria-orientation":k,"aria-invalid":z,children:c.map((e,t)=>{const o=!!(f||e.disabled),v=ie===t,s=se===t;return r.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:o?.7:1,cursor:o?"not-allowed":"pointer"},children:[r.jsx("input",{type:"radio",name:a,value:e.value,checked:le===e.value,disabled:o,"aria-keyshortcuts":o?void 0:"Space","data-focused":v?"true":void 0,"data-focus-visible":s?"true":void 0,onChange:()=>pe(e.value,e.disabled),onFocus:i=>{j(t),m(be(i.currentTarget,p.current)?t:null)},onBlur:()=>{j(i=>i===t?null:i),m(i=>i===t?null:i)},onMouseDown:i=>{i.button!==0||i.ctrlKey||(p.current=!1,m(y=>y===t?null:y))},onPointerDown:i=>{!q(i.button)||i.ctrlKey||(p.current=!1,m(y=>y===t?null:y))},onKeyDown:()=>{p.current=!0},style:{marginTop:2,accentColor:C?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:o?"not-allowed":"pointer",boxShadow:v&&s&&!o?`0 0 0 3px ${ce}`:"none"}}),r.jsxs("span",{style:{display:"grid",gap:e.description?2:0},children:[r.jsx("span",{children:e.label}),e.description?r.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:e.description}):null]})]},de[t]??`${e.value}__index-${t}`)})})}function H(a){if(typeof a!="string")return;const n=a.trim();return n.length>0?n:void 0}function be(a,n){try{return a.matches(":focus-visible")||n}catch{return n}}function q(a){return typeof a!="number"||a<=0}b.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const I=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],Ee={title:"Form/RadioGroup",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:I}};function fe(){const[a,n]=l.useState("m");return r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),r.jsx(ve,{children:a})]}),r.jsx(b,{name:"Size selection",value:a,onChange:n,options:I})]})}const g={render:()=>r.jsx(fe,{}),play:async({canvasElement:a})=>{const u=B(a).getByRole("radio",{name:/Large/i});await L.click(u),await d(u).toBeChecked()}},h={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},R={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},w={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:a})=>{const n=B(a);await d(n.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await d(n.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},x={render:()=>r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),r.jsx(b,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:I})]}),play:async({canvasElement:a})=>{const u=B(a).getByRole("radiogroup",{name:"Release preference heading"});await d(u).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await d(u).not.toHaveAttribute("aria-label")}},E={render:()=>r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),r.jsx("button",{type:"button",children:"Before radio group"}),r.jsx(b,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:a})=>{const n=B(a),u=await n.findByRole("button",{name:"Before radio group"}),c=n.getByRole("radio",{name:/^Medium/});await L.click(u),await L.tab(),await d(c).toHaveFocus(),await d(c).toHaveAttribute("data-focus-visible","true"),ye.mouseDown(c,{button:0,ctrlKey:!0}),await d(c).toHaveAttribute("data-focus-visible","true")}};var T,D,F;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var K,G,M;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(M=(G=h.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var N,P,_;R.parameters={...R.parameters,docs:{...(N=R.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(P=R.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var $,O,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: "Shortcut hints",
    options: [{
      label: "Enabled radio option",
      value: "enabled"
    }, {
      label: "Disabled radio option",
      value: "disabled",
      disabled: true
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("radio", {
      name: "Enabled radio option"
    })).toHaveAttribute("aria-keyshortcuts", "Space");
    await expect(canvas.getByRole("radio", {
      name: "Disabled radio option"
    })).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(J=(O=w.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var Q,U,W;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(U=x.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(medium, {
      button: 0,
      ctrlKey: true
    });
    await expect(medium).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Be=["Controlled","InvalidState","DisabledOption","ShortcutHintPrecision","LabelledByPrecedence","FocusIntentReentry"];export{g as Controlled,R as DisabledOption,E as FocusIntentReentry,h as InvalidState,x as LabelledByPrecedence,w as ShortcutHintPrecision,Be as __namedExportsOrder,Ee as default};
