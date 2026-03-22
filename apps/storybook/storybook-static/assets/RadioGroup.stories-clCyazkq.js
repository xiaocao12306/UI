import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{a as Oe}from"./a11y-CU5SQrEA.js";import{B as Pe}from"./Badge-ZJmMstsz.js";import{within as m,userEvent as T,expect as s,fireEvent as Fe}from"./index-DgAF9SIF.js";function y({name:e,value:a,defaultValue:o,options:i,onChange:p,ariaLabel:w,ariaLabelledBy:ke,invalid:Le,"aria-invalid":Ae,disabled:b=!1,direction:C="vertical"}){const q=c.useId(),[De,je]=c.useState(o),[Ie,V]=c.useState(null),[Ce,g]=c.useState(null),M=c.useRef(null),v=c.useRef(!1);c.useRef(null),c.useRef(null);const O=a??De,Ve=c.useMemo(()=>Ne(i,O),[i,O]),P=Oe(Le,Ae),F=P!==void 0,H=R(ke),He=H?void 0:R(w),Te=F?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";c.useEffect(()=>{b&&(V(null),g(null))},[b]),c.useEffect(()=>{},[i]),c.useEffect(()=>{},[i]);const ze=c.useMemo(()=>{const n=new Map;return i.map(r=>{const l=n.get(r.value)??0;return n.set(r.value,l+1),l===0?r.value:`${r.value}__duplicate-${l}`})},[i]);c.useEffect(()=>{var f;const n=((f=M.current)==null?void 0:f.ownerDocument)??document,r=u=>{u.metaKey||u.altKey||u.ctrlKey||(v.current=!0)},l=u=>{"button"in u&&!U(u.button)||"ctrlKey"in u&&u.ctrlKey||(v.current=!1)};return n.addEventListener("keydown",r,!0),n.addEventListener("pointerdown",l,!0),n.addEventListener("mousedown",l,!0),n.addEventListener("touchstart",l,!0),()=>{n.removeEventListener("keydown",r,!0),n.removeEventListener("pointerdown",l,!0),n.removeEventListener("mousedown",l,!0),n.removeEventListener("touchstart",l,!0)}},[]);const qe=(n,r)=>{b||r||(a===void 0&&je(n),p==null||p(n))};return t.jsx("div",{ref:M,style:{display:C==="horizontal"?"flex":"grid",gap:8,alignItems:C==="horizontal"?"center":void 0},role:"radiogroup","aria-label":H?void 0:He??e,"aria-labelledby":H,"aria-orientation":C,"aria-invalid":P,"aria-disabled":b||void 0,children:i.map((n,r)=>{const l=!!(b||n.disabled),f=Q(n.label),u=Q(n.description),N=Ie===r,K=Ce===r,G=R(n.ariaLabelledBy),$=G?void 0:R(n.ariaLabel),_=f?`${q}-option-label-${r}`:void 0,J=u?`${q}-option-description-${r}`:void 0,Me=G??($?void 0:_);return t.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:l?.7:1,cursor:l?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:e,value:n.value,"aria-labelledby":Me,"aria-label":$,"aria-describedby":J,checked:Ve===r,disabled:l,"aria-keyshortcuts":l?void 0:"Space","data-focused":N?"true":void 0,"data-focus-visible":K?"true":void 0,onChange:()=>qe(n.value,n.disabled),onFocus:d=>{V(r),g(Ke(d.currentTarget,v.current)?r:null)},onBlur:()=>{V(d=>d===r?null:d),g(d=>d===r?null:d)},onMouseDown:d=>{d.button!==0||d.ctrlKey||(v.current=!1,g(h=>h===r?null:h))},onPointerDown:d=>{!U(d.button)||d.ctrlKey||(v.current=!1,g(h=>h===r?null:h))},onKeyDown:()=>{v.current=!0},style:{marginTop:2,accentColor:F?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:l?"not-allowed":"pointer",boxShadow:N&&K&&!l?`0 0 0 3px ${Te}`:"none"}}),t.jsxs("span",{style:{display:"grid",gap:u?2:0},children:[f?t.jsx("span",{id:_,children:n.label}):null,u?t.jsx("span",{id:J,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:n.description}):null]})]},ze[r]??`${n.value}__index-${r}`)})})}function R(e){if(typeof e!="string")return;const a=e.trim();return a.length>0?a:void 0}function Ne(e,a){if(a===void 0)return-1;let o=-1,i=-1;for(let p=0;p<e.length;p+=1){const w=e[p];if(w.value===a&&(o===-1&&(o=p),!w.disabled)){i=p;break}}return i!==-1?i:o}function Q(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}function Ke(e,a){try{return e.matches(":focus-visible")||a}catch{return a}}function U(e){return typeof e!="number"||e<=0}y.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const z=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],Ge=[{label:t.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),value:"deploy",ariaLabel:"Deploy mode",ariaLabelledBy:"radio-option-heading"},{label:t.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),value:"rollback",ariaLabel:"Rollback mode"}],Xe={title:"Form/RadioGroup",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:z}};function $e(){const[e,a]=c.useState("m");return t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),t.jsx(Pe,{children:e})]}),t.jsx(y,{name:"Size selection",value:e,onChange:a,options:z})]})}const x={render:()=>t.jsx($e,{}),play:async({canvasElement:e})=>{const o=m(e).getByRole("radio",{name:/Large/i});await T.click(o),await s(o).toBeChecked()}},B={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},S={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},E={args:{name:"Maintenance window",disabled:!0,defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary"}]},play:async({canvasElement:e})=>{const a=m(e),o=a.getByRole("radiogroup",{name:"Maintenance window"});await s(o).toHaveAttribute("aria-disabled","true"),await s(a.getByRole("radio",{name:"Stable"})).toBeDisabled()}},k={args:{name:"Numeric descriptions",options:[{label:"Priority tier",value:"p0",description:0}]},play:async({canvasElement:e})=>{const a=m(e),o=a.getByText("0"),i=a.getByRole("radio",{name:"Priority tier"});await s(a.getByText("0")).toBeInTheDocument(),await s(i).toHaveAttribute("aria-describedby",o.getAttribute("id"))}},L={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:e})=>{const a=m(e);await s(a.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await s(a.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},A={args:{name:"Duplicate value semantics",value:"react",options:[{label:"React legacy",value:"react",disabled:!0},{label:"React stable",value:"react"},{label:"Vue",value:"vue"}]},play:async({canvasElement:e})=>{const a=m(e),o=a.getByRole("radio",{name:"React legacy"}),i=a.getByRole("radio",{name:"React stable"});await s(o).not.toBeChecked(),await s(i).toBeChecked()}},D={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),t.jsx(y,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:z})]}),play:async({canvasElement:e})=>{const o=m(e).getByRole("radiogroup",{name:"Release preference heading"});await s(o).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await s(o).not.toHaveAttribute("aria-label")}},j={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radio-option-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Deploy mode"}),t.jsx(y,{name:"Deployment mode fallback",options:Ge,defaultValue:"deploy"})]}),play:async({canvasElement:e})=>{const o=m(e).getByRole("radio",{name:"Deploy mode"});await s(o).toHaveAttribute("aria-labelledby","radio-option-heading"),await s(o).not.toHaveAttribute("aria-label")}},I={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),t.jsx("button",{type:"button",children:"Before radio group"}),t.jsx(y,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:e})=>{const a=m(e),o=await a.findByRole("button",{name:"Before radio group"}),i=a.getByRole("radio",{name:/^Medium/});await T.click(o),await T.tab(),await s(i).toHaveFocus(),await s(i).toHaveAttribute("data-focus-visible","true"),Fe.mouseDown(i,{button:0,ctrlKey:!0}),await s(i).toHaveAttribute("data-focus-visible","true")}};var W,X,Y;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(ae=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ie,le;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,ce,de;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:xe.source}}};var Be,Se,Ee;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};const Ye=["Controlled","InvalidState","DisabledOption","GroupDisabledSemantics","NumericDescriptionSemantics","ShortcutHintPrecision","DuplicateValueSingleCheckedSemantics","LabelledByPrecedence","OptionLabelledByPrecedence","FocusIntentReentry"];export{x as Controlled,S as DisabledOption,A as DuplicateValueSingleCheckedSemantics,I as FocusIntentReentry,E as GroupDisabledSemantics,B as InvalidState,D as LabelledByPrecedence,k as NumericDescriptionSemantics,j as OptionLabelledByPrecedence,L as ShortcutHintPrecision,Ye as __namedExportsOrder,Xe as default};
