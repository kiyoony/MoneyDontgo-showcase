import{d as l}from"./components-DHLIZEWz.js";import"./theme-CDuz6VZs.js";import"./iframe-DcJx8gya.js";import"./preload-helper-DhRmtqSx.js";const{expect:i,fn:d}=__STORYBOOK_MODULE_TEST__,b={title:"Primitives/AppButton",component:l,args:{label:"거래 저장",variant:"primary",loading:!1,disabled:!1,onPress:d()},argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","secondary","danger"]},loading:{control:"boolean"},disabled:{control:"boolean"},accessibilityLabel:{control:"text"},onPress:{control:!1}}},a={play:async({args:o,canvas:t,userEvent:c})=>{await c.click(t.getByRole("button",{name:"거래 저장"})),await i(o.onPress).toHaveBeenCalledOnce()}},e={args:{label:"임시 저장",variant:"secondary"}},r={args:{label:"삭제",variant:"danger"}},n={args:{label:"저장 중",loading:!0}},s={args:{disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '거래 저장'
    }));
    await expect(args.onPress).toHaveBeenCalledOnce();
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: '임시 저장',
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: '삭제',
    variant: 'danger'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: '저장 중',
    loading: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const y=["Playground","Secondary","Danger","Loading","Disabled"];export{r as Danger,s as Disabled,n as Loading,a as Playground,e as Secondary,y as __namedExportsOrder,b as default};
