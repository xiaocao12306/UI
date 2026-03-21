import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as V}from"./Button-COG9o64O.js";import{T as _}from"./Textarea-Di0XIAdb.js";import{within as B,expect as a,userEvent as d,waitFor as q,fireEvent as f}from"./index-DgAF9SIF.js";import{s as z,a as Q,S as W}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function g({onSubmit:e,submitting:t,placeholder:n="Type your prompt...",ariaLabel:r,shortcutHint:i="Ctrl/Cmd + Enter to send",submittingHint:s="Generating response..."}){const[l,p]=c.useState(""),v=c.useRef(!1),T=c.useId(),w=l.trim(),N=O(r)??"Prompt input",E=()=>{!w||t||(e==null||e(w),p(""))};return o.jsxs("div",{"aria-busy":t||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[o.jsx(_,{value:l,onChange:u=>p(u.target.value),placeholder:n,"aria-label":N,"aria-describedby":T,"aria-keyshortcuts":"Control+Enter Meta+Enter",disabled:t,rows:4,onCompositionStart:()=>{v.current=!0},onCompositionEnd:()=>{v.current=!1},onKeyDown:u=>{v.current||G(u)||u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&E()}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("small",{id:T,"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:t?s:i}),o.jsx(V,{onClick:E,disabled:t||!w,children:t?"Sending...":"Send"})]})]})}function G(e){const t=e.nativeEvent;return!!t.isComposing||t.keyCode===229}function O(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}g.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const h={...z},S={...Q};function K({children:e}){return o.jsx(W,{maxWidth:"min(100%, 640px)",children:e})}const rt={title:"AI/PromptInput",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}};function U(e){const t=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const m={};function $(){const[e,t]=c.useState(!1),[n,r]=c.useState("None"),[i,s]=c.useState(0);return o.jsxs(K,{children:[o.jsxs("p",{style:h,children:["Last submitted prompt: ",o.jsx("strong",{style:S,children:n})]}),o.jsxs("p",{style:h,children:["Submission count: ",o.jsx("strong",{style:S,children:i})]}),o.jsx(g,{submitting:e,onSubmit:l=>{t(!0),r(l),s(p=>p+1),window.setTimeout(()=>t(!1),600)}})]})}const y={render:()=>o.jsx($,{}),play:async({canvasElement:e})=>{const t=B(e),n=await t.findByRole("textbox",{name:"Prompt input"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("Ctrl/Cmd + Enter to send");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"));const i=t.getByRole("button",{name:"Send"});await a(i).toBeDisabled(),await d.type(n,"Draft release retrospective"),await a(i).toBeEnabled(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),f.compositionStart(n),f.keyDown(n,{key:"Enter",ctrlKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),f.compositionEnd(n),U(n),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await d.keyboard("{Control>}{Enter}{/Control}"),await a(t.getByText("Draft release retrospective")).toBeInTheDocument(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const s=t.getByRole("button",{name:"Sending..."});await a(s).toBeDisabled(),await d.click(s),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await q(()=>{a(t.getByRole("button",{name:"Send"})).toBeDisabled()})}},x={args:{ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:e})=>{const t=B(e),n=await t.findByRole("textbox",{name:"智能提示输入"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("按 Ctrl/Cmd + Enter 提交");await a(r).toBeInTheDocument(),await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}};function J(){const[e,t]=c.useState(!1),[n,r]=c.useState([]);return o.jsxs(K,{children:[o.jsx(g,{submitting:e,placeholder:"Draft release note and publish checklist...",onSubmit:i=>{t(!0),r([`Queued: ${i}`]),window.setTimeout(()=>r(s=>[...s,"Draft generated"]),120),window.setTimeout(()=>r(s=>[...s,"Fact check complete"]),240),window.setTimeout(()=>{r(s=>[...s,"Ready for publish"]),t(!1)},360)}}),o.jsx("ol",{"aria-label":"AI action feedback",style:{...h,paddingLeft:20},children:n.length>0?n.map(i=>o.jsx("li",{children:i},i)):o.jsx("li",{children:"No actions yet."})})]})}const b={render:()=>o.jsx(J,{}),play:async({canvasElement:e})=>{const t=B(e),n=await t.findByRole("textbox",{name:"Prompt input"});await d.type(n,"Prepare changelog summary"),await d.click(t.getByRole("button",{name:"Send"})),await a(t.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await q(()=>{a(t.getByText("Draft generated")).toBeInTheDocument(),a(t.getByText("Fact check complete")).toBeInTheDocument(),a(t.getByText("Ready for publish")).toBeInTheDocument()})}};var C,k,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var D,H,R;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    await userEvent.click(loadingButton);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");
    await waitFor(() => {
      expect(canvas.getByRole("button", {
        name: "Send"
      })).toBeDisabled();
    });
  }
}`,...(R=(H=y.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var j,A,P;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(A=x.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var F,L,M;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(L=b.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const st=["Default","WithAiRequestState","LocalizedCopy","MultiActionFeedback"];export{m as Default,x as LocalizedCopy,b as MultiActionFeedback,y as WithAiRequestState,st as __namedExportsOrder,rt as default};
