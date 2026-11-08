import{B as r}from"./navigation-actions-BOktVLoV.js";import"./theme-B2QsN4Sz.js";import"./app-symbol.web-BTz7z5QG.js";import"./cashflow-sankey-uokYedbH.js";import"./components-BR6b8uV5.js";import"./iframe-Bt0wZtCA.js";import"./preload-helper-DhRmtqSx.js";const{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,x={title:"Components/Navigation/BookMenuAction",component:r,args:{name:"내 장부",expanded:!1,onPress:c()},argTypes:{name:{control:"text"},expanded:{control:"boolean"},onPress:{control:!1}}},e={play:async({args:n,canvas:o,userEvent:t})=>{await t.click(o.getByRole("button",{name:"장부 메뉴 열기"})),await s(n.onPress).toHaveBeenCalledOnce()}},a={args:{expanded:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '장부 메뉴 열기'
    }));
    await expect(args.onPress).toHaveBeenCalledOnce();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...a.parameters?.docs?.source}}};const B=["Default","Expanded"];export{e as Default,a as Expanded,B as __namedExportsOrder,x as default};
