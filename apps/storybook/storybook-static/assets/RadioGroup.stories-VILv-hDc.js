import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as Te}from"./a11y-CU5SQrEA.js";import{B as Ce}from"./Badge-ZJmMstsz.js";import{within as p,userEvent as V,expect as l,fireEvent as ze}from"./index-DgAF9SIF.js";function y({name:e,value:n,defaultValue:i,options:c,onChange:j,ariaLabel:we,ariaLabelledBy:Re,invalid:xe,"aria-invalid":Be,disabled:v=!1,direction:D="vertical"}){const C=s.useId(),[Se,Ee]=s.useState(i),[Le,I]=s.useState(null),[Ae,b]=s.useState(null),z=s.useRef(null),m=s.useRef(!1);s.useRef(null),s.useRef(null);const ke=n??Se,q=Te(xe,Be),P=q!==void 0,H=h(Re),je=H?void 0:h(we),De=P?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";s.useEffect(()=>{v&&(I(null),b(null))},[v]),s.useEffect(()=>{},[c]),s.useEffect(()=>{},[c]);const Ie=s.useMemo(()=>{const a=new Map;return c.map(r=>{const o=a.get(r.value)??0;return a.set(r.value,o+1),o===0?r.value:`${r.value}__duplicate-${o}`})},[c]);s.useEffect(()=>{var g;const a=((g=z.current)==null?void 0:g.ownerDocument)??document,r=u=>{u.metaKey||u.altKey||u.ctrlKey||(m.current=!0)},o=u=>{"button"in u&&!_(u.button)||"ctrlKey"in u&&u.ctrlKey||(m.current=!1)};return a.addEventListener("keydown",r,!0),a.addEventListener("pointerdown",o,!0),a.addEventListener("mousedown",o,!0),a.addEventListener("touchstart",o,!0),()=>{a.removeEventListener("keydown",r,!0),a.removeEventListener("pointerdown",o,!0),a.removeEventListener("mousedown",o,!0),a.removeEventListener("touchstart",o,!0)}},[]);const He=(a,r)=>{v||r||(n===void 0&&Ee(a),j==null||j(a))};return t.jsx("div",{ref:z,style:{display:D==="horizontal"?"flex":"grid",gap:8,alignItems:D==="horizontal"?"center":void 0},role:"radiogroup","aria-label":H?void 0:je??e,"aria-labelledby":H,"aria-orientation":D,"aria-invalid":q,"aria-disabled":v||void 0,children:c.map((a,r)=>{const o=!!(v||a.disabled),g=$(a.label),u=$(a.description),F=Le===r,N=Ae===r,O=h(a.ariaLabelledBy),K=O?void 0:h(a.ariaLabel),M=g?`${C}-option-label-${r}`:void 0,G=u?`${C}-option-description-${r}`:void 0,Ve=O??(K?void 0:M);return t.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:o?.7:1,cursor:o?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:e,value:a.value,"aria-labelledby":Ve,"aria-label":K,"aria-describedby":G,checked:ke===a.value,disabled:o,"aria-keyshortcuts":o?void 0:"Space","data-focused":F?"true":void 0,"data-focus-visible":N?"true":void 0,onChange:()=>He(a.value,a.disabled),onFocus:d=>{I(r),b(qe(d.currentTarget,m.current)?r:null)},onBlur:()=>{I(d=>d===r?null:d),b(d=>d===r?null:d)},onMouseDown:d=>{d.button!==0||d.ctrlKey||(m.current=!1,b(f=>f===r?null:f))},onPointerDown:d=>{!_(d.button)||d.ctrlKey||(m.current=!1,b(f=>f===r?null:f))},onKeyDown:()=>{m.current=!0},style:{marginTop:2,accentColor:P?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:o?"not-allowed":"pointer",boxShadow:F&&N&&!o?`0 0 0 3px ${De}`:"none"}}),t.jsxs("span",{style:{display:"grid",gap:u?2:0},children:[g?t.jsx("span",{id:M,children:a.label}):null,u?t.jsx("span",{id:G,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a.description}):null]})]},Ie[r]??`${a.value}__index-${r}`)})})}function h(e){if(typeof e!="string")return;const n=e.trim();return n.length>0?n:void 0}function $(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}function qe(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}function _(e){return typeof e!="number"||e<=0}y.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const T=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],Pe=[{label:t.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),value:"deploy",ariaLabel:"Deploy mode",ariaLabelledBy:"radio-option-heading"},{label:t.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),value:"rollback",ariaLabel:"Rollback mode"}],$e={title:"Form/RadioGroup",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:T}};function Fe(){const[e,n]=s.useState("m");return t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),t.jsx(Ce,{children:e})]}),t.jsx(y,{name:"Size selection",value:e,onChange:n,options:T})]})}const w={render:()=>t.jsx(Fe,{}),play:async({canvasElement:e})=>{const i=p(e).getByRole("radio",{name:/Large/i});await V.click(i),await l(i).toBeChecked()}},R={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},x={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},B={args:{name:"Maintenance window",disabled:!0,defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary"}]},play:async({canvasElement:e})=>{const n=p(e),i=n.getByRole("radiogroup",{name:"Maintenance window"});await l(i).toHaveAttribute("aria-disabled","true"),await l(n.getByRole("radio",{name:"Stable"})).toBeDisabled()}},S={args:{name:"Numeric descriptions",options:[{label:"Priority tier",value:"p0",description:0}]},play:async({canvasElement:e})=>{const n=p(e),i=n.getByText("0"),c=n.getByRole("radio",{name:"Priority tier"});await l(n.getByText("0")).toBeInTheDocument(),await l(c).toHaveAttribute("aria-describedby",i.getAttribute("id"))}},E={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:e})=>{const n=p(e);await l(n.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await l(n.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},L={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),t.jsx(y,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:T})]}),play:async({canvasElement:e})=>{const i=p(e).getByRole("radiogroup",{name:"Release preference heading"});await l(i).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await l(i).not.toHaveAttribute("aria-label")}},A={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radio-option-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Deploy mode"}),t.jsx(y,{name:"Deployment mode fallback",options:Pe,defaultValue:"deploy"})]}),play:async({canvasElement:e})=>{const i=p(e).getByRole("radio",{name:"Deploy mode"});await l(i).toHaveAttribute("aria-labelledby","radio-option-heading"),await l(i).not.toHaveAttribute("aria-label")}},k={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),t.jsx("button",{type:"button",children:"Before radio group"}),t.jsx(y,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:e})=>{const n=p(e),i=await n.findByRole("button",{name:"Before radio group"}),c=n.getByRole("radio",{name:/^Medium/});await V.click(i),await V.tab(),await l(c).toHaveFocus(),await l(c).toHaveAttribute("data-focus-visible","true"),ze.mouseDown(c,{button:0,ctrlKey:!0}),await l(c).toHaveAttribute("data-focus-visible","true")}};var J,Q,U;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    name: "Maintenance window",
    disabled: true,
    defaultValue: "stable",
    options: [{
      label: "Stable",
      value: "stable"
    }, {
      label: "Canary",
      value: "canary"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", {
      name: "Maintenance window"
    });
    await expect(group).toHaveAttribute("aria-disabled", "true");
    await expect(canvas.getByRole("radio", {
      name: "Stable"
    })).toBeDisabled();
  }
}`,...(re=(te=B.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ie,se;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    name: "Numeric descriptions",
    options: [{
      label: "Priority tier",
      value: "p0",
      description: 0
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const description = canvas.getByText("0");
    const radio = canvas.getByRole("radio", {
      name: "Priority tier"
    });
    await expect(canvas.getByText("0")).toBeInTheDocument();
    await expect(radio).toHaveAttribute("aria-describedby", description.getAttribute("id"));
  }
}`,...(se=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,de,ce;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,me;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ye,ve,be;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 340,
    display: "grid",
    gap: 12
  }}>
      <p id="radio-option-heading" style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Deploy mode
      </p>
      <RadioGroup name="Deployment mode fallback" options={iconOptions} defaultValue="deploy" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const deployOption = canvas.getByRole("radio", {
      name: "Deploy mode"
    });
    await expect(deployOption).toHaveAttribute("aria-labelledby", "radio-option-heading");
    await expect(deployOption).not.toHaveAttribute("aria-label");
  }
}`,...(be=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ge,fe,he;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const _e=["Controlled","InvalidState","DisabledOption","GroupDisabledSemantics","NumericDescriptionSemantics","ShortcutHintPrecision","LabelledByPrecedence","OptionLabelledByPrecedence","FocusIntentReentry"];export{w as Controlled,x as DisabledOption,k as FocusIntentReentry,B as GroupDisabledSemantics,R as InvalidState,L as LabelledByPrecedence,S as NumericDescriptionSemantics,A as OptionLabelledByPrecedence,E as ShortcutHintPrecision,_e as __namedExportsOrder,$e as default};
