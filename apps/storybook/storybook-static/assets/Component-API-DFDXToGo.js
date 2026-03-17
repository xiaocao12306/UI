import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as C}from"./index-CHKtz2QT.js";import{M as D,T,S as k,D as P,C as o,a as d}from"./index-CRCbnjLP.js";import{Primary as i}from"./Button.stories-BXebMVGm.js";import{Default as r}from"./Tag.stories-B2cBemjp.js";import{Default as c}from"./Badge.stories-8OB15MTM.js";import{Default as l}from"./Input.stories-B0shLWty.js";import{Controlled as w,Indeterminate as N,InvalidAndDisabled as S}from"./Checkbox.stories-uXDW01EW.js";import{Controlled as I,DisabledOption as A,InvalidState as O}from"./RadioGroup.stories-D_HXZAke.js";import{Controlled as $,KeyboardToggle as R,InvalidAndDisabled as M}from"./Switch.stories-CYEYO2xX.js";import{Controlled as E,DisabledState as L,InvalidState as H}from"./Select.stories-BxhnCvG-.js";import{Controlled as W,WithCustomEmptyMessage as V,KeyboardDismissPaths as z}from"./Combobox.stories-rrTnfTbf.js";import{Controlled as F,StateMatrix as t,InvalidWithHelper as q}from"./DatePicker.stories-CtHmDyWd.js";import{Default as a,InvalidWithHelper as B}from"./Textarea.stories-jFY1DfdB.js";import{Interactive as h}from"./Dialog.stories-DAHpLifv.js";import{Interactive as K,NonDismissible as U}from"./Drawer.stories-BSiPb9JR.js";import{Default as x,Controlled as Y}from"./Tooltip.stories-C1CWk9BO.js";import{WithInteractiveContent as X,Default as G}from"./Popover.stories-BRWYzcO3.js";import{Default as j}from"./Dropdown.stories-BZcNbMUx.js";import{SearchCommands as p,QueryTelemetry as Q}from"./CommandPalette.stories-BPOkuy6X.js";import{Default as _,WithAction as J,ToneMatrix as Z}from"./Empty.stories-B8aHP2R-.js";import{Default as ee,NarratedStatus as ne,ProfileCard as oe}from"./Skeleton.stories-BH66YHa_.js";import{Default as de,SlowPulse as se,Paused as ie}from"./LoadingDots.stories-BFEsmNby.js";import{Default as re,InstantDone as ce,MultilineCursor as le}from"./StreamingText.stories-CzuS9fGa.js";import{Default as m,Indeterminate as te}from"./Progress.stories-goOgP3te.js";import{Default as ae,Dismissible as he}from"./Alert.stories-CkQEb2Ws.js";import{Default as u,ActionRequired as xe}from"./Toast.stories-CpVJq6Gv.js";import{Default as f,KeyboardNavigationGuide as je}from"./Tabs.stories-Cy2LOKSd.js";import{ReleaseChecklist as pe,SortTelemetry as me}from"./Table.stories-C9VhWdqZ.js";import{Controlled as ue,KeyboardShortcuts as b}from"./Pagination.stories-C8og6NLQ.js";import{WithAiRequestState as fe,Default as be}from"./PromptInput.stories-BwvNydVy.js";import{Conversation as ge,Default as ve}from"./MessageBubble.stories-wEP5cOKd.js";import{Default as g}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as v}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import"./index-BWu4c2F4.js";import"./iframe-BJEg69ls.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-Hgh0jeno.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-Dkm8CRgf.js";import"./index-DgAF9SIF.js";import"./Input-BX0mitHu.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-yJ-B0ZWx.js";import"./Textarea-fTPIcDVw.js";import"./Dialog-Cnf6Xxt0.js";import"./FocusScope-Db3t2k9z.js";import"./DismissableLayer-0Dn_Gr2D.js";function y(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",...C(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Docs/Component API"}),`
`,e.jsx(T,{}),`
`,e.jsx(k,{children:"Primary API Reference"}),`
`,e.jsx(P,{children:e.jsx(n.p,{children:`This page links the most-used Aurora UI components to executable stories and prop controls.
When controls are available, Storybook reflects the runtime API contract directly.`})}),`
`,e.jsx(n.h2,{id:"core",children:"Core"}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(d,{of:i}),`
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
`,e.jsx(n.h3,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(o,{of:w}),`
`,e.jsx(d,{of:N}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"checked"})," / ",e.jsx(n.code,{children:"defaultChecked"})," | ",e.jsx(n.code,{children:"boolean"}),` | Native checkbox controlled/uncontrolled behavior. |
| `,e.jsx(n.code,{children:"indeterminate"})," | ",e.jsx(n.code,{children:"boolean"})," | Sets mixed state semantics (",e.jsx(n.code,{children:'aria-checked="mixed"'}),`). |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Automatically wires helper text into ",e.jsx(n.code,{children:"aria-describedby"}),`. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies invalid state with ",e.jsx(n.code,{children:"aria-invalid"}),". |"]}),`
`,e.jsx(o,{of:S}),`
`,e.jsx(n.h3,{id:"radiogroup",children:"RadioGroup"}),`
`,e.jsx(o,{of:I}),`
`,e.jsx(d,{of:A}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Controlled and uncontrolled single-choice flows. |
| `,e.jsx(n.code,{children:"options[].disabled"})," | ",e.jsx(n.code,{children:"boolean"}),` | Disable specific choices without removing context. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies ",e.jsx(n.code,{children:"aria-invalid"})," to the ",e.jsx(n.code,{children:"radiogroup"}),` container for screen-reader narration. |
| `,e.jsx(n.code,{children:"direction"})," | ",e.jsx(n.code,{children:"'vertical' \\| 'horizontal'"})," | Layout direction for stacked vs inline groups. |"]}),`
`,e.jsx(o,{of:O}),`
`,e.jsx(n.h3,{id:"switch",children:"Switch"}),`
`,e.jsx(o,{of:$}),`
`,e.jsx(d,{of:R}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"checked"})," / ",e.jsx(n.code,{children:"defaultChecked"})," | ",e.jsx(n.code,{children:"boolean"}),` | Controlled and uncontrolled switch flows. |
| `,e.jsx(n.code,{children:"onCheckedChange"})," | ",e.jsx(n.code,{children:"(checked: boolean) => void"})," | Triggered from pointer and keyboard (",e.jsx(n.code,{children:"Space"}),`) interactions. |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Auto-wires helper copy to ",e.jsx(n.code,{children:"aria-describedby"}),`. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies invalid semantics and error-token visual states. |"]}),`
`,e.jsx(o,{of:M}),`
`,e.jsx(n.h3,{id:"select",children:"Select"}),`
`,e.jsx(o,{of:E}),`
`,e.jsx(d,{of:L}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Supports controlled and uncontrolled native select flows. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Adds ",e.jsx(n.code,{children:"aria-invalid"}),` and error-token border/ring semantics. |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | Applies disabled semantics and visual de-emphasis. |"]}),`
`,e.jsx(o,{of:H}),`
`,e.jsx(n.h3,{id:"combobox",children:"Combobox"}),`
`,e.jsx(o,{of:W}),`
`,e.jsx(d,{of:V}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"options"})," | ",e.jsx(n.code,{children:"ComboboxOption[]"}),` | Supports disabled entries and keyword filtering. |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Controlled and uncontrolled modes are both available. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"}),` | Fires when user confirms option by click or Enter. |
| `,e.jsx(n.code,{children:"emptyMessage"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Custom no-result content for search miss scenarios. |
| dismiss policy | `,e.jsx(n.code,{children:"Escape"})," / blur outside | Keeps list open when focus moves into option elements; closes on blur outside root. |"]}),`
`,e.jsx(o,{of:z}),`
`,e.jsx(n.h3,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(o,{of:F}),`
`,e.jsx(d,{of:t}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"})," | Uses native ",e.jsx(n.code,{children:"YYYY-MM-DD"}),` value format. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"}),` | Emits selected date string from native date input. |
| `,e.jsx(n.code,{children:"onChange"})," | ",e.jsx(n.code,{children:"(event) => void"}),` | Optional native change callback for analytics/instrumentation hooks. |
| `,e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," | ",e.jsx(n.code,{children:"string"}),` | Native date range constraints. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Adds ",e.jsx(n.code,{children:"aria-invalid"}),` to communicate validation state. |
| `,e.jsx(n.code,{children:"errorMessageId"})," | ",e.jsx(n.code,{children:"string"})," | Appends error helper ID into ",e.jsx(n.code,{children:"aria-describedby"})," when ",e.jsx(n.code,{children:"invalid"})," is true. |"]}),`
`,e.jsx(o,{of:q}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h3,{id:"textarea",children:"Textarea"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Adds ",e.jsx(n.code,{children:"aria-invalid"}),` and invalid token styles. |
| `,e.jsx(n.code,{children:"readOnly"})," / ",e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"}),` | Preserves semantic behavior and visual state boundaries. |
| `,e.jsx(n.code,{children:"aria-describedby"})," | ",e.jsx(n.code,{children:"string"})," | Supports helper/error hint linkage for form narration. |"]}),`
`,e.jsx(o,{of:B}),`
`,e.jsx(n.h2,{id:"overlay",children:"Overlay"}),`
`,e.jsx(n.h3,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(d,{of:x}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"open"})," / ",e.jsx(n.code,{children:"defaultOpen"})," | ",e.jsx(n.code,{children:"boolean"}),` | Supports controlled and uncontrolled visibility flow. |
| `,e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"(open: boolean) => void"}),` | Emits open-state transitions across pointer and keyboard interactions. |
| `,e.jsx(n.code,{children:"delayDuration"})," / ",e.jsx(n.code,{children:"closeDelay"})," | ",e.jsx(n.code,{children:"number"}),` | Fine-grained pointer open/close timing control. |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"}),` | Prevents open behavior and closes active tooltip state. |
| `,e.jsx(n.code,{children:"side"})," / ",e.jsx(n.code,{children:"sideOffset"})," | ",e.jsx(n.code,{children:"'top' \\| 'right' \\| 'bottom' \\| 'left'"})," / ",e.jsx(n.code,{children:"number"})," | Controls overlay placement around trigger. |"]}),`
`,e.jsx(o,{of:Y}),`
`,e.jsx(n.h3,{id:"dialog",children:"Dialog"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(d,{of:h}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"open"})," / ",e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"boolean"})," / ",e.jsx(n.code,{children:"(open: boolean) => void"}),` | Controlled visibility contract for overlays. |
| `,e.jsx(n.code,{children:"title"})," / ",e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Wires ",e.jsx(n.code,{children:"aria-labelledby"})," + optional ",e.jsx(n.code,{children:"aria-describedby"}),`. |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md' \\| 'lg'"}),` | Overlay width presets. |
| `,e.jsx(n.code,{children:"closeOnEscape"})," / ",e.jsx(n.code,{children:"closeOnOutsidePointer"})," | ",e.jsx(n.code,{children:"boolean"}),` | Controls dismiss policy for blocking vs non-blocking dialogs. |
| `,e.jsx(n.code,{children:"showCloseButton"})," / ",e.jsx(n.code,{children:"closeLabel"})," | ",e.jsx(n.code,{children:"boolean"})," / ",e.jsx(n.code,{children:"string"}),` | Close affordance visibility and accessible label text. |
| `,e.jsx(n.code,{children:"onEscapeKeyDown"})," / ",e.jsx(n.code,{children:"onPointerDownOutside"})," | event callbacks | Inspect or cancel dismiss intent before ",e.jsx(n.code,{children:"onOpenChange(false)"}),". |"]}),`
`,e.jsx(n.h3,{id:"drawer",children:"Drawer"}),`
`,e.jsx(o,{of:K}),`
`,e.jsx(d,{of:U}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"side"})," | ",e.jsx(n.code,{children:"'left' \\| 'right'"}),` | Controls panel placement and border direction. |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Wires helper copy through ",e.jsx(n.code,{children:"aria-describedby"}),`. |
| `,e.jsx(n.code,{children:"closeOnEscape"})," / ",e.jsx(n.code,{children:"closeOnOutsidePointer"})," | ",e.jsx(n.code,{children:"boolean"}),` | Fine-grained dismiss policy for blocking flows. |
| `,e.jsx(n.code,{children:"showCloseButton"})," | ",e.jsx(n.code,{children:"boolean"})," | Allows explicit in-panel action-only dismissal. |"]}),`
`,e.jsx(n.h3,{id:"popover",children:"Popover"}),`
`,e.jsx(o,{of:X}),`
`,e.jsx(d,{of:G}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"triggerLabel"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Trigger button content. |
| `,e.jsx(n.code,{children:"open"})," / ",e.jsx(n.code,{children:"defaultOpen"})," / ",e.jsx(n.code,{children:"onOpenChange"}),` | controlled/uncontrolled | Supports both managed and unmanaged overlay state. |
| `,e.jsx(n.code,{children:"align"})," / ",e.jsx(n.code,{children:"sideOffset"})," | ",e.jsx(n.code,{children:"'start' \\| 'end'"})," / ",e.jsx(n.code,{children:"number"}),` | Horizontal alignment and vertical spacing from trigger. |
| `,e.jsx(n.code,{children:"contentLabel"})," | ",e.jsx(n.code,{children:"string"})," | Accessible name for popover dialog content region. |"]}),`
`,e.jsx(n.h3,{id:"dropdown",children:"Dropdown"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(d,{of:j}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"items"})," | ",e.jsx(n.code,{children:"DropdownItem[]"})," | Each item supports ",e.jsx(n.code,{children:"disabled"})," and ",e.jsx(n.code,{children:"onSelect"}),`. |
| `,e.jsx(n.code,{children:"open"})," / ",e.jsx(n.code,{children:"defaultOpen"})," / ",e.jsx(n.code,{children:"onOpenChange"}),` | controlled/uncontrolled | Works in both controlled and uncontrolled menu flows. |
| keyboard behavior | Arrow / Home / End / Escape / Tab | Roving-focus menu navigation with deterministic close policy. |`]}),`
`,e.jsx(n.h2,{id:"data",children:"Data"}),`
`,e.jsx(n.h3,{id:"tabs",children:"Tabs"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(d,{of:f}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"items"})," | ",e.jsx(n.code,{children:"TabItem[]"})," | Include ",e.jsx(n.code,{children:"disabled"}),` for unavailable states. |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Controlled and uncontrolled modes are both supported. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"})," | Fires only for enabled tabs. |"]}),`
`,e.jsx(o,{of:je}),`
`,e.jsx(n.h3,{id:"table",children:"Table"}),`
`,e.jsx(o,{of:pe}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"columns"})," | ",e.jsx(n.code,{children:"TableColumn<T>[]"})," | ",e.jsx(n.code,{children:"sortable"})," + optional ",e.jsx(n.code,{children:"sortAccessor"}),` for stable sorting behavior. |
| `,e.jsx(n.code,{children:"data"})," | ",e.jsx(n.code,{children:"T[]"})," | Empty arrays render ",e.jsx(n.code,{children:"emptyContent"}),`. |
| `,e.jsx(n.code,{children:"defaultSortKey"})," / ",e.jsx(n.code,{children:"defaultSortDirection"})," | ",e.jsx(n.code,{children:"string"})," / ",e.jsx(n.code,{children:"'asc' \\| 'desc'"})," | Sets initial ",e.jsx(n.code,{children:"aria-sort"}),` and data order when key points to a sortable column. |
| `,e.jsx(n.code,{children:"onSortChange"})," | ",e.jsx(n.code,{children:"(key, direction) => void"})," | Useful for telemetry and analytics. |"]}),`
`,e.jsx(o,{of:me}),`
`,e.jsx(n.h3,{id:"pagination",children:"Pagination"}),`
`,e.jsx(o,{of:ue}),`
`,e.jsx(d,{of:b}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"page"})," | ",e.jsx(n.code,{children:"number"}),` | Current page index (1-based). |
| `,e.jsx(n.code,{children:"pageCount"})," | ",e.jsx(n.code,{children:"number"})," | Total number of pages; values ",e.jsx(n.code,{children:"<= 1"}),` render no UI. |
| `,e.jsx(n.code,{children:"onPageChange"})," | ",e.jsx(n.code,{children:"(page: number) => void"}),` | Called for navigation intent. |
| `,e.jsx(n.code,{children:"showFirstLast"})," | ",e.jsx(n.code,{children:"boolean"}),` | Toggle first/last jump buttons. |
| `,e.jsx(n.code,{children:"siblingCount"})," / ",e.jsx(n.code,{children:"boundaryCount"})," | ",e.jsx(n.code,{children:"number"}),` | Controls visible number tokens before ellipsis. |
| `,e.jsx(n.code,{children:"getItemAriaLabel"})," | ",e.jsx(n.code,{children:"(type, page) => string"})," | Customize pagination control narration for i18n. |"]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsx(n.h3,{id:"empty",children:"Empty"}),`
`,e.jsx(o,{of:_}),`
`,e.jsx(d,{of:J}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"title"})," / ",e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Empty-state headline and helper explanation text. |
| `,e.jsx(n.code,{children:"icon"})," / ",e.jsx(n.code,{children:"action"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Optional visual cue and primary call-to-action slot. |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'default' \\| 'info' \\| 'warning' \\| 'danger'"}),` | Semantic emphasis for empty-state severity context. |
| `,e.jsx(n.code,{children:"align"})," / ",e.jsx(n.code,{children:"titleAs"})," | ",e.jsx(n.code,{children:"'center' \\| 'left'"})," / heading element | Control content layout and heading semantics. |"]}),`
`,e.jsx(o,{of:Z}),`
`,e.jsx(n.h3,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(o,{of:ee}),`
`,e.jsx(d,{of:ne}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'rect' \\| 'text' \\| 'circle'"}),` | Shape selection for block/text/avatar placeholders. |
| `,e.jsx(n.code,{children:"animated"})," | ",e.jsx(n.code,{children:"boolean"}),` | Toggle shimmer animation for reduced-motion or static placeholders. |
| `,e.jsx(n.code,{children:"ariaLabel"})," | ",e.jsx(n.code,{children:"string"}),` | Enables narrated loading status semantics when needed. |
| `,e.jsx(n.code,{children:"width"})," / ",e.jsx(n.code,{children:"height"})," / ",e.jsx(n.code,{children:"radius"})," | ",e.jsx(n.code,{children:"number \\| string"})," | Explicit geometry control for layout matching. |"]}),`
`,e.jsx(o,{of:oe}),`
`,e.jsx(n.h3,{id:"loadingdots",children:"LoadingDots"}),`
`,e.jsx(o,{of:de}),`
`,e.jsx(d,{of:se}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"running"})," | ",e.jsx(n.code,{children:"boolean"}),` | Pause/resume the animated dots. |
| `,e.jsx(n.code,{children:"interval"})," / ",e.jsx(n.code,{children:"dotCount"})," | ",e.jsx(n.code,{children:"number"}),` | Controls animation rhythm and max visible dots. |
| `,e.jsx(n.code,{children:"label"})," / ",e.jsx(n.code,{children:"live"})," | ",e.jsx(n.code,{children:"string"})," / ",e.jsx(n.code,{children:"'polite' \\| 'assertive' \\| 'off'"})," | Screen-reader narration and live-region urgency. |"]}),`
`,e.jsx(o,{of:ie}),`
`,e.jsx(n.h3,{id:"streamingtext",children:"StreamingText"}),`
`,e.jsx(o,{of:re}),`
`,e.jsx(d,{of:ce}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"streaming"})," | ",e.jsx(n.code,{children:"boolean"}),` | Toggle realtime token streaming vs instant completion mode. |
| `,e.jsx(n.code,{children:"speed"})," / ",e.jsx(n.code,{children:"startDelay"})," | ",e.jsx(n.code,{children:"number"}),` | Controls token cadence and delayed start. |
| `,e.jsx(n.code,{children:"cursorChar"})," / ",e.jsx(n.code,{children:"showCursorWhenDone"})," | ",e.jsx(n.code,{children:"string"})," / ",e.jsx(n.code,{children:"boolean"}),` | Cursor visual customization and completion behavior. |
| `,e.jsx(n.code,{children:"onProgress"})," / ",e.jsx(n.code,{children:"onComplete"})," | callbacks | Lifecycle hooks for telemetry and completion flow. |"]}),`
`,e.jsx(o,{of:le}),`
`,e.jsx(n.h3,{id:"progress",children:"Progress"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(d,{of:m}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," | ",e.jsx(n.code,{children:"number"}),` | Determinate range with safe clamp and percent narration. |
| `,e.jsx(n.code,{children:"indeterminate"})," | ",e.jsx(n.code,{children:"boolean"})," | Removes ",e.jsx(n.code,{children:"aria-valuenow"}),` and switches to loading animation branch. |
| `,e.jsx(n.code,{children:"label"})," / ",e.jsx(n.code,{children:"valueText"})," | ",e.jsx(n.code,{children:"string"}),` | Explicit screen-reader label and override value narration text. |
| `,e.jsx(n.code,{children:"tone"})," / ",e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'default' \\| 'success' \\| 'warning' \\| 'danger'"})," / ",e.jsx(n.code,{children:"'sm' \\| 'md'"}),` | Visual emphasis and bar density controls. |
| `,e.jsx(n.code,{children:"showValueLabel"})," | ",e.jsx(n.code,{children:"boolean"})," | Renders helper value text under the progress track. |"]}),`
`,e.jsx(o,{of:te}),`
`,e.jsx(n.h3,{id:"alert",children:"Alert"}),`
`,e.jsx(o,{of:ae}),`
`,e.jsx(d,{of:he}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'info' \\| 'success' \\| 'warning' \\| 'danger'"}),` | Controls visual emphasis and live-region urgency. |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Main alert body copy under title. |
| `,e.jsx(n.code,{children:"onClose"})," | ",e.jsx(n.code,{children:"() => void"}),` | Enables dismiss button branch for actionable notices. |
| `,e.jsx(n.code,{children:"live"})," | ",e.jsx(n.code,{children:"'polite' \\| 'assertive' \\| 'off'"})," | Overrides default aria-live behavior. |"]}),`
`,e.jsx(n.h3,{id:"toast",children:"Toast"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(d,{of:u}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'info' \\| 'success' \\| 'warning' \\| 'danger'"})," | Drives semantics: danger uses ",e.jsx(n.code,{children:'role="alert"'}),`. |
| `,e.jsx(n.code,{children:"duration"})," | ",e.jsx(n.code,{children:"number"})," | Auto-dismiss delay in ms; ",e.jsx(n.code,{children:"0"}),` disables timer. |
| `,e.jsx(n.code,{children:"pauseOnHover"})," | ",e.jsx(n.code,{children:"boolean"}),` | Suspends timer while hovered. |
| `,e.jsx(n.code,{children:"closeOnEscape"})," | ",e.jsx(n.code,{children:"boolean"}),` | Optional keyboard dismiss path. |
| `,e.jsx(n.code,{children:"closeLabel"})," | ",e.jsx(n.code,{children:"string"})," | Customize close-button accessible name for i18n. |"]}),`
`,e.jsx(o,{of:xe}),`
`,e.jsx(n.h2,{id:"ai",children:"AI"}),`
`,e.jsx(n.h3,{id:"commandpalette",children:"CommandPalette"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(d,{of:p}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"commands"})," | ",e.jsx(n.code,{children:"CommandItem[]"})," | ",e.jsx(n.code,{children:"disabled"}),` commands remain visible but non-selectable. |
| `,e.jsx(n.code,{children:"emptyMessage"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Custom empty-state guidance for no-match queries. |
| `,e.jsx(n.code,{children:"onQueryChange"})," | ",e.jsx(n.code,{children:"(query: string) => void"}),` | Use for analytics and AI telemetry pipelines. |
| `,e.jsx(n.code,{children:"getResultsStatusText"})," | ",e.jsx(n.code,{children:"({ query, visibleCount, totalCount }) => string"}),` | Customize screen-reader live narration for result counts and no-match states. |
| `,e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"(open: boolean) => void"}),` | Required controlled dialog state. |
| focus model | combobox + `,e.jsx(n.code,{children:"aria-activedescendant"})," | Options stay outside tab order to keep keyboard flow anchored on the search input. |"]}),`
`,e.jsx(o,{of:Q}),`
`,e.jsx(n.h3,{id:"promptinput",children:"PromptInput"}),`
`,e.jsx(o,{of:fe}),`
`,e.jsx(d,{of:be}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"onSubmit"})," | ",e.jsx(n.code,{children:"(prompt: string) => void"}),` | Triggered by send button or Ctrl/Cmd + Enter shortcut. |
| `,e.jsx(n.code,{children:"submitting"})," | ",e.jsx(n.code,{children:"boolean"}),` | Locks input + button and updates live hint during AI request execution. |
| `,e.jsx(n.code,{children:"placeholder"})," | ",e.jsx(n.code,{children:"string"})," | Optional prompt guidance text. |"]}),`
`,e.jsx(n.h3,{id:"messagebubble",children:"MessageBubble"}),`
`,e.jsx(o,{of:ge}),`
`,e.jsx(d,{of:ve}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"speaker"})," | ",e.jsx(n.code,{children:"'user' \\| 'assistant' \\| 'system'"})," | Applies alignment and semantic labeling (",e.jsx(n.code,{children:"aria-label"}),`). |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Message content body. |"]}),`
`,e.jsx(n.h3,{id:"reasoningpanel",children:"ReasoningPanel"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(d,{of:g}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Toggle trigger title. |
| `,e.jsx(n.code,{children:"steps"})," | ",e.jsx(n.code,{children:"string[]"}),` | Ordered reasoning steps; empty arrays show fallback state. |
| `,e.jsx(n.code,{children:"defaultOpen"})," | ",e.jsx(n.code,{children:"boolean"})," | Initial expanded state for diagnostics-oriented views. |"]}),`
`,e.jsx(n.h3,{id:"streamingcodeblock",children:"StreamingCodeBlock"}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(d,{of:v}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"code"})," | ",e.jsx(n.code,{children:"string"}),` | Source content to progressively reveal. |
| `,e.jsx(n.code,{children:"language"})," | ",e.jsx(n.code,{children:"string"}),` | Header hint for syntax context. |
| `,e.jsx(n.code,{children:"speed"})," | ",e.jsx(n.code,{children:"number"})," | Milliseconds per character; ",e.jsx(n.code,{children:"0"})," renders immediately. |"]})]})}function bn(s={}){const{wrapper:n}={...C(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(y,{...s})}):y(s)}export{bn as default};
