import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as C}from"./Button-CnyYpMYZ.js";import{T as j}from"./Textarea-C2HCxZDO.js";import{within as I,userEvent as p,expect as a,waitFor as k,fireEvent as b}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function g({onSubmit:s,submitting:e,placeholder:n="Type your prompt..."}){const[o,r]=c.useState(""),i=c.useRef(!1),l=o.trim(),d=()=>{!l||e||(s==null||s(l),r(""))};return t.jsxs("div",{"aria-busy":e||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[t.jsx(j,{value:o,onChange:u=>r(u.target.value),placeholder:n,"aria-label":"Prompt input",disabled:e,rows:4,onCompositionStart:()=>{i.current=!0},onCompositionEnd:()=>{i.current=!1},onKeyDown:u=>{i.current||u.nativeEvent.isComposing||u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&d()}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("small",{"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:e?"Generating response...":"Ctrl/Cmd + Enter to send"}),t.jsx(C,{onClick:d,disabled:e||!l,children:e?"Sending...":"Send"})]})]})}g.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}}}};const L={title:"AI/PromptInput",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}},m={};function R(){const[s,e]=c.useState(!1),[n,o]=c.useState("None"),[r,i]=c.useState(0);return t.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last submitted prompt: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Submission count: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:r})]}),t.jsx(g,{submitting:s,onSubmit:l=>{e(!0),o(l),i(d=>d+1),window.setTimeout(()=>e(!1),600)}})]})}const x={render:()=>t.jsx(R,{}),play:async({canvasElement:s})=>{const e=I(s),n=await e.findByRole("textbox",{name:"Prompt input"}),o=e.getByRole("button",{name:"Send"});await a(o).toBeDisabled(),await p.type(n,"Draft release retrospective"),await a(o).toBeEnabled(),await a(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),b.compositionStart(n),b.keyDown(n,{key:"Enter",ctrlKey:!0}),await a(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),b.compositionEnd(n),await p.keyboard("{Control>}{Enter}{/Control}"),await a(e.getByText("Draft release retrospective")).toBeInTheDocument(),await a(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const r=e.getByRole("button",{name:"Sending..."});await a(r).toBeDisabled(),await p.click(r),await a(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await k(()=>{a(e.getByRole("button",{name:"Send"})).toBeDisabled()})}};function P(){const[s,e]=c.useState(!1),[n,o]=c.useState([]);return t.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[t.jsx(g,{submitting:s,placeholder:"Draft release note and publish checklist...",onSubmit:r=>{e(!0),o([`Queued: ${r}`]),window.setTimeout(()=>o(i=>[...i,"Draft generated"]),120),window.setTimeout(()=>o(i=>[...i,"Fact check complete"]),240),window.setTimeout(()=>{o(i=>[...i,"Ready for publish"]),e(!1)},360)}}),t.jsx("ol",{"aria-label":"AI action feedback",style:{margin:0,paddingLeft:20,color:"var(--aurora-text-secondary)"},children:n.length>0?n.map(r=>t.jsx("li",{children:r},r)):t.jsx("li",{children:"No actions yet."})})]})}const y={render:()=>t.jsx(P,{}),play:async({canvasElement:s})=>{const e=I(s),n=await e.findByRole("textbox",{name:"Prompt input"});await p.type(n,"Prepare changelog summary"),await p.click(e.getByRole("button",{name:"Send"})),await a(e.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await k(()=>{a(e.getByText("Draft generated")).toBeInTheDocument(),a(e.getByText("Fact check complete")).toBeInTheDocument(),a(e.getByText("Ready for publish")).toBeInTheDocument()})}};var v,w,f;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(f=(w=m.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var B,h,T;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <InteractivePromptInput />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
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
}`,...(T=(h=x.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var S,E,D;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(E=y.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const N=["Default","WithAiRequestState","MultiActionFeedback"];export{m as Default,y as MultiActionFeedback,x as WithAiRequestState,N as __namedExportsOrder,L as default};
