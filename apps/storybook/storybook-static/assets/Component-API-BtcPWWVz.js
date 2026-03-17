import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as D}from"./index-CHKtz2QT.js";import{M as T,T as k,S as w,D as P,C as o,a as d}from"./index-BUt49GD8.js";import{Primary as s}from"./Button.stories-BXebMVGm.js";import{Default as r}from"./Tag.stories-B2cBemjp.js";import{Default as c}from"./Badge.stories-8OB15MTM.js";import{Default as l}from"./Input.stories-C4V5qBBR.js";import{WithInputControl as t,InheritedControlSemantics as N}from"./FormField.stories-DOKkAx_C.js";import{Controlled as S,Indeterminate as I,InvalidAndDisabled as A}from"./Checkbox.stories-2iuNx61U.js";import{Controlled as O,DisabledOption as R,InvalidState as $}from"./RadioGroup.stories-CKZbtbwc.js";import{Controlled as M,KeyboardToggle as E,InvalidAndDisabled as L}from"./Switch.stories-DFbIpai_.js";import{Controlled as W,DisabledState as H,InvalidState as F}from"./Select.stories-HW8oc7wD.js";import{Controlled as V,WithCustomEmptyMessage as z,KeyboardDismissPaths as q}from"./Combobox.stories-F8-KKptH.js";import{Controlled as B,StateMatrix as a,InvalidWithHelper as K}from"./DatePicker.stories-G-CaqgJY.js";import{Default as h,InvalidWithHelper as U}from"./Textarea.stories-DTOog4lu.js";import{Interactive as x}from"./Dialog.stories-V0lPaEGK.js";import{Interactive as Y,NonDismissible as X}from"./Drawer.stories-BSiPb9JR.js";import{Default as j,Controlled as G}from"./Tooltip.stories-C1CWk9BO.js";import{WithInteractiveContent as Q,Default as _}from"./Popover.stories-CuVs9oXe.js";import{Default as p}from"./Dropdown.stories-Dif_jAQF.js";import{SearchCommands as m,QueryTelemetry as J}from"./CommandPalette.stories-_5CAnDN0.js";import{Default as Z,WithAction as ee,ToneMatrix as ne}from"./Empty.stories-B8aHP2R-.js";import{Default as oe,NarratedStatus as de,ProfileCard as ie}from"./Skeleton.stories-BH66YHa_.js";import{Default as se,SlowPulse as re,Paused as ce}from"./LoadingDots.stories-BFEsmNby.js";import{Default as le,InstantDone as te,MultilineCursor as ae}from"./StreamingText.stories-CzuS9fGa.js";import{Default as u,Indeterminate as he}from"./Progress.stories-goOgP3te.js";import{Default as xe,Dismissible as je}from"./Alert.stories-CkQEb2Ws.js";import{Default as f,ActionRequired as pe}from"./Toast.stories-CpVJq6Gv.js";import{Default as b,KeyboardNavigationGuide as me,ChangeTelemetry as ue}from"./Tabs.stories-DqNEA91V.js";import{ReleaseChecklist as fe,SortTelemetry as be,AccessibleNameWithoutCaption as ge}from"./Table.stories-YMBI_NjP.js";import{Controlled as ve,KeyboardShortcuts as g}from"./Pagination.stories-C8og6NLQ.js";import{WithAiRequestState as ye,Default as Ce}from"./PromptInput.stories-13o5jTlT.js";import{Conversation as De,Default as Te}from"./MessageBubble.stories-wEP5cOKd.js";import{Default as v}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as y}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import"./index-BWu4c2F4.js";import"./iframe-scgoOJc6.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-Hgh0jeno.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-Dkm8CRgf.js";import"./index-DgAF9SIF.js";import"./Input-C1lkqvCi.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-BfGecBuf.js";import"./FormField-BE5Iwla2.js";import"./Textarea-Cv11yY2F.js";import"./Dialog-Cnf6Xxt0.js";import"./FocusScope-Db3t2k9z.js";import"./DismissableLayer-0Dn_Gr2D.js";function C(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",...D(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Docs/Component API"}),`
`,e.jsx(k,{}),`
`,e.jsx(w,{children:"Primary API Reference"}),`
`,e.jsx(P,{children:e.jsx(n.p,{children:`This page links the most-used Aurora UI components to executable stories and prop controls.
When controls are available, Storybook reflects the runtime API contract directly.`})}),`
`,e.jsx(n.h2,{id:"core",children:"Core"}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'solid' \\| 'ghost' \\| 'outline'"}),` | Semantic visual variants without hardcoded color usage. |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md' \\| 'lg'"}),` | Token-aligned button density. |
| `,e.jsx(n.code,{children:"loading"})," / ",e.jsx(n.code,{children:"loadingText"})," | ",e.jsx(n.code,{children:"boolean"})," / ",e.jsx(n.code,{children:"ReactNode"})," | Locks interactions, sets ",e.jsx(n.code,{children:"aria-busy"}),`, and shows deterministic loading copy. |
| native button props | `,e.jsx(n.code,{children:"ButtonHTMLAttributes"})," | Supports ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"onClick"}),", keyboard handlers. |"]}),`
`,e.jsx(n.h3,{id:"tag",children:"Tag"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(d,{of:r}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| native span props | `,e.jsx(n.code,{children:"HTMLAttributes<HTMLSpanElement>"})," | Supports custom ",e.jsx(n.code,{children:"aria-*"})," metadata and style overrides. |"]}),`
`,e.jsx(n.h3,{id:"badge",children:"Badge"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(d,{of:c}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'default' \\| 'success' \\| 'danger'"}),` | Semantic status signal without hardcoded app-level palettes. |
| native span props | `,e.jsx(n.code,{children:"HTMLAttributes<HTMLSpanElement>"})," | Supports custom labels and style overrides for compact status chips. |"]}),`
`,e.jsx(n.h2,{id:"form",children:"Form"}),`
`,e.jsx(n.h3,{id:"input",children:"Input"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(d,{of:l}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies ",e.jsx(n.code,{children:"aria-invalid"}),` and error-token border/ring styles. |
| `,e.jsx(n.code,{children:"readOnly"})," / ",e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"}),` | Preserves semantic behavior and visual state boundaries. |
| `,e.jsx(n.code,{children:"aria-describedby"})," | ",e.jsx(n.code,{children:"string"}),` | Recommended for helper/error narration in forms. |
| native input props | `,e.jsx(n.code,{children:"InputHTMLAttributes"})," | Includes ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"defaultValue"}),", ",e.jsx(n.code,{children:"onChange"}),", ",e.jsx(n.code,{children:"type"}),", and autocomplete controls. |"]}),`
`,e.jsx(n.h3,{id:"formfield",children:"FormField"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(d,{of:t}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Primary accessible name for the wrapped control via generated ",e.jsx(n.code,{children:"htmlFor"}),`. |
| `,e.jsx(n.code,{children:"description"})," / ",e.jsx(n.code,{children:"error"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Auto-merges helper and error IDs into child ",e.jsx(n.code,{children:"aria-describedby"}),` contracts. |
| `,e.jsx(n.code,{children:"required"})," / ",e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"}),` | Field-level semantics merged with child state without dropping existing control props. |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Works with Aurora controls (Input/Select/etc.) and preserves child ",e.jsx(n.code,{children:"aria-*"})," attributes. |"]}),`
`,e.jsx(o,{of:N}),`
`,e.jsx(n.h3,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(o,{of:S}),`
`,e.jsx(d,{of:I}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"checked"})," / ",e.jsx(n.code,{children:"defaultChecked"})," | ",e.jsx(n.code,{children:"boolean"}),` | Native checkbox controlled/uncontrolled behavior. |
| `,e.jsx(n.code,{children:"indeterminate"})," | ",e.jsx(n.code,{children:"boolean"})," | Sets mixed state semantics (",e.jsx(n.code,{children:'aria-checked="mixed"'}),`). |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Automatically wires helper text into ",e.jsx(n.code,{children:"aria-describedby"}),`. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies invalid state with ",e.jsx(n.code,{children:"aria-invalid"}),". |"]}),`
`,e.jsx(o,{of:A}),`
`,e.jsx(n.h3,{id:"radiogroup",children:"RadioGroup"}),`
`,e.jsx(o,{of:O}),`
`,e.jsx(d,{of:R}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Controlled and uncontrolled single-choice flows. |
| `,e.jsx(n.code,{children:"options[].disabled"})," | ",e.jsx(n.code,{children:"boolean"}),` | Disable specific choices without removing context. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies ",e.jsx(n.code,{children:"aria-invalid"})," to the ",e.jsx(n.code,{children:"radiogroup"}),` container for screen-reader narration. |
| `,e.jsx(n.code,{children:"direction"})," | ",e.jsx(n.code,{children:"'vertical' \\| 'horizontal'"})," | Layout direction for stacked vs inline groups. |"]}),`
`,e.jsx(o,{of:$}),`
`,e.jsx(n.h3,{id:"switch",children:"Switch"}),`
`,e.jsx(o,{of:M}),`
`,e.jsx(d,{of:E}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"checked"})," / ",e.jsx(n.code,{children:"defaultChecked"})," | ",e.jsx(n.code,{children:"boolean"}),` | Controlled and uncontrolled switch flows. |
| `,e.jsx(n.code,{children:"onCheckedChange"})," | ",e.jsx(n.code,{children:"(checked: boolean) => void"})," | Triggered from pointer and keyboard (",e.jsx(n.code,{children:"Space"}),`) interactions. |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Auto-wires helper copy to ",e.jsx(n.code,{children:"aria-describedby"}),`. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies invalid semantics and error-token visual states. |"]}),`
`,e.jsx(o,{of:L}),`
`,e.jsx(n.h3,{id:"select",children:"Select"}),`
`,e.jsx(o,{of:W}),`
`,e.jsx(d,{of:H}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Supports controlled and uncontrolled native select flows. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Adds ",e.jsx(n.code,{children:"aria-invalid"}),` and error-token border/ring semantics. |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies disabled semantics and visual de-emphasis. |"]}),`
`,e.jsx(o,{of:F}),`
`,e.jsx(n.h3,{id:"combobox",children:"Combobox"}),`
`,e.jsx(o,{of:V}),`
`,e.jsx(d,{of:z}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"options"})," | ",e.jsx(n.code,{children:"ComboboxOption[]"}),` | Supports disabled entries and keyword filtering. |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Controlled and uncontrolled modes are both available. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"}),` | Fires when user confirms option by click or Enter. |
| `,e.jsx(n.code,{children:"emptyMessage"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Custom no-result content for search miss scenarios. |
| dismiss policy | `,e.jsx(n.code,{children:"Escape"})," / blur outside | Keeps list open when focus moves into option elements; closes on blur outside root. |"]}),`
`,e.jsx(o,{of:q}),`
`,e.jsx(n.h3,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(o,{of:B}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"})," | Uses native ",e.jsx(n.code,{children:"YYYY-MM-DD"}),` value format. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"}),` | Emits selected date string from native date input. |
| `,e.jsx(n.code,{children:"onChange"})," | ",e.jsx(n.code,{children:"(event) => void"}),` | Optional native change callback for analytics/instrumentation hooks. |
| `,e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," | ",e.jsx(n.code,{children:"string"}),` | Native date range constraints. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Adds ",e.jsx(n.code,{children:"aria-invalid"}),` to communicate validation state. |
| `,e.jsx(n.code,{children:"errorMessageId"})," | ",e.jsx(n.code,{children:"string"})," | Appends error helper ID into ",e.jsx(n.code,{children:"aria-describedby"})," when ",e.jsx(n.code,{children:"invalid"})," is true. |"]}),`
`,e.jsx(o,{of:K}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h3,{id:"textarea",children:"Textarea"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(d,{of:h}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Adds ",e.jsx(n.code,{children:"aria-invalid"}),` and invalid token styles. |
| `,e.jsx(n.code,{children:"readOnly"})," / ",e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"}),` | Preserves semantic behavior and visual state boundaries. |
| `,e.jsx(n.code,{children:"aria-describedby"})," | ",e.jsx(n.code,{children:"string"})," | Supports helper/error hint linkage for form narration. |"]}),`
`,e.jsx(o,{of:U}),`
`,e.jsx(n.h2,{id:"overlay",children:"Overlay"}),`
`,e.jsx(n.h3,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(d,{of:j}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"open"})," / ",e.jsx(n.code,{children:"defaultOpen"})," | ",e.jsx(n.code,{children:"boolean"}),` | Supports controlled and uncontrolled visibility flow. |
| `,e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"(open: boolean) => void"}),` | Emits open-state transitions across pointer and keyboard interactions. |
| `,e.jsx(n.code,{children:"delayDuration"})," / ",e.jsx(n.code,{children:"closeDelay"})," | ",e.jsx(n.code,{children:"number"}),` | Fine-grained pointer open/close timing control. |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"}),` | Prevents open behavior and closes active tooltip state. |
| `,e.jsx(n.code,{children:"side"})," / ",e.jsx(n.code,{children:"sideOffset"})," | ",e.jsx(n.code,{children:"'top' \\| 'right' \\| 'bottom' \\| 'left'"})," / ",e.jsx(n.code,{children:"number"})," | Controls overlay placement around trigger. |"]}),`
`,e.jsx(o,{of:G}),`
`,e.jsx(n.h3,{id:"dialog",children:"Dialog"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(d,{of:x}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"open"})," / ",e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"boolean"})," / ",e.jsx(n.code,{children:"(open: boolean) => void"}),` | Controlled visibility contract for overlays. |
| `,e.jsx(n.code,{children:"title"})," / ",e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Wires ",e.jsx(n.code,{children:"aria-labelledby"})," + optional ",e.jsx(n.code,{children:"aria-describedby"}),`. |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md' \\| 'lg'"}),` | Overlay width presets. |
| `,e.jsx(n.code,{children:"closeOnEscape"})," / ",e.jsx(n.code,{children:"closeOnOutsidePointer"})," | ",e.jsx(n.code,{children:"boolean"}),` | Controls dismiss policy for blocking vs non-blocking dialogs. |
| `,e.jsx(n.code,{children:"showCloseButton"})," / ",e.jsx(n.code,{children:"closeLabel"})," | ",e.jsx(n.code,{children:"boolean"})," / ",e.jsx(n.code,{children:"string"}),` | Close affordance visibility and accessible label text. |
| `,e.jsx(n.code,{children:"onEscapeKeyDown"})," / ",e.jsx(n.code,{children:"onPointerDownOutside"})," | event callbacks | Inspect or cancel dismiss intent before ",e.jsx(n.code,{children:"onOpenChange(false)"}),". |"]}),`
`,e.jsx(n.h3,{id:"drawer",children:"Drawer"}),`
`,e.jsx(o,{of:Y}),`
`,e.jsx(d,{of:X}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"side"})," | ",e.jsx(n.code,{children:"'left' \\| 'right'"}),` | Controls panel placement and border direction. |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Wires helper copy through ",e.jsx(n.code,{children:"aria-describedby"}),`. |
| `,e.jsx(n.code,{children:"closeOnEscape"})," / ",e.jsx(n.code,{children:"closeOnOutsidePointer"})," | ",e.jsx(n.code,{children:"boolean"}),` | Fine-grained dismiss policy for blocking flows. |
| `,e.jsx(n.code,{children:"showCloseButton"})," | ",e.jsx(n.code,{children:"boolean"})," | Allows explicit in-panel action-only dismissal. |"]}),`
`,e.jsx(n.h3,{id:"popover",children:"Popover"}),`
`,e.jsx(o,{of:Q}),`
`,e.jsx(d,{of:_}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"triggerLabel"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Trigger button content. |
| `,e.jsx(n.code,{children:"open"})," / ",e.jsx(n.code,{children:"defaultOpen"})," / ",e.jsx(n.code,{children:"onOpenChange"}),` | controlled/uncontrolled | Supports both managed and unmanaged overlay state. |
| `,e.jsx(n.code,{children:"align"})," / ",e.jsx(n.code,{children:"sideOffset"})," | ",e.jsx(n.code,{children:"'start' \\| 'end'"})," / ",e.jsx(n.code,{children:"number"}),` | Horizontal alignment and vertical spacing from trigger. |
| `,e.jsx(n.code,{children:"contentLabel"})," | ",e.jsx(n.code,{children:"string"}),` | Accessible name for popover dialog content region. |
| trigger relation | conditional `,e.jsx(n.code,{children:"aria-controls"})," | Trigger references content ID only while open to avoid dangling ARIA links. |"]}),`
`,e.jsx(n.h3,{id:"dropdown",children:"Dropdown"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(d,{of:p}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"items"})," | ",e.jsx(n.code,{children:"DropdownItem[]"})," | Each item supports ",e.jsx(n.code,{children:"disabled"})," and ",e.jsx(n.code,{children:"onSelect"}),`. |
| `,e.jsx(n.code,{children:"open"})," / ",e.jsx(n.code,{children:"defaultOpen"})," / ",e.jsx(n.code,{children:"onOpenChange"}),` | controlled/uncontrolled | Works in both controlled and uncontrolled menu flows. |
| menu naming | trigger-linked `,e.jsx(n.code,{children:"aria-labelledby"}),` | Menu inherits an accessible name from trigger content for screen-reader context. |
| trigger relation | conditional `,e.jsx(n.code,{children:"aria-controls"}),` | Trigger points to menu ID only when expanded. |
| keyboard behavior | Arrow / Home / End / Escape / Tab | Roving-focus menu navigation with deterministic close policy. |`]}),`
`,e.jsx(n.h2,{id:"data",children:"Data"}),`
`,e.jsx(n.h3,{id:"tabs",children:"Tabs"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(d,{of:b}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"items"})," | ",e.jsx(n.code,{children:"TabItem[]"})," | Include ",e.jsx(n.code,{children:"disabled"}),` for unavailable states. |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Controlled and uncontrolled modes are both supported. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"})," | Fires only for enabled tabs and only when active key changes. |"]}),`
`,e.jsx(o,{of:me}),`
`,e.jsx(o,{of:ue}),`
`,e.jsx(n.h3,{id:"table",children:"Table"}),`
`,e.jsx(o,{of:fe}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"columns"})," | ",e.jsx(n.code,{children:"TableColumn<T>[]"})," | ",e.jsx(n.code,{children:"sortable"})," + optional ",e.jsx(n.code,{children:"sortAccessor"}),` for stable sorting behavior. |
| `,e.jsx(n.code,{children:"data"})," | ",e.jsx(n.code,{children:"T[]"})," | Empty arrays render ",e.jsx(n.code,{children:"emptyContent"}),`. |
| `,e.jsx(n.code,{children:"caption"})," / ",e.jsx(n.code,{children:"ariaLabel"})," | ",e.jsx(n.code,{children:"ReactNode"})," / ",e.jsx(n.code,{children:"string"}),` | Provide an accessible table name with visible caption or screen-reader-only label. |
| `,e.jsx(n.code,{children:"defaultSortKey"})," / ",e.jsx(n.code,{children:"defaultSortDirection"})," | ",e.jsx(n.code,{children:"string"})," / ",e.jsx(n.code,{children:"'asc' \\| 'desc'"})," | Sets initial ",e.jsx(n.code,{children:"aria-sort"}),` and data order when key points to a sortable column. |
| `,e.jsx(n.code,{children:"onSortChange"})," | ",e.jsx(n.code,{children:"(key, direction) => void"})," | Useful for telemetry and analytics. |"]}),`
`,e.jsx(o,{of:be}),`
`,e.jsx(o,{of:ge}),`
`,e.jsx(n.h3,{id:"pagination",children:"Pagination"}),`
`,e.jsx(o,{of:ve}),`
`,e.jsx(d,{of:g}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"page"})," | ",e.jsx(n.code,{children:"number"}),` | Current page index (1-based). |
| `,e.jsx(n.code,{children:"pageCount"})," | ",e.jsx(n.code,{children:"number"})," | Total number of pages; values ",e.jsx(n.code,{children:"<= 1"}),` render no UI. |
| `,e.jsx(n.code,{children:"onPageChange"})," | ",e.jsx(n.code,{children:"(page: number) => void"}),` | Called for navigation intent. |
| `,e.jsx(n.code,{children:"showFirstLast"})," | ",e.jsx(n.code,{children:"boolean"}),` | Toggle first/last jump buttons. |
| `,e.jsx(n.code,{children:"siblingCount"})," / ",e.jsx(n.code,{children:"boundaryCount"})," | ",e.jsx(n.code,{children:"number"}),` | Controls visible number tokens before ellipsis. |
| `,e.jsx(n.code,{children:"getItemAriaLabel"})," | ",e.jsx(n.code,{children:"(type, page) => string"})," | Customize pagination control narration for i18n. |"]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsx(n.h3,{id:"empty",children:"Empty"}),`
`,e.jsx(o,{of:Z}),`
`,e.jsx(d,{of:ee}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"title"})," / ",e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Empty-state headline and helper explanation text. |
| `,e.jsx(n.code,{children:"icon"})," / ",e.jsx(n.code,{children:"action"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Optional visual cue and primary call-to-action slot. |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'default' \\| 'info' \\| 'warning' \\| 'danger'"}),` | Semantic emphasis for empty-state severity context. |
| `,e.jsx(n.code,{children:"align"})," / ",e.jsx(n.code,{children:"titleAs"})," | ",e.jsx(n.code,{children:"'center' \\| 'left'"})," / heading element | Control content layout and heading semantics. |"]}),`
`,e.jsx(o,{of:ne}),`
`,e.jsx(n.h3,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(o,{of:oe}),`
`,e.jsx(d,{of:de}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'rect' \\| 'text' \\| 'circle'"}),` | Shape selection for block/text/avatar placeholders. |
| `,e.jsx(n.code,{children:"animated"})," | ",e.jsx(n.code,{children:"boolean"}),` | Toggle shimmer animation for reduced-motion or static placeholders. |
| `,e.jsx(n.code,{children:"ariaLabel"})," | ",e.jsx(n.code,{children:"string"}),` | Enables narrated loading status semantics when needed. |
| `,e.jsx(n.code,{children:"width"})," / ",e.jsx(n.code,{children:"height"})," / ",e.jsx(n.code,{children:"radius"})," | ",e.jsx(n.code,{children:"number \\| string"})," | Explicit geometry control for layout matching. |"]}),`
`,e.jsx(o,{of:ie}),`
`,e.jsx(n.h3,{id:"loadingdots",children:"LoadingDots"}),`
`,e.jsx(o,{of:se}),`
`,e.jsx(d,{of:re}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"running"})," | ",e.jsx(n.code,{children:"boolean"}),` | Pause/resume the animated dots. |
| `,e.jsx(n.code,{children:"interval"})," / ",e.jsx(n.code,{children:"dotCount"})," | ",e.jsx(n.code,{children:"number"}),` | Controls animation rhythm and max visible dots. |
| `,e.jsx(n.code,{children:"label"})," / ",e.jsx(n.code,{children:"live"})," | ",e.jsx(n.code,{children:"string"})," / ",e.jsx(n.code,{children:"'polite' \\| 'assertive' \\| 'off'"})," | Screen-reader narration and live-region urgency. |"]}),`
`,e.jsx(o,{of:ce}),`
`,e.jsx(n.h3,{id:"streamingtext",children:"StreamingText"}),`
`,e.jsx(o,{of:le}),`
`,e.jsx(d,{of:te}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"streaming"})," | ",e.jsx(n.code,{children:"boolean"}),` | Toggle realtime token streaming vs instant completion mode. |
| `,e.jsx(n.code,{children:"speed"})," / ",e.jsx(n.code,{children:"startDelay"})," | ",e.jsx(n.code,{children:"number"}),` | Controls token cadence and delayed start. |
| `,e.jsx(n.code,{children:"cursorChar"})," / ",e.jsx(n.code,{children:"showCursorWhenDone"})," | ",e.jsx(n.code,{children:"string"})," / ",e.jsx(n.code,{children:"boolean"}),` | Cursor visual customization and completion behavior. |
| `,e.jsx(n.code,{children:"onProgress"})," / ",e.jsx(n.code,{children:"onComplete"})," | callbacks | Lifecycle hooks for telemetry and completion flow. |"]}),`
`,e.jsx(o,{of:ae}),`
`,e.jsx(n.h3,{id:"progress",children:"Progress"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(d,{of:u}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," | ",e.jsx(n.code,{children:"number"}),` | Determinate range with safe clamp and percent narration. |
| `,e.jsx(n.code,{children:"indeterminate"})," | ",e.jsx(n.code,{children:"boolean"})," | Removes ",e.jsx(n.code,{children:"aria-valuenow"}),` and switches to loading animation branch. |
| `,e.jsx(n.code,{children:"label"})," / ",e.jsx(n.code,{children:"valueText"})," | ",e.jsx(n.code,{children:"string"}),` | Explicit screen-reader label and override value narration text. |
| `,e.jsx(n.code,{children:"tone"})," / ",e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'default' \\| 'success' \\| 'warning' \\| 'danger'"})," / ",e.jsx(n.code,{children:"'sm' \\| 'md'"}),` | Visual emphasis and bar density controls. |
| `,e.jsx(n.code,{children:"showValueLabel"})," | ",e.jsx(n.code,{children:"boolean"})," | Renders helper value text under the progress track. |"]}),`
`,e.jsx(o,{of:he}),`
`,e.jsx(n.h3,{id:"alert",children:"Alert"}),`
`,e.jsx(o,{of:xe}),`
`,e.jsx(d,{of:je}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'info' \\| 'success' \\| 'warning' \\| 'danger'"}),` | Controls visual emphasis and live-region urgency. |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Main alert body copy under title. |
| `,e.jsx(n.code,{children:"onClose"})," | ",e.jsx(n.code,{children:"() => void"}),` | Enables dismiss button branch for actionable notices. |
| `,e.jsx(n.code,{children:"live"})," | ",e.jsx(n.code,{children:"'polite' \\| 'assertive' \\| 'off'"})," | Overrides default aria-live behavior. |"]}),`
`,e.jsx(n.h3,{id:"toast",children:"Toast"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(d,{of:f}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'info' \\| 'success' \\| 'warning' \\| 'danger'"})," | Drives semantics: danger uses ",e.jsx(n.code,{children:'role="alert"'}),`. |
| `,e.jsx(n.code,{children:"duration"})," | ",e.jsx(n.code,{children:"number"})," | Auto-dismiss delay in ms; ",e.jsx(n.code,{children:"0"}),` disables timer. |
| `,e.jsx(n.code,{children:"pauseOnHover"})," | ",e.jsx(n.code,{children:"boolean"}),` | Suspends timer while hovered. |
| `,e.jsx(n.code,{children:"closeOnEscape"})," | ",e.jsx(n.code,{children:"boolean"}),` | Optional keyboard dismiss path. |
| `,e.jsx(n.code,{children:"closeLabel"})," | ",e.jsx(n.code,{children:"string"})," | Customize close-button accessible name for i18n. |"]}),`
`,e.jsx(o,{of:pe}),`
`,e.jsx(n.h2,{id:"ai",children:"AI"}),`
`,e.jsx(n.h3,{id:"commandpalette",children:"CommandPalette"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(d,{of:m}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"commands"})," | ",e.jsx(n.code,{children:"CommandItem[]"})," | ",e.jsx(n.code,{children:"disabled"}),` commands remain visible but non-selectable. |
| `,e.jsx(n.code,{children:"emptyMessage"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Custom empty-state guidance for no-match queries. |
| `,e.jsx(n.code,{children:"onQueryChange"})," | ",e.jsx(n.code,{children:"(query: string) => void"}),` | Use for analytics and AI telemetry pipelines. |
| `,e.jsx(n.code,{children:"getResultsStatusText"})," | ",e.jsx(n.code,{children:"({ query, visibleCount, totalCount }) => string"}),` | Customize screen-reader live narration for result counts and no-match states. |
| `,e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"(open: boolean) => void"}),` | Required controlled dialog state. |
| focus model | combobox + `,e.jsx(n.code,{children:"aria-activedescendant"})," | Options stay outside tab order to keep keyboard flow anchored on the search input. |"]}),`
`,e.jsx(o,{of:J}),`
`,e.jsx(n.h3,{id:"promptinput",children:"PromptInput"}),`
`,e.jsx(o,{of:ye}),`
`,e.jsx(d,{of:Ce}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"onSubmit"})," | ",e.jsx(n.code,{children:"(prompt: string) => void"}),` | Triggered by send button or Ctrl/Cmd + Enter shortcut. |
| `,e.jsx(n.code,{children:"submitting"})," | ",e.jsx(n.code,{children:"boolean"}),` | Locks input + button and updates live hint during AI request execution. |
| `,e.jsx(n.code,{children:"placeholder"})," | ",e.jsx(n.code,{children:"string"})," | Optional prompt guidance text. |"]}),`
`,e.jsx(n.h3,{id:"messagebubble",children:"MessageBubble"}),`
`,e.jsx(o,{of:De}),`
`,e.jsx(d,{of:Te}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"speaker"})," | ",e.jsx(n.code,{children:"'user' \\| 'assistant' \\| 'system'"})," | Applies alignment and semantic labeling (",e.jsx(n.code,{children:"aria-label"}),`). |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Message content body. |"]}),`
`,e.jsx(n.h3,{id:"reasoningpanel",children:"ReasoningPanel"}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(d,{of:v}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Toggle trigger title. |
| `,e.jsx(n.code,{children:"steps"})," | ",e.jsx(n.code,{children:"string[]"}),` | Ordered reasoning steps; empty arrays show fallback state. |
| `,e.jsx(n.code,{children:"defaultOpen"})," | ",e.jsx(n.code,{children:"boolean"})," | Initial expanded state for diagnostics-oriented views. |"]}),`
`,e.jsx(n.h3,{id:"streamingcodeblock",children:"StreamingCodeBlock"}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(d,{of:y}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"code"})," | ",e.jsx(n.code,{children:"string"}),` | Source content to progressively reveal. |
| `,e.jsx(n.code,{children:"language"})," | ",e.jsx(n.code,{children:"string"}),` | Header hint for syntax context. |
| `,e.jsx(n.code,{children:"speed"})," | ",e.jsx(n.code,{children:"number"})," | Milliseconds per character; ",e.jsx(n.code,{children:"0"})," renders immediately. |"]})]})}function Tn(i={}){const{wrapper:n}={...D(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(C,{...i})}):C(i)}export{Tn as default};
