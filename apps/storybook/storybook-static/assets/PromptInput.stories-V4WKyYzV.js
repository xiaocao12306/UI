import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as N}from"./Button-BMxlc9Nj.js";import{T as V}from"./Textarea-Di0XIAdb.js";import{within as h,expect as o,userEvent as l,waitFor as M,fireEvent as w}from"./index-DgAF9SIF.js";import{s as _,a as z,S as Q}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function g({onSubmit:t,submitting:e,placeholder:a="Type your prompt...",ariaLabel:s,shortcutHint:r="Ctrl/Cmd + Enter to send",submittingHint:i="Generating response..."}){const[p,m]=c.useState(""),v=c.useRef(!1),f=p.trim(),K=G(s)??"Prompt input",T=()=>{!f||e||(t==null||t(f),m(""))};return n.jsxs("div",{"aria-busy":e||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[n.jsx(V,{value:p,onChange:u=>m(u.target.value),placeholder:a,"aria-label":K,"aria-keyshortcuts":"Control+Enter Meta+Enter",disabled:e,rows:4,onCompositionStart:()=>{v.current=!0},onCompositionEnd:()=>{v.current=!1},onKeyDown:u=>{v.current||W(u)||u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&T()}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("small",{"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:e?i:r}),n.jsx(N,{onClick:T,disabled:e||!f,children:e?"Sending...":"Send"})]})]})}function W(t){const e=t.nativeEvent;return!!e.isComposing||e.keyCode===229}function G(t){if(typeof t=="string"&&t.trim().length>0)return t.trim()}g.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const B={..._},E={...z};function q({children:t}){return n.jsx(Q,{maxWidth:"min(100%, 640px)",children:t})}const oe={title:"AI/PromptInput",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}};function O(t){const e=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),t.dispatchEvent(e)}const d={};function U(){const[t,e]=c.useState(!1),[a,s]=c.useState("None"),[r,i]=c.useState(0);return n.jsxs(q,{children:[n.jsxs("p",{style:B,children:["Last submitted prompt: ",n.jsx("strong",{style:E,children:a})]}),n.jsxs("p",{style:B,children:["Submission count: ",n.jsx("strong",{style:E,children:r})]}),n.jsx(g,{submitting:t,onSubmit:p=>{e(!0),s(p),i(m=>m+1),window.setTimeout(()=>e(!1),600)}})]})}const y={render:()=>n.jsx(U,{}),play:async({canvasElement:t})=>{const e=h(t),a=await e.findByRole("textbox",{name:"Prompt input"});await o(a).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const s=e.getByRole("button",{name:"Send"});await o(s).toBeDisabled(),await l.type(a,"Draft release retrospective"),await o(s).toBeEnabled(),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),w.compositionStart(a),w.keyDown(a,{key:"Enter",ctrlKey:!0}),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),w.compositionEnd(a),O(a),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await l.keyboard("{Control>}{Enter}{/Control}"),await o(e.getByText("Draft release retrospective")).toBeInTheDocument(),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const r=e.getByRole("button",{name:"Sending..."});await o(r).toBeDisabled(),await l.click(r),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await M(()=>{o(e.getByRole("button",{name:"Send"})).toBeDisabled()})}},x={args:{ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:t})=>{const e=h(t),a=await e.findByRole("textbox",{name:"智能提示输入"});await o(a).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter"),await o(e.getByText("按 Ctrl/Cmd + Enter 提交")).toBeInTheDocument()}};function $(){const[t,e]=c.useState(!1),[a,s]=c.useState([]);return n.jsxs(q,{children:[n.jsx(g,{submitting:t,placeholder:"Draft release note and publish checklist...",onSubmit:r=>{e(!0),s([`Queued: ${r}`]),window.setTimeout(()=>s(i=>[...i,"Draft generated"]),120),window.setTimeout(()=>s(i=>[...i,"Fact check complete"]),240),window.setTimeout(()=>{s(i=>[...i,"Ready for publish"]),e(!1)},360)}}),n.jsx("ol",{"aria-label":"AI action feedback",style:{...B,paddingLeft:20},children:a.length>0?a.map(r=>n.jsx("li",{children:r},r)):n.jsx("li",{children:"No actions yet."})})]})}const b={render:()=>n.jsx($,{}),play:async({canvasElement:t})=>{const e=h(t),a=await e.findByRole("textbox",{name:"Prompt input"});await l.type(a,"Prepare changelog summary"),await l.click(e.getByRole("button",{name:"Send"})),await o(e.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await M(()=>{o(e.getByText("Draft generated")).toBeInTheDocument(),o(e.getByText("Fact check complete")).toBeInTheDocument(),o(e.getByText("Ready for publish")).toBeInTheDocument()})}};var S,C,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,R,I;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <InteractivePromptInput />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
    await expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
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
    await userEvent.click(loadingButton);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");
    await waitFor(() => {
      expect(canvas.getByRole("button", {
        name: "Send"
      })).toBeDisabled();
    });
  }
}`,...(I=(R=y.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var j,P,H;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("按 Ctrl/Cmd + Enter 提交")).toBeInTheDocument();
  }
}`,...(H=(P=x.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var A,F,L;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(F=b.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const se=["Default","WithAiRequestState","LocalizedCopy","MultiActionFeedback"];export{d as Default,x as LocalizedCopy,b as MultiActionFeedback,y as WithAiRequestState,se as __namedExportsOrder,oe as default};
