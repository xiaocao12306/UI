# Component Status Matrix

## Tokens
- `globalTokens`: done
- `themePacks` (`core-light`, `core-dark`, `glass`, `neo-brutal`): done
- `componentTokens`: done
- CSS variable helpers (`createThemeVariables`, `createThemeStyleSheet`): done

## Primitives
- `Box`: done
- `Text`: done
- `VisuallyHidden`: done
- `Portal`: done
- `FocusScope`: done
- `DismissableLayer`: done

## React Components
- Form/Input
  - `Button`, `Input`, `FormField`: production-refined
  - `Combobox`: production-refined
  - `Select`: production-refined
  - `Textarea`: production-refined
  - `DatePicker`: done
  - `Checkbox`: production-refined
  - `RadioGroup`: production-refined
  - `Switch`: production-refined
- Data/Navigation
  - `Tabs`: production-refined
  - `Table`: production-refined
  - `Pagination`: done
- Feedback/State
  - `Alert`, `Progress`, `Skeleton`, `Empty`, `LoadingDots`, `StreamingText`: done
  - `Toast`: production-refined
- Overlay
  - `Tooltip`, `Drawer`: done
  - `Dialog`: production-refined
  - `Popover`, `Dropdown`, `CommandPalette`: production-refined
- AI Components
  - `PromptInput`, `MessageBubble`, `ReasoningPanel`, `StreamingCodeBlock`: production-refined

## Demo Coverage
- Basic components: covered
- Form with validation context: covered
- Overlay/navigation: covered
- AI flow and reasoning panel: covered
- Data components (`Tabs`, `Table`): covered
- Data pagination (`Pagination`): covered
- Theme persistence and section anchor navigation: covered
- Data keyboard/sort E2E (`Tabs Home/End`, `Table` sorting): covered
- Data pagination E2E (`Release feed` page switching): covered

## Planned Next (v0.2)
- Storybook 视觉回归实链（待仓库配置 `CHROMATIC_PROJECT_TOKEN` 后产出首次快照基线）
- Release 实发布验证（待仓库配置 `NPM_TOKEN` 后执行真实 npm publish）
