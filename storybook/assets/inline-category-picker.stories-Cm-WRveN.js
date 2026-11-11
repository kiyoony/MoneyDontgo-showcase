import{j as l}from"./theme-B2QsN4Sz.js";import"./cashflow-sankey-D85FpS-d.js";import{S as i}from"./components-DvscOU_I.js";import"./iframe-Doe5r-is.js";import{I as p}from"./inline-category-picker-D5o4zmwy.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-BTz7z5QG.js";import"./category-B3c2Fc3d.js";import"./cancellation-B33q6obR.js";const{expect:d,fn:c}=__STORYBOOK_MODULE_TEST__,m=[{id:"food",householdId:"local-default",name:"식비",kind:"expense",color:"#B94A48",archived:!1,sortOrder:1},{id:"food-dining",householdId:"local-default",name:"외식",kind:"expense",color:"#B94A48",parentCategoryId:"food",archived:!1,sortOrder:1},{id:"transport",householdId:"local-default",name:"교통",kind:"expense",color:"#B77A2C",archived:!1,sortOrder:2},{id:"living",householdId:"local-default",name:"생활",kind:"expense",color:"#5C7C89",archived:!1,sortOrder:3},{id:"health",householdId:"local-default",name:"건강",kind:"expense",color:"#4A8E7A",archived:!1,sortOrder:4},{id:"shopping",householdId:"local-default",name:"쇼핑",kind:"expense",color:"#A6678E",archived:!1,sortOrder:5}],B={title:"Components/InlineCategoryPicker",component:p,decorators:[a=>l.jsx(i,{children:l.jsx(a,{})})],args:{categories:m,householdId:"local-default",kind:"expense",value:void 0,canCreate:!0,onChange:c(),onCreate:c()},argTypes:{categories:{control:"object"},householdId:{control:"text"},kind:{control:"select",options:["expense","income"]},value:{control:"text"},canCreate:{control:"boolean"},onChange:{control:!1},onCreate:{control:!1}}},t={},n={args:{value:"food-dining"}},r={play:async({args:a,canvas:e,userEvent:o})=>{await o.click(e.getByRole("button",{name:"식비 분류 선택"})),await d(a.onChange).toHaveBeenCalledWith("food")}},s={play:async({args:a,canvas:e,userEvent:o})=>{await o.click(e.getByRole("button",{name:"식비 하위 분류 열기"})),await o.click(e.getByRole("button",{name:"새 분류 만들기"})),await o.type(e.getByLabelText("새 분류 이름"),"배달"),await o.click(e.getByRole("button",{name:"분류 만들기"})),await d(a.onCreate).toHaveBeenCalledWith("배달","food")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'food-dining'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '식비 분류 선택'
    }));
    await expect(args.onChange).toHaveBeenCalledWith('food');
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '식비 하위 분류 열기'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: '새 분류 만들기'
    }));
    await userEvent.type(canvas.getByLabelText('새 분류 이름'), '배달');
    await userEvent.click(canvas.getByRole('button', {
      name: '분류 만들기'
    }));
    await expect(args.onCreate).toHaveBeenCalledWith('배달', 'food');
  }
}`,...s.parameters?.docs?.source}}};const w=["Playground","Selected","SelectRoot","CreateChild"];export{s as CreateChild,t as Playground,r as SelectRoot,n as Selected,w as __namedExportsOrder,B as default};
