import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{within as d,expect as n}from"./index-DgAF9SIF.js";import{b as g}from"./storyShowcase-DlKirntE.js";const T={user:{marginLeft:"auto",background:"var(--aurora-accent-default)",color:"var(--aurora-text-inverse)",borderColor:"transparent"},assistant:{marginRight:"auto",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-primary)",borderColor:"var(--aurora-border-default)"},system:{margin:"0 auto",background:"transparent",color:"var(--aurora-text-secondary)",borderColor:"transparent"}},D={user:"User",assistant:"Assistant",system:"System"};function t({speaker:e,children:r,ariaLabel:s,ariaLabelledBy:R,speakerLabel:H,roleDescription:F}){const A=i(H)??D[e],p=i(R),j=p===void 0?i(s)??`${A} message`:void 0,S=i(F)??"message";return a.jsx("article",{"aria-label":j,"aria-labelledby":p,"aria-roledescription":S,"data-speaker":e,style:{maxWidth:"min(680px, 90%)",borderRadius:12,border:"1px solid",padding:"10px 12px",...T[e]},children:r})}function i(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}t.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{speaker:{required:!0,tsType:{name:"union",raw:'"user" | "assistant" | "system"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"system"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},speakerLabel:{required:!1,tsType:{name:"string"},description:""},roleDescription:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"AI/MessageBubble",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"MessageBubble renders user, assistant, and system variants for chat-style AI interfaces."}}},args:{speaker:"assistant",children:"Here is the generated summary."}},o={play:async({canvasElement:e})=>{const s=d(e).getByRole("article",{name:"Assistant message"});await n(s).toHaveTextContent("Here is the generated summary."),await n(s).toHaveAttribute("aria-roledescription","message")}},l={render:()=>a.jsxs(g,{minHeight:320,children:[a.jsx(t,{speaker:"system",children:"Model switched to release-planning mode."}),a.jsx(t,{speaker:"user",children:"Generate a concise changelog for v0.2."}),a.jsx(t,{speaker:"assistant",children:"Changelog drafted with highlights, breaking changes, and migration tips."})]})},c={render:()=>a.jsxs(g,{minHeight:260,children:[a.jsx(t,{speaker:"system",speakerLabel:"系统",children:"模型已切换到发布模式。"}),a.jsx(t,{speaker:"user",speakerLabel:"产品经理",children:"请输出 v0.2 发布摘要。"}),a.jsx(t,{speaker:"assistant",ariaLabel:"发布助手回复",roleDescription:"聊天消息",children:"已生成按模块拆分的发布摘要。"})]}),play:async({canvasElement:e})=>{const r=d(e);await n(r.getByRole("article",{name:"系统 message"})).toBeInTheDocument(),await n(r.getByRole("article",{name:"产品经理 message"})).toBeInTheDocument();const s=r.getByRole("article",{name:"发布助手回复"});await n(s).toBeInTheDocument(),await n(s).toHaveAttribute("aria-roledescription","聊天消息")}},m={render:()=>a.jsxs(g,{minHeight:220,children:[a.jsx("h3",{id:"message-heading",style:{margin:0},children:"Release assistant message"}),a.jsx(t,{speaker:"assistant",ariaLabel:"Fallback assistant label",ariaLabelledBy:"message-heading",children:"Linked heading naming remains canonical."})]}),play:async({canvasElement:e})=>{const s=d(e).getByRole("article",{name:"Release assistant message"});await n(s).toHaveAttribute("aria-labelledby","message-heading"),await n(s).not.toHaveAttribute("aria-label")}};var u,b,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,v,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={320}>
      <MessageBubble speaker="system">Model switched to release-planning mode.</MessageBubble>
      <MessageBubble speaker="user">Generate a concise changelog for v0.2.</MessageBubble>
      <MessageBubble speaker="assistant">
        Changelog drafted with highlights, breaking changes, and migration tips.
      </MessageBubble>
    </StoryFullscreenFrame>
}`,...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var x,k,M;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var f,w,L;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const N=["Default","Conversation","LocalizedNaming","LabelledByPrecedence"];export{l as Conversation,o as Default,m as LabelledByPrecedence,c as LocalizedNaming,N as __namedExportsOrder,q as default};
