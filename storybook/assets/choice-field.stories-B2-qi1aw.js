import{C as r}from"./choice-field.web--ffNIiid.js";import"./theme-B2QsN4Sz.js";const{expect:o,fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/ChoiceField",component:r,args:{label:"계정 선택",value:"bank",options:[{value:"bank",label:"생활비 통장"},{value:"card",label:"생활 카드"}],onChange:c()}},e={play:async({args:n,canvas:s,userEvent:t})=>{await t.selectOptions(s.getByRole("combobox",{name:"계정 선택"}),"card"),await o(n.onChange).toHaveBeenCalledWith("card")}},a={args:{disabled:!0},play:async({canvas:n})=>{await o(n.getByRole("combobox",{name:"계정 선택"})).toBeDisabled()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.selectOptions(canvas.getByRole('combobox', {
      name: '계정 선택'
    }), 'card');
    await expect(args.onChange).toHaveBeenCalledWith('card');
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('combobox', {
      name: '계정 선택'
    })).toBeDisabled();
  }
}`,...a.parameters?.docs?.source}}};const p=["Select","Disabled"];export{a as Disabled,e as Select,p as __namedExportsOrder,d as default};
