import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{within as x,expect as n}from"./index-DgAF9SIF.js";import{b as B}from"./storyShowcase-Bw5VyCj0.js";const L={user:{marginLeft:"auto",background:"var(--aurora-accent-default)",color:"var(--aurora-text-inverse)",borderColor:"transparent"},assistant:{marginRight:"auto",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-primary)",borderColor:"var(--aurora-border-default)"},system:{margin:"0 auto",background:"transparent",color:"var(--aurora-text-secondary)",borderColor:"transparent"}},H={user:"User",assistant:"Assistant",system:"System"};function s({speaker:e,children:r,ariaLabel:t,speakerLabel:k,roleDescription:M}){const f=l(k)??H[e],w=l(t)??`${f} message`,R=l(M)??"message";return a.jsx("article",{"aria-label":w,"aria-roledescription":R,"data-speaker":e,style:{maxWidth:"min(680px, 90%)",borderRadius:12,border:"1px solid",padding:"10px 12px",...L[e]},children:r})}function l(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}s.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{speaker:{required:!0,tsType:{name:"union",raw:'"user" | "assistant" | "system"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"system"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},speakerLabel:{required:!1,tsType:{name:"string"},description:""},roleDescription:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"AI/MessageBubble",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"MessageBubble renders user, assistant, and system variants for chat-style AI interfaces."}}},args:{speaker:"assistant",children:"Here is the generated summary."}},i={play:async({canvasElement:e})=>{const t=x(e).getByRole("article",{name:"Assistant message"});await n(t).toHaveTextContent("Here is the generated summary."),await n(t).toHaveAttribute("aria-roledescription","message")}},o={render:()=>a.jsxs(B,{minHeight:320,children:[a.jsx(s,{speaker:"system",children:"Model switched to release-planning mode."}),a.jsx(s,{speaker:"user",children:"Generate a concise changelog for v0.2."}),a.jsx(s,{speaker:"assistant",children:"Changelog drafted with highlights, breaking changes, and migration tips."})]})},c={render:()=>a.jsxs(B,{minHeight:260,children:[a.jsx(s,{speaker:"system",speakerLabel:"系统",children:"模型已切换到发布模式。"}),a.jsx(s,{speaker:"user",speakerLabel:"产品经理",children:"请输出 v0.2 发布摘要。"}),a.jsx(s,{speaker:"assistant",ariaLabel:"发布助手回复",roleDescription:"聊天消息",children:"已生成按模块拆分的发布摘要。"})]}),play:async({canvasElement:e})=>{const r=x(e);await n(r.getByRole("article",{name:"系统 message"})).toBeInTheDocument(),await n(r.getByRole("article",{name:"产品经理 message"})).toBeInTheDocument();const t=r.getByRole("article",{name:"发布助手回复"});await n(t).toBeInTheDocument(),await n(t).toHaveAttribute("aria-roledescription","聊天消息")}};var m,p,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={320}>
      <MessageBubble speaker="system">Model switched to release-planning mode.</MessageBubble>
      <MessageBubble speaker="user">Generate a concise changelog for v0.2.</MessageBubble>
      <MessageBubble speaker="assistant">
        Changelog drafted with highlights, breaking changes, and migration tips.
      </MessageBubble>
    </StoryFullscreenFrame>
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,h,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const A=["Default","Conversation","LocalizedNaming"];export{o as Conversation,i as Default,c as LocalizedNaming,A as __namedExportsOrder,S as default};
