import{j as i}from"./theme-Bmk8G3Xq.js";import{V as g}from"./components-CrgZFfWO.js";import{C as d}from"./navigation-actions-Brep544C.js";import"./iframe-DcUV9DEb.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-BQYCspdR.js";import"./cashflow-sankey-DMHpqij8.js";import"./ledger-ui-C3eDBkp5.js";const{expect:s,fn:l}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Navigation/CompactPrimaryHeader",component:d,decorators:[e=>i.jsx(g,{style:{width:"100%",height:64},children:i.jsx(e,{})})],args:{name:"내 장부",title:"결산",onBookMenu:l(),onRecord:l()},argTypes:{name:{control:"text"},title:{control:"text"},onBookMenu:{control:!1},onRecord:{control:!1}}},n={},a={args:{title:void 0},play:async({args:e,canvas:t,userEvent:r})=>{await r.click(t.getByRole("button",{name:"거래 기록하기"})),await s(e.onRecord).toHaveBeenCalledOnce()}},o={args:{name:"우리 가족의 아주 긴 공동 생활비 장부 이름",title:"자산 현황"},play:async({args:e,canvas:t})=>{const r=t.getByRole("button",{name:e.name+" 장부 메뉴 열기"}).getBoundingClientRect(),c=t.getByRole("heading",{name:"자산 현황"}).getBoundingClientRect(),m=t.getByRole("button",{name:"거래 기록하기"}).getBoundingClientRect();await s(r.right).toBeLessThanOrEqual(c.left),await s(c.right).toBeLessThanOrEqual(m.left)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    args,
    canvas
  }) => {
    const manage = canvas.getByRole('button', {
      name: args.name + ' 장부 메뉴 열기'
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
}`,...o.parameters?.docs?.source}}};const O=["Default","Home","LongBookName"];export{n as Default,a as Home,o as LongBookName,O as __namedExportsOrder,C as default};
