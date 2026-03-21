import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{a as pe}from"./a11y-CU5SQrEA.js";import{B as me}from"./Badge-ZJmMstsz.js";import{within as E,userEvent as L,expect as u}from"./index-DgAF9SIF.js";function b({name:n,value:r,defaultValue:d,options:c,onChange:S,ariaLabel:Z,ariaLabelledBy:ee,invalid:ae,"aria-invalid":te,disabled:g=!1,direction:I="vertical"}){const[ne,re]=i.useState(d),[oe,k]=i.useState(null),[se,m]=i.useState(null),V=i.useRef(null),p=i.useRef(!1);i.useRef(null);const ie=r??ne,z=pe(ae,te),C=z!==void 0,j=q(ee),le=j?void 0:q(Z),de=C?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";i.useEffect(()=>{g&&(k(null),m(null))},[g]),i.useEffect(()=>{},[c]);const ce=i.useMemo(()=>{const e=new Map;return c.map(a=>{const o=e.get(a.value)??0;return e.set(a.value,o+1),o===0?a.value:`${a.value}__duplicate-${o}`})},[c]);i.useEffect(()=>{var v;const e=((v=V.current)==null?void 0:v.ownerDocument)??document,a=l=>{l.metaKey||l.altKey||l.ctrlKey||(p.current=!0)},o=l=>{"button"in l&&typeof l.button=="number"&&l.button!==0||(p.current=!1)};return e.addEventListener("keydown",a,!0),e.addEventListener("pointerdown",o,!0),e.addEventListener("mousedown",o,!0),e.addEventListener("touchstart",o,!0),()=>{e.removeEventListener("keydown",a,!0),e.removeEventListener("pointerdown",o,!0),e.removeEventListener("mousedown",o,!0),e.removeEventListener("touchstart",o,!0)}},[]);const ue=(e,a)=>{g||a||(r===void 0&&re(e),S==null||S(e))};return t.jsx("div",{ref:V,style:{display:I==="horizontal"?"flex":"grid",gap:8,alignItems:I==="horizontal"?"center":void 0},role:"radiogroup","aria-label":j?void 0:le??n,"aria-labelledby":j,"aria-invalid":z,children:c.map((e,a)=>{const o=!!(g||e.disabled),v=oe===a,l=se===a;return t.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:o?.7:1,cursor:o?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:n,value:e.value,checked:ie===e.value,disabled:o,"aria-keyshortcuts":o?void 0:"Space","data-focused":v?"true":void 0,"data-focus-visible":l?"true":void 0,onChange:()=>ue(e.value,e.disabled),onFocus:s=>{k(a),m(ve(s.currentTarget,p.current)?a:null)},onBlur:()=>{k(s=>s===a?null:s),m(s=>s===a?null:s)},onMouseDown:s=>{s.button===0&&(p.current=!1,m(y=>y===a?null:y))},onPointerDown:s=>{s.button===0&&(p.current=!1,m(y=>y===a?null:y))},onKeyDown:()=>{p.current=!0},style:{marginTop:2,accentColor:C?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:o?"not-allowed":"pointer",boxShadow:v&&l&&!o?`0 0 0 3px ${de}`:"none"}}),t.jsxs("span",{style:{display:"grid",gap:e.description?2:0},children:[t.jsx("span",{children:e.label}),e.description?t.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:e.description}):null]})]},ce[a]??`${e.value}__index-${a}`)})})}function q(n){if(typeof n!="string")return;const r=n.trim();return r.length>0?r:void 0}function ve(n,r){try{return n.matches(":focus-visible")||r}catch{return r}}b.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const A=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],we={title:"Form/RadioGroup",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:A}};function ye(){const[n,r]=i.useState("m");return t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),t.jsx(me,{children:n})]}),t.jsx(b,{name:"Size selection",value:n,onChange:r,options:A})]})}const f={render:()=>t.jsx(ye,{}),play:async({canvasElement:n})=>{const d=E(n).getByRole("radio",{name:/Large/i});await L.click(d),await u(d).toBeChecked()}},h={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},R={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},w={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:n})=>{const r=E(n);await u(r.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await u(r.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},x={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),t.jsx(b,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:A})]}),play:async({canvasElement:n})=>{const d=E(n).getByRole("radiogroup",{name:"Release preference heading"});await u(d).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await u(d).not.toHaveAttribute("aria-label")}},B={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),t.jsx("button",{type:"button",children:"Before radio group"}),t.jsx(b,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:n})=>{const r=E(n),d=await r.findByRole("button",{name:"Before radio group"}),c=r.getByRole("radio",{name:/^Medium/});await L.click(d),await L.tab(),await u(c).toHaveFocus(),await u(c).toHaveAttribute("data-focus-visible","true")}};var T,H,F;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(H=f.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var D,G,M;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(G=h.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var N,_,K;R.parameters={...R.parameters,docs:{...(N=R.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(_=R.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var P,$,O;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=($=w.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var J,Q,U;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const xe=["Controlled","InvalidState","DisabledOption","ShortcutHintPrecision","LabelledByPrecedence","FocusIntentReentry"];export{f as Controlled,R as DisabledOption,B as FocusIntentReentry,h as InvalidState,x as LabelledByPrecedence,w as ShortcutHintPrecision,xe as __namedExportsOrder,we as default};
