import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{within as g,expect as r}from"./index-DgAF9SIF.js";import{b as p}from"./storyShowcase-DlKirntE.js";const I={user:{marginLeft:"auto",background:"var(--aurora-accent-default)",color:"var(--aurora-text-inverse)",borderColor:"transparent"},assistant:{marginRight:"auto",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-primary)",borderColor:"var(--aurora-border-default)"},system:{margin:"0 auto",background:"transparent",color:"var(--aurora-text-secondary)",borderColor:"transparent"}},N={user:"User",assistant:"Assistant",system:"System"};function q(e){if(typeof e=="string"){const a=e.trim().toLowerCase();if(a==="user"||a==="assistant"||a==="system")return a}return"assistant"}function n({speaker:e,children:a,ariaLabel:t,ariaLabelledBy:u,speakerLabel:T,roleDescription:E}){const b=q(e),C=i(T)??N[b],y=i(u),D=y===void 0?i(t)??`${C} message`:void 0,z=i(E)??"message";return s.jsx("article",{"aria-label":D,"aria-labelledby":y,"aria-roledescription":z,"data-speaker":b,style:{maxWidth:"min(680px, 90%)",borderRadius:12,border:"1px solid",padding:"10px 12px",...I[b]},children:a})}function i(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}n.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{speaker:{required:!0,tsType:{name:"union",raw:'"user" | "assistant" | "system"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"system"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},speakerLabel:{required:!1,tsType:{name:"string"},description:""},roleDescription:{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"AI/MessageBubble",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"MessageBubble renders user, assistant, and system variants for chat-style AI interfaces."}}},args:{speaker:"assistant",children:"Here is the generated summary."}},o={play:async({canvasElement:e})=>{const t=g(e).getByRole("article",{name:"Assistant message"});await r(t).toHaveTextContent("Here is the generated summary."),await r(t).toHaveAttribute("aria-roledescription","message")}},l={render:()=>s.jsxs(p,{minHeight:320,children:[s.jsx(n,{speaker:"system",children:"Model switched to release-planning mode."}),s.jsx(n,{speaker:"user",children:"Generate a concise changelog for v0.2."}),s.jsx(n,{speaker:"assistant",children:"Changelog drafted with highlights, breaking changes, and migration tips."})]})},c={render:()=>s.jsxs(p,{minHeight:260,children:[s.jsx(n,{speaker:"system",speakerLabel:"系统",children:"模型已切换到发布模式。"}),s.jsx(n,{speaker:"user",speakerLabel:"产品经理",children:"请输出 v0.2 发布摘要。"}),s.jsx(n,{speaker:"assistant",ariaLabel:"发布助手回复",roleDescription:"聊天消息",children:"已生成按模块拆分的发布摘要。"})]}),play:async({canvasElement:e})=>{const a=g(e);await r(a.getByRole("article",{name:"系统 message"})).toBeInTheDocument(),await r(a.getByRole("article",{name:"产品经理 message"})).toBeInTheDocument();const t=a.getByRole("article",{name:"发布助手回复"});await r(t).toBeInTheDocument(),await r(t).toHaveAttribute("aria-roledescription","聊天消息")}},m={render:()=>s.jsxs(p,{minHeight:220,children:[s.jsx("h3",{id:"message-heading",style:{margin:0},children:"Release assistant message"}),s.jsx(n,{speaker:"assistant",ariaLabel:"Fallback assistant label",ariaLabelledBy:"message-heading",children:"Linked heading naming remains canonical."})]}),play:async({canvasElement:e})=>{const t=g(e).getByRole("article",{name:"Release assistant message"});await r(t).toHaveAttribute("aria-labelledby","message-heading"),await r(t).not.toHaveAttribute("aria-label")}},d={render:()=>s.jsxs(p,{minHeight:240,children:[s.jsx(n,{speaker:" SYSTEM ",children:"System normalized from runtime token."}),s.jsx(n,{speaker:"bot",children:"Fallback to assistant on invalid token."})]}),play:async({canvasElement:e})=>{const a=g(e),t=a.getByRole("article",{name:"System message"});await r(t).toHaveAttribute("data-speaker","system");const u=a.getByRole("article",{name:"Assistant message"});await r(u).toHaveAttribute("data-speaker","assistant")}};var h,v,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const assistantMessage = canvas.getByRole("article", {
      name: "Assistant message"
    });
    await expect(assistantMessage).toHaveTextContent("Here is the generated summary.");
    await expect(assistantMessage).toHaveAttribute("aria-roledescription", "message");
  }
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var B,x,M;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={320}>
      <MessageBubble speaker="system">Model switched to release-planning mode.</MessageBubble>
      <MessageBubble speaker="user">Generate a concise changelog for v0.2.</MessageBubble>
      <MessageBubble speaker="assistant">
        Changelog drafted with highlights, breaking changes, and migration tips.
      </MessageBubble>
    </StoryFullscreenFrame>
}`,...(M=(x=l.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var f,w,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={260}>
      <MessageBubble speaker="system" speakerLabel="系统">
        模型已切换到发布模式。
      </MessageBubble>
      <MessageBubble speaker="user" speakerLabel="产品经理">
        请输出 v0.2 发布摘要。
      </MessageBubble>
      <MessageBubble speaker="assistant" ariaLabel="发布助手回复" roleDescription="聊天消息">
        已生成按模块拆分的发布摘要。
      </MessageBubble>
    </StoryFullscreenFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("article", {
      name: "系统 message"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("article", {
      name: "产品经理 message"
    })).toBeInTheDocument();
    const assistantMessage = canvas.getByRole("article", {
      name: "发布助手回复"
    });
    await expect(assistantMessage).toBeInTheDocument();
    await expect(assistantMessage).toHaveAttribute("aria-roledescription", "聊天消息");
  }
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,L,H;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={220}>
      <h3 id="message-heading" style={{
      margin: 0
    }}>
        Release assistant message
      </h3>
      <MessageBubble speaker="assistant" ariaLabel="Fallback assistant label" ariaLabelledBy="message-heading">
        Linked heading naming remains canonical.
      </MessageBubble>
    </StoryFullscreenFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByRole("article", {
      name: "Release assistant message"
    });
    await expect(message).toHaveAttribute("aria-labelledby", "message-heading");
    await expect(message).not.toHaveAttribute("aria-label");
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,F,j;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={240}>
      <MessageBubble speaker={" SYSTEM " as unknown as "system"}>System normalized from runtime token.</MessageBubble>
      <MessageBubble speaker={"bot" as unknown as "assistant"}>Fallback to assistant on invalid token.</MessageBubble>
    </StoryFullscreenFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const normalizedSystemMessage = canvas.getByRole("article", {
      name: "System message"
    });
    await expect(normalizedSystemMessage).toHaveAttribute("data-speaker", "system");
    const fallbackAssistantMessage = canvas.getByRole("article", {
      name: "Assistant message"
    });
    await expect(fallbackAssistantMessage).toHaveAttribute("data-speaker", "assistant");
  }
}`,...(j=(F=d.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const O=["Default","Conversation","LocalizedNaming","LabelledByPrecedence","RuntimeSpeakerConfigNormalization"];export{l as Conversation,o as Default,m as LabelledByPrecedence,c as LocalizedNaming,d as RuntimeSpeakerConfigNormalization,O as __namedExportsOrder,Y as default};
