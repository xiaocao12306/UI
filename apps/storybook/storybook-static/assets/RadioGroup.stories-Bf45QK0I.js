import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{a as Oe}from"./a11y-CU5SQrEA.js";import{B as Pe}from"./Badge-ZJmMstsz.js";import{within as m,userEvent as I,expect as l,fireEvent as Fe}from"./index-DgAF9SIF.js";function y({name:e,value:a,defaultValue:n,options:i,onChange:p,ariaLabel:w,ariaLabelledBy:Ee,invalid:Le,"aria-invalid":Ae,disabled:b=!1,direction:H="vertical"}){const M=c.useId(),[De,je]=c.useState(n),[Ce,V]=c.useState(null),[Ie,g]=c.useState(null),O=c.useRef(null),v=c.useRef(!1);c.useRef(null),c.useRef(null);const T=a??De,He=c.useMemo(()=>Ne(i,T),[i,T]),P=Oe(Le,Ae),F=P!==void 0,z=R(Ee),Ve=z?void 0:R(w),Te=F?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";c.useEffect(()=>{b&&(V(null),g(null))},[b]),c.useEffect(()=>{},[i]),c.useEffect(()=>{},[i]);const ze=c.useMemo(()=>{const t=new Map;return i.map(o=>{const s=t.get(o.value)??0;return t.set(o.value,s+1),s===0?o.value:`${o.value}__duplicate-${s}`})},[i]);c.useEffect(()=>{var f;const t=((f=O.current)==null?void 0:f.ownerDocument)??document,o=u=>{u.metaKey||u.altKey||u.ctrlKey||(v.current=!0)},s=u=>{"button"in u&&!U(u.button)||"ctrlKey"in u&&u.ctrlKey||(v.current=!1)};return t.addEventListener("keydown",o,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("touchstart",s,!0),()=>{t.removeEventListener("keydown",o,!0),t.removeEventListener("pointerdown",s,!0),t.removeEventListener("mousedown",s,!0),t.removeEventListener("touchstart",s,!0)}},[]);const qe=(t,o)=>{b||o||T!==t&&(a===void 0&&je(t),p==null||p(t))};return r.jsx("div",{ref:O,style:{display:H==="horizontal"?"flex":"grid",gap:8,alignItems:H==="horizontal"?"center":void 0},role:"radiogroup","aria-label":z?void 0:Ve??e,"aria-labelledby":z,"aria-orientation":H,"aria-invalid":P,"aria-disabled":b||void 0,children:i.map((t,o)=>{const s=!!(b||t.disabled),f=Q(t.label),u=Q(t.description),N=Ce===o,K=Ie===o,G=R(t.ariaLabelledBy),$=G?void 0:R(t.ariaLabel),_=f?`${M}-option-label-${o}`:void 0,J=u?`${M}-option-description-${o}`:void 0,Me=G??($?void 0:_);return r.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:s?.7:1,cursor:s?"not-allowed":"pointer"},children:[r.jsx("input",{type:"radio",name:e,value:t.value,"aria-labelledby":Me,"aria-label":$,"aria-describedby":J,checked:He===o,disabled:s,"aria-keyshortcuts":s?void 0:"Space","data-focused":N?"true":void 0,"data-focus-visible":K?"true":void 0,onChange:()=>qe(t.value,t.disabled),onFocus:d=>{V(o),g(Ke(d.currentTarget,v.current)?o:null)},onBlur:()=>{V(d=>d===o?null:d),g(d=>d===o?null:d)},onMouseDown:d=>{d.button!==0||d.ctrlKey||(v.current=!1,g(h=>h===o?null:h))},onPointerDown:d=>{!U(d.button)||d.ctrlKey||(v.current=!1,g(h=>h===o?null:h))},onKeyDown:()=>{v.current=!0},style:{marginTop:2,accentColor:F?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:s?"not-allowed":"pointer",boxShadow:N&&K&&!s?`0 0 0 3px ${Te}`:"none"}}),r.jsxs("span",{style:{display:"grid",gap:u?2:0},children:[f?r.jsx("span",{id:_,children:t.label}):null,u?r.jsx("span",{id:J,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:t.description}):null]})]},ze[o]??`${t.value}__index-${o}`)})})}function R(e){if(typeof e!="string")return;const a=e.trim();return a.length>0?a:void 0}function Ne(e,a){if(a===void 0)return-1;let n=-1,i=-1;for(let p=0;p<e.length;p+=1){const w=e[p];if(w.value===a&&(n===-1&&(n=p),!w.disabled)){i=p;break}}return i!==-1?i:n}function Q(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}function Ke(e,a){try{return e.matches(":focus-visible")||a}catch{return a}}function U(e){return typeof e!="number"||e<=0}y.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const q=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],Ge=[{label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),value:"deploy",ariaLabel:"Deploy mode",ariaLabelledBy:"radio-option-heading"},{label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),value:"rollback",ariaLabel:"Rollback mode"}],Xe={title:"Form/RadioGroup",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:q}};function $e(){const[e,a]=c.useState("m");return r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),r.jsx(Pe,{children:e})]}),r.jsx(y,{name:"Size selection",value:e,onChange:a,options:q})]})}const x={render:()=>r.jsx($e,{}),play:async({canvasElement:e})=>{const n=m(e).getByRole("radio",{name:/Large/i});await I.click(n),await l(n).toBeChecked()}},B={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},S={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},k={args:{name:"Maintenance window",disabled:!0,defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary"}]},play:async({canvasElement:e})=>{const a=m(e),n=a.getByRole("radiogroup",{name:"Maintenance window"});await l(n).toHaveAttribute("aria-disabled","true"),await l(a.getByRole("radio",{name:"Stable"})).toBeDisabled()}},E={args:{name:"Numeric descriptions",options:[{label:"Priority tier",value:"p0",description:0}]},play:async({canvasElement:e})=>{const a=m(e),n=a.getByText("0"),i=a.getByRole("radio",{name:"Priority tier"});await l(a.getByText("0")).toBeInTheDocument(),await l(i).toHaveAttribute("aria-describedby",n.getAttribute("id"))}},L={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:e})=>{const a=m(e);await l(a.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await l(a.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},A={args:{name:"Duplicate value semantics",value:"react",options:[{label:"React legacy",value:"react",disabled:!0},{label:"React stable",value:"react"},{label:"Vue",value:"vue"}]},play:async({canvasElement:e})=>{const a=m(e),n=a.getByRole("radio",{name:"React legacy"}),i=a.getByRole("radio",{name:"React stable"});await l(n).not.toBeChecked(),await l(i).toBeChecked(),await I.click(n),await l(i).toBeChecked(),await l(n).not.toBeChecked()}},D={render:()=>r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),r.jsx(y,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:q})]}),play:async({canvasElement:e})=>{const n=m(e).getByRole("radiogroup",{name:"Release preference heading"});await l(n).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await l(n).not.toHaveAttribute("aria-label")}},j={render:()=>r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsx("p",{id:"radio-option-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Deploy mode"}),r.jsx(y,{name:"Deployment mode fallback",options:Ge,defaultValue:"deploy"})]}),play:async({canvasElement:e})=>{const n=m(e).getByRole("radio",{name:"Deploy mode"});await l(n).toHaveAttribute("aria-labelledby","radio-option-heading"),await l(n).not.toHaveAttribute("aria-label")}},C={render:()=>r.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),r.jsx("button",{type:"button",children:"Before radio group"}),r.jsx(y,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:e})=>{const a=m(e),n=await a.findByRole("button",{name:"Before radio group"}),i=a.getByRole("radio",{name:/^Medium/});await I.click(n),await I.tab(),await l(i).toHaveFocus(),await l(i).toHaveAttribute("data-focus-visible","true"),Fe.mouseDown(i,{button:0,ctrlKey:!0}),await l(i).toHaveAttribute("data-focus-visible","true")}};var W,X,Y;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,le;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,ce,de;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ve,ye,be;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    name: "Duplicate value semantics",
    value: "react",
    options: [{
      label: "React legacy",
      value: "react",
      disabled: true
    }, {
      label: "React stable",
      value: "react"
    }, {
      label: "Vue",
      value: "vue"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const legacy = canvas.getByRole("radio", {
      name: "React legacy"
    });
    const stable = canvas.getByRole("radio", {
      name: "React stable"
    });
    await expect(legacy).not.toBeChecked();
    await expect(stable).toBeChecked();
    await userEvent.click(legacy);
    await expect(stable).toBeChecked();
    await expect(legacy).not.toBeChecked();
  }
}`,...(be=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var ge,fe,he;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var we,Re,xe;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(xe=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:xe.source}}};var Be,Se,ke;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};const Ye=["Controlled","InvalidState","DisabledOption","GroupDisabledSemantics","NumericDescriptionSemantics","ShortcutHintPrecision","DuplicateValueSingleCheckedSemantics","LabelledByPrecedence","OptionLabelledByPrecedence","FocusIntentReentry"];export{x as Controlled,S as DisabledOption,A as DuplicateValueSingleCheckedSemantics,C as FocusIntentReentry,k as GroupDisabledSemantics,B as InvalidState,D as LabelledByPrecedence,E as NumericDescriptionSemantics,j as OptionLabelledByPrecedence,L as ShortcutHintPrecision,Ye as __namedExportsOrder,Xe as default};
