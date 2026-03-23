import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as gt}from"./Button-B21ouHNm.js";import{T as ft}from"./Textarea-BnJNX4pg.js";import{within as u,expect as a,userEvent as p,fireEvent as m,waitFor as vt}from"./index-DgAF9SIF.js";import{s as Bt,S as St,a as Et}from"./storyShowcase-DlKirntE.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function d({onSubmit:e,submitting:t,placeholder:n,ariaLabel:r,ariaLabelledBy:s,shortcutHint:i="Ctrl/Cmd + Enter to send",submittingHint:C="Generating response..."}){const[y,j]=l.useState(""),R=l.useRef(!1),L=l.useId(),F=y.trim(),A=typeof e=="function",P=A&&!t&&F.length>0,K=t?C:A?i:void 0,D=kt(K),ht=I(n,"Type your prompt..."),N=I(s),wt=N===void 0?I(r)??"Prompt input":void 0,M=()=>!P||!e?!1:(e(F),j(""),!0);return o.jsxs("div",{"aria-busy":t||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[o.jsx(ft,{value:y,onChange:c=>j(c.target.value),placeholder:ht,"aria-label":wt,"aria-labelledby":N,"aria-describedby":D?L:void 0,"aria-keyshortcuts":!t&&A?"Control+Enter Meta+Enter":void 0,disabled:t,rows:4,onCompositionStart:()=>{R.current=!0},onCompositionEnd:()=>{R.current=!1},onKeyDown:c=>{if(!(R.current||Tt(c))&&c.key==="Enter"&&(c.metaKey||c.ctrlKey)){if(c.altKey)return;if(c.repeat){c.preventDefault();return}if(c.defaultPrevented||!P)return;c.preventDefault(),M()}}}),o.jsxs("div",{style:{display:"flex",justifyContent:D?"space-between":"flex-end",alignItems:"center"},children:[D?o.jsx("small",{id:L,"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:K}):null,o.jsx(gt,{onClick:M,disabled:!P,children:t?"Sending...":"Send"})]})]})}function Tt(e){const t=e.nativeEvent;return!!t.isComposing||t.keyCode===229}function I(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function kt(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}d.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const k={...Bt},q={...Et};function H({children:e}){return o.jsx(St,{maxWidth:"min(100%, 640px)",children:e})}const Mt={title:"AI/PromptInput",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}},b=()=>{};function Ht(e){const t=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const x={args:{onSubmit:b}},v={args:{onSubmit:b,ariaLabel:"Prompt placeholder fallback",placeholder:"   "},play:async({canvasElement:e})=>{const n=await u(e).findByRole("textbox",{name:"Prompt placeholder fallback"});await a(n).toHaveAttribute("placeholder","Type your prompt...")}};function Ct(){const[e,t]=l.useState(!1),[n,r]=l.useState("None"),[s,i]=l.useState(0);return o.jsxs(H,{children:[o.jsxs("p",{style:k,children:["Last submitted prompt: ",o.jsx("strong",{style:q,children:n})]}),o.jsxs("p",{style:k,children:["Submission count: ",o.jsx("strong",{style:q,children:s})]}),o.jsx(d,{submitting:e,onSubmit:C=>{t(!0),r(C),i(y=>y+1),window.setTimeout(()=>t(!1),600)}})]})}const h={render:()=>o.jsx(Ct,{}),play:async({canvasElement:e})=>{const t=u(e),n=await t.findByRole("textbox",{name:"Prompt input"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("Ctrl/Cmd + Enter to send");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"));const s=t.getByRole("button",{name:"Send"});await a(s).toBeDisabled(),await p.type(n,"Draft release retrospective"),await a(s).toBeEnabled(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.compositionStart(n),m.keyDown(n,{key:"Enter",ctrlKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.compositionEnd(n),Ht(n),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.keyDown(n,{key:"Enter",ctrlKey:!0,repeat:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.keyDown(n,{key:"Enter",ctrlKey:!0,altKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await p.keyboard("{Control>}{Enter}{/Control}"),await a(t.getByText("Draft release retrospective")).toBeInTheDocument(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const i=t.getByRole("button",{name:"Sending..."});await a(i).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await p.click(i),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await vt(()=>{a(t.getByRole("button",{name:"Send"})).toBeDisabled(),a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter")})}},w={args:{onSubmit:b,ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:e})=>{const t=u(e),n=await t.findByRole("textbox",{name:"智能提示输入"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("按 Ctrl/Cmd + Enter 提交");await a(r).toBeInTheDocument(),await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}},g={args:{onSubmit:b,ariaLabel:"Blank hint prompt",shortcutHint:"   "},play:async({canvasElement:e})=>{const n=await u(e).findByRole("textbox",{name:"Blank hint prompt"});await a(n).not.toHaveAttribute("aria-describedby")}},f={args:{onSubmit:b,ariaLabel:"Numeric hint prompt",shortcutHint:0},play:async({canvasElement:e})=>{const t=u(e),n=await t.findByRole("textbox",{name:"Numeric hint prompt"}),r=t.getByText("0");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}};function Rt(){return o.jsxs(H,{children:[o.jsx("h3",{id:"prompt-heading",style:{margin:0},children:"Prompt workflow heading"}),o.jsx(d,{ariaLabel:"   ",ariaLabelledBy:"prompt-heading"})]})}const B={render:()=>o.jsx(Rt,{}),play:async({canvasElement:e})=>{const n=await u(e).findByRole("textbox",{name:"Prompt workflow heading"});await a(n).toHaveAttribute("aria-labelledby","prompt-heading"),await a(n).not.toHaveAttribute("aria-label")}};function At(){const[e,t]=l.useState(!1),[n,r]=l.useState([]);return o.jsxs(H,{children:[o.jsx(d,{submitting:e,placeholder:"Draft release note and publish checklist...",onSubmit:s=>{t(!0),r([`Queued: ${s}`]),window.setTimeout(()=>r(i=>[...i,"Draft generated"]),120),window.setTimeout(()=>r(i=>[...i,"Fact check complete"]),240),window.setTimeout(()=>{r(i=>[...i,"Ready for publish"]),t(!1)},360)}}),o.jsx("ol",{"aria-label":"AI action feedback",style:{...k,paddingLeft:20},children:n.length>0?n.map(s=>o.jsx("li",{children:s},s)):o.jsx("li",{children:"No actions yet."})})]})}const S={render:()=>o.jsx(At,{}),play:async({canvasElement:e})=>{const t=u(e),n=await t.findByRole("textbox",{name:"Prompt input"});await p.type(n,"Prepare changelog summary"),await p.click(t.getByRole("button",{name:"Send"})),await a(t.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await vt(()=>{a(t.getByText("Draft generated")).toBeInTheDocument(),a(t.getByText("Fact check complete")).toBeInTheDocument(),a(t.getByText("Ready for publish")).toBeInTheDocument()})}},E={render:()=>o.jsxs(H,{children:[o.jsx("p",{style:k,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores prompt focus-visible state."}),o.jsx("button",{type:"button",children:"Before prompt input"}),o.jsx(d,{ariaLabel:"Focus intent prompt"})]}),play:async({canvasElement:e})=>{const t=u(e),n=await t.findByRole("button",{name:"Before prompt input"}),r=t.getByRole("textbox",{name:"Focus intent prompt"});await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r).toHaveAttribute("data-focus-visible","true"),m.mouseDown(r,{button:0,ctrlKey:!0}),await a(r).toHaveAttribute("data-focus-visible","true")}},T={args:{ariaLabel:"No submit handler prompt"},play:async({canvasElement:e})=>{const t=u(e),n=await t.findByRole("textbox",{name:"No submit handler prompt"}),r=t.getByRole("button",{name:"Send"});await p.type(n,"This draft should stay in place"),await a(r).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts");const s=m.keyDown(n,{key:"Enter",ctrlKey:!0});await a(s).toBe(!0),await a(n).toHaveValue("This draft should stay in place")}};var V,W,_;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit
  }
}`,...(_=(W=x.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var z,Q,G;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit,
    ariaLabel: "Prompt placeholder fallback",
    placeholder: "   "
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt placeholder fallback"
    });
    await expect(textbox).toHaveAttribute("placeholder", "Type your prompt...");
  }
}`,...(G=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var O,U,$;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <InteractivePromptInput />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
    await expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    const shortcutHint = canvas.getByText("Ctrl/Cmd + Enter to send");
    await expect(textbox).toHaveAttribute("aria-describedby", shortcutHint.getAttribute("id"));
    const sendButton = canvas.getByRole("button", {
      name: "Send"
    });
    await expect(sendButton).toBeDisabled();
    await userEvent.type(textbox, "Draft release retrospective");
    await expect(sendButton).toBeEnabled();
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.compositionStart(textbox);
    fireEvent.keyDown(textbox, {
      key: "Enter",
      ctrlKey: true
    });
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.compositionEnd(textbox);
    dispatchLegacyImeCtrlEnter(textbox);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.keyDown(textbox, {
      key: "Enter",
      ctrlKey: true,
      repeat: true
    });
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.keyDown(textbox, {
      key: "Enter",
      ctrlKey: true,
      altKey: true
    });
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    await userEvent.keyboard("{Control>}{Enter}{/Control}");
    await expect(canvas.getByText("Draft release retrospective")).toBeInTheDocument();
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");
    const loadingButton = canvas.getByRole("button", {
      name: "Sending..."
    });
    await expect(loadingButton).toBeDisabled();
    await expect(textbox).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.click(loadingButton);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");
    await waitFor(() => {
      expect(canvas.getByRole("button", {
        name: "Send"
      })).toBeDisabled();
      expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    });
  }
}`,...($=(U=h.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var J,X,Y;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit,
    ariaLabel: "智能提示输入",
    shortcutHint: "按 Ctrl/Cmd + Enter 提交",
    submittingHint: "正在生成建议..."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "智能提示输入"
    });
    await expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    const shortcutHint = canvas.getByText("按 Ctrl/Cmd + Enter 提交");
    await expect(shortcutHint).toBeInTheDocument();
    await expect(textbox).toHaveAttribute("aria-describedby", shortcutHint.getAttribute("id"));
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit,
    ariaLabel: "Blank hint prompt",
    shortcutHint: "   "
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Blank hint prompt"
    });
    await expect(textbox).not.toHaveAttribute("aria-describedby");
  }
}`,...(et=(tt=g.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var nt,at,ot;f.parameters={...f.parameters,docs:{...(nt=f.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit,
    ariaLabel: "Numeric hint prompt",
    shortcutHint: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Numeric hint prompt"
    });
    const hint = canvas.getByText("0");
    await expect(textbox).toHaveAttribute("aria-describedby", hint.getAttribute("id"));
  }
}`,...(ot=(at=f.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var rt,st,it;B.parameters={...B.parameters,docs:{...(rt=B.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => <LabelledByPromptInputDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt workflow heading"
    });
    await expect(textbox).toHaveAttribute("aria-labelledby", "prompt-heading");
    await expect(textbox).not.toHaveAttribute("aria-label");
  }
}`,...(it=(st=B.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,ut,lt;S.parameters={...S.parameters,docs:{...(ct=S.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => <MultiActionFeedbackPromptInput />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
    await userEvent.type(textbox, "Prepare changelog summary");
    await userEvent.click(canvas.getByRole("button", {
      name: "Send"
    }));
    await expect(canvas.getByText("Queued: Prepare changelog summary")).toBeInTheDocument();
    await waitFor(() => {
      expect(canvas.getByText("Draft generated")).toBeInTheDocument();
      expect(canvas.getByText("Fact check complete")).toBeInTheDocument();
      expect(canvas.getByText("Ready for publish")).toBeInTheDocument();
    });
  }
}`,...(lt=(ut=S.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var pt,mt,dt;E.parameters={...E.parameters,docs:{...(pt=E.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: () => <PromptInputShowcase>
      <p style={promptTelemetryTextStyle}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores prompt
        focus-visible state.
      </p>
      <button type="button">Before prompt input</button>
      <PromptInput ariaLabel="Focus intent prompt" />
    </PromptInputShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before prompt input"
    });
    const textbox = canvas.getByRole("textbox", {
      name: "Focus intent prompt"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(textbox).toHaveFocus();
    await expect(textbox).toHaveAttribute("data-focus-visible", "true");
    fireEvent.mouseDown(textbox, {
      button: 0,
      ctrlKey: true
    });
    await expect(textbox).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(dt=(mt=E.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var bt,yt,xt;T.parameters={...T.parameters,docs:{...(bt=T.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ariaLabel: "No submit handler prompt"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "No submit handler prompt"
    });
    const sendButton = canvas.getByRole("button", {
      name: "Send"
    });
    await userEvent.type(textbox, "This draft should stay in place");
    await expect(sendButton).toBeDisabled();
    await expect(textbox).not.toHaveAttribute("aria-keyshortcuts");
    const shortcutAccepted = fireEvent.keyDown(textbox, {
      key: "Enter",
      ctrlKey: true
    });
    await expect(shortcutAccepted).toBe(true);
    await expect(textbox).toHaveValue("This draft should stay in place");
  }
}`,...(xt=(yt=T.parameters)==null?void 0:yt.docs)==null?void 0:xt.source}}};const qt=["Default","BlankPlaceholderFallback","WithAiRequestState","LocalizedCopy","BlankHintSemantics","NumericHintSemantics","LabelledByPrecedence","MultiActionFeedback","FocusIntentReentry","WithoutSubmitHandler"];export{g as BlankHintSemantics,v as BlankPlaceholderFallback,x as Default,E as FocusIntentReentry,B as LabelledByPrecedence,w as LocalizedCopy,S as MultiActionFeedback,f as NumericHintSemantics,h as WithAiRequestState,T as WithoutSubmitHandler,qt as __namedExportsOrder,Mt as default};
