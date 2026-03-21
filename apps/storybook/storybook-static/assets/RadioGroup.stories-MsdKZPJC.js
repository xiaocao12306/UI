import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{a as ce}from"./a11y-CU5SQrEA.js";import{B as ue}from"./Badge-ZJmMstsz.js";import{within as B,userEvent as j,expect as d}from"./index-DgAF9SIF.js";function m({name:r,value:n,defaultValue:i,options:b,onChange:E,ariaLabel:Y,ariaLabelledBy:Z,invalid:ee,"aria-invalid":ae,disabled:y=!1,direction:A="vertical"}){const[te,re]=l.useState(i),[ne,S]=l.useState(null),[oe,u]=l.useState(null),V=l.useRef(null),c=l.useRef(!1),ie=n??te,z=ce(ee,ae),C=z!==void 0,k=q(Z),se=k?void 0:q(Y),le=C?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";l.useEffect(()=>{y&&(S(null),u(null))},[y]),l.useEffect(()=>{var p;const e=((p=V.current)==null?void 0:p.ownerDocument)??document,o=a=>{a.metaKey||a.altKey||a.ctrlKey||(c.current=!0)},s=a=>{"button"in a&&typeof a.button=="number"&&a.button!==0||(c.current=!1)};return e.addEventListener("keydown",o,!0),e.addEventListener("pointerdown",s,!0),e.addEventListener("mousedown",s,!0),e.addEventListener("touchstart",s,!0),()=>{e.removeEventListener("keydown",o,!0),e.removeEventListener("pointerdown",s,!0),e.removeEventListener("mousedown",s,!0),e.removeEventListener("touchstart",s,!0)}},[]);const de=(e,o)=>{y||o||(n===void 0&&re(e),E==null||E(e))};return t.jsx("div",{ref:V,style:{display:A==="horizontal"?"flex":"grid",gap:8,alignItems:A==="horizontal"?"center":void 0},role:"radiogroup","aria-label":k?void 0:se??r,"aria-labelledby":k,"aria-invalid":z,children:b.map(e=>{const o=!!(y||e.disabled),s=ne===e.value,p=oe===e.value;return t.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:o?.7:1,cursor:o?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:r,value:e.value,checked:ie===e.value,disabled:o,"aria-keyshortcuts":o?void 0:"Space","data-focused":s?"true":void 0,"data-focus-visible":p?"true":void 0,onChange:()=>de(e.value,e.disabled),onFocus:a=>{S(e.value),u(pe(a.currentTarget,c.current)?e.value:null)},onBlur:()=>{S(a=>a===e.value?null:a),u(a=>a===e.value?null:a)},onMouseDown:a=>{a.button===0&&(c.current=!1,u(v=>v===e.value?null:v))},onPointerDown:a=>{a.button===0&&(c.current=!1,u(v=>v===e.value?null:v))},onKeyDown:()=>{c.current=!0},style:{marginTop:2,accentColor:C?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:o?"not-allowed":"pointer",boxShadow:s&&p&&!o?`0 0 0 3px ${le}`:"none"}}),t.jsxs("span",{style:{display:"grid",gap:e.description?2:0},children:[t.jsx("span",{children:e.label}),e.description?t.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:e.description}):null]})]},e.value)})})}function q(r){if(typeof r!="string")return;const n=r.trim();return n.length>0?n:void 0}function pe(r,n){try{return r.matches(":focus-visible")||n}catch{return n}}m.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const L=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],he={title:"Form/RadioGroup",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:L}};function ve(){const[r,n]=l.useState("m");return t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),t.jsx(ue,{children:r})]}),t.jsx(m,{name:"Size selection",value:r,onChange:n,options:L})]})}const g={render:()=>t.jsx(ve,{}),play:async({canvasElement:r})=>{const i=B(r).getByRole("radio",{name:/Large/i});await j.click(i),await d(i).toBeChecked()}},f={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},h={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},R={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:r})=>{const n=B(r);await d(n.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await d(n.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},w={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),t.jsx(m,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:L})]}),play:async({canvasElement:r})=>{const i=B(r).getByRole("radiogroup",{name:"Release preference heading"});await d(i).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await d(i).not.toHaveAttribute("aria-label")}},x={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),t.jsx("button",{type:"button",children:"Before radio group"}),t.jsx(m,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:r})=>{const n=B(r),i=await n.findByRole("button",{name:"Before radio group"}),b=n.getByRole("radio",{name:/^Medium/});await j.click(i),await j.tab(),await d(b).toHaveFocus(),await d(b).toHaveAttribute("data-focus-visible","true")}};var I,T,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(T=g.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var F,D,G;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(D=f.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var N,M,P;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var K,O,_;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(_=(O=R.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var $,J,Q;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,W,X;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(W=x.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const Re=["Controlled","InvalidState","DisabledOption","ShortcutHintPrecision","LabelledByPrecedence","FocusIntentReentry"];export{g as Controlled,h as DisabledOption,x as FocusIntentReentry,f as InvalidState,w as LabelledByPrecedence,R as ShortcutHintPrecision,Re as __namedExportsOrder,he as default};
