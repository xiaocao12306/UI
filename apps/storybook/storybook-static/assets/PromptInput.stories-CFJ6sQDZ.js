import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as W}from"./Button--WiRqiCc.js";import{T as G}from"./Textarea-Db9nbHYK.js";import{within as h,userEvent as u,expect as n,fireEvent as w,waitFor as z}from"./index-DgAF9SIF.js";import{s as O,S as U,a as $}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function l({onSubmit:e,submitting:t,placeholder:a="Type your prompt...",ariaLabel:r,shortcutHint:i="Ctrl/Cmd + Enter to send",submittingHint:s="Generating response..."}){const[d,m]=c.useState(""),B=c.useRef(!1),S=c.useId(),E=d.trim(),Q=X(r)??"Prompt input",C=()=>{!E||t||(e==null||e(E),m(""))};return o.jsxs("div",{"aria-busy":t||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[o.jsx(G,{value:d,onChange:p=>m(p.target.value),placeholder:a,"aria-label":Q,"aria-describedby":S,"aria-keyshortcuts":t?void 0:"Control+Enter Meta+Enter",disabled:t,rows:4,onCompositionStart:()=>{B.current=!0},onCompositionEnd:()=>{B.current=!1},onKeyDown:p=>{B.current||J(p)||p.key==="Enter"&&(p.metaKey||p.ctrlKey)&&C()}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("small",{id:S,"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:t?s:i}),o.jsx(W,{onClick:C,disabled:t||!E,children:t?"Sending...":"Send"})]})]})}function J(e){const t=e.nativeEvent;return!!t.isComposing||t.keyCode===229}function X(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}l.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const f={...O},k={...$};function T({children:e}){return o.jsx(U,{maxWidth:"min(100%, 640px)",children:e})}const ut={title:"AI/PromptInput",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}};function Y(e){const t=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const b={};function Z(){const[e,t]=c.useState(!1),[a,r]=c.useState("None"),[i,s]=c.useState(0);return o.jsxs(T,{children:[o.jsxs("p",{style:f,children:["Last submitted prompt: ",o.jsx("strong",{style:k,children:a})]}),o.jsxs("p",{style:f,children:["Submission count: ",o.jsx("strong",{style:k,children:i})]}),o.jsx(l,{submitting:e,onSubmit:d=>{t(!0),r(d),s(m=>m+1),window.setTimeout(()=>t(!1),600)}})]})}const y={render:()=>o.jsx(Z,{}),play:async({canvasElement:e})=>{const t=h(e),a=await t.findByRole("textbox",{name:"Prompt input"});await n(a).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("Ctrl/Cmd + Enter to send");await n(a).toHaveAttribute("aria-describedby",r.getAttribute("id"));const i=t.getByRole("button",{name:"Send"});await n(i).toBeDisabled(),await u.type(a,"Draft release retrospective"),await n(i).toBeEnabled(),await n(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),w.compositionStart(a),w.keyDown(a,{key:"Enter",ctrlKey:!0}),await n(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),w.compositionEnd(a),Y(a),await n(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await u.keyboard("{Control>}{Enter}{/Control}"),await n(t.getByText("Draft release retrospective")).toBeInTheDocument(),await n(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const s=t.getByRole("button",{name:"Sending..."});await n(s).toBeDisabled(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await u.click(s),await n(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await z(()=>{n(t.getByRole("button",{name:"Send"})).toBeDisabled(),n(a).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter")})}},x={args:{ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:e})=>{const t=h(e),a=await t.findByRole("textbox",{name:"智能提示输入"});await n(a).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("按 Ctrl/Cmd + Enter 提交");await n(r).toBeInTheDocument(),await n(a).toHaveAttribute("aria-describedby",r.getAttribute("id"))}};function tt(){const[e,t]=c.useState(!1),[a,r]=c.useState([]);return o.jsxs(T,{children:[o.jsx(l,{submitting:e,placeholder:"Draft release note and publish checklist...",onSubmit:i=>{t(!0),r([`Queued: ${i}`]),window.setTimeout(()=>r(s=>[...s,"Draft generated"]),120),window.setTimeout(()=>r(s=>[...s,"Fact check complete"]),240),window.setTimeout(()=>{r(s=>[...s,"Ready for publish"]),t(!1)},360)}}),o.jsx("ol",{"aria-label":"AI action feedback",style:{...f,paddingLeft:20},children:a.length>0?a.map(i=>o.jsx("li",{children:i},i)):o.jsx("li",{children:"No actions yet."})})]})}const v={render:()=>o.jsx(tt,{}),play:async({canvasElement:e})=>{const t=h(e),a=await t.findByRole("textbox",{name:"Prompt input"});await u.type(a,"Prepare changelog summary"),await u.click(t.getByRole("button",{name:"Send"})),await n(t.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await z(()=>{n(t.getByText("Draft generated")).toBeInTheDocument(),n(t.getByText("Fact check complete")).toBeInTheDocument(),n(t.getByText("Ready for publish")).toBeInTheDocument()})}},g={render:()=>o.jsxs(T,{children:[o.jsx("p",{style:f,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores prompt focus-visible state."}),o.jsx("button",{type:"button",children:"Before prompt input"}),o.jsx(l,{ariaLabel:"Focus intent prompt"})]}),play:async({canvasElement:e})=>{const t=h(e),a=await t.findByRole("button",{name:"Before prompt input"}),r=t.getByRole("textbox",{name:"Focus intent prompt"});await u.click(a),await u.tab(),await n(r).toHaveFocus(),await n(r).toHaveAttribute("data-focus-visible","true"),w.mouseDown(r,{button:0,ctrlKey:!0}),await n(r).toHaveAttribute("data-focus-visible","true")}};var H,I,R;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...(R=(I=b.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var D,A,j;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(A=y.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var P,F,L;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
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
}`,...(L=(F=x.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,K,q;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var N,V,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(V=g.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const pt=["Default","WithAiRequestState","LocalizedCopy","MultiActionFeedback","FocusIntentReentry"];export{b as Default,g as FocusIntentReentry,x as LocalizedCopy,v as MultiActionFeedback,y as WithAiRequestState,pt as __namedExportsOrder,ut as default};
