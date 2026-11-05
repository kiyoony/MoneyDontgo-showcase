import{j as c}from"./theme-CDuz6VZs.js";import{V as m}from"./components-DHLIZEWz.js";import{C as g}from"./navigation-actions-HEAzkBsN.js";import"./iframe-DcJx8gya.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-DUNO0XpW.js";import"./cashflow-sankey-8Ihdwqu5.js";const{expect:s,fn:i}=__STORYBOOK_MODULE_TEST__,h={title:"Components/Navigation/CompactPrimaryHeader",component:g,decorators:[e=>c.jsx(m,{style:{width:"100%",height:64},children:c.jsx(e,{})})],args:{name:"내 장부",title:"결산",onBookMenu:i(),onRecord:i()},argTypes:{name:{control:"text"},title:{control:"text"},onBookMenu:{control:!1},onRecord:{control:!1}}},n={},a={args:{title:void 0},play:async({args:e,canvas:r,userEvent:t})=>{await t.click(r.getByRole("button",{name:"거래 기록하기"})),await s(e.onRecord).toHaveBeenCalledOnce()}},o={args:{name:"우리 가족의 아주 긴 공동 생활비 장부 이름",title:"자산 현황"},play:async({canvas:e})=>{const r=e.getByRole("button",{name:"장부 메뉴 열기"}).getBoundingClientRect(),t=e.getByRole("heading",{name:"자산 현황"}).getBoundingClientRect(),l=e.getByRole("button",{name:"거래 기록하기"}).getBoundingClientRect();await s(r.right).toBeLessThanOrEqual(t.left),await s(t.right).toBeLessThanOrEqual(l.left)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '거래 기록하기'
    }));
    await expect(args.onRecord).toHaveBeenCalledOnce();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: '우리 가족의 아주 긴 공동 생활비 장부 이름',
    title: '자산 현황'
  },
  play: async ({
    canvas
  }) => {
    const manage = canvas.getByRole('button', {
      name: '장부 메뉴 열기'
    }).getBoundingClientRect();
    const title = canvas.getByRole('heading', {
      name: '자산 현황'
    }).getBoundingClientRect();
    const record = canvas.getByRole('button', {
      name: '거래 기록하기'
    }).getBoundingClientRect();
    await expect(manage.right).toBeLessThanOrEqual(title.left);
    await expect(title.right).toBeLessThanOrEqual(record.left);
  }
}`,...o.parameters?.docs?.source}}};const x=["Default","Home","LongBookName"];export{n as Default,a as Home,o as LongBookName,x as __namedExportsOrder,h as default};
