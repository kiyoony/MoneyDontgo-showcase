import{j as t}from"./theme-CDuz6VZs.js";import"./cashflow-sankey-CnOlCc9w.js";import{S as c}from"./components-C1wPcwlK.js";import"./iframe-CiSudx_z.js";import{C as d}from"./capture-category-chips-DknkYYzX.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-DUNO0XpW.js";import"./category-B3c2Fc3d.js";import"./cancellation-B33q6obR.js";const{expect:l,fn:i}=__STORYBOOK_MODULE_TEST__,p=[{id:"food",householdId:"local-default",name:"식비",kind:"expense",color:"#B94A48",archived:!1,sortOrder:1},{id:"food-dining",householdId:"local-default",name:"외식",kind:"expense",color:"#B94A48",parentCategoryId:"food",archived:!1,sortOrder:1},{id:"cafe-snack",householdId:"local-default",name:"카페/간식",kind:"expense",color:"#C87850",archived:!1,sortOrder:2},{id:"transport",householdId:"local-default",name:"교통",kind:"expense",color:"#B77A2C",archived:!1,sortOrder:3},{id:"living",householdId:"local-default",name:"생활",kind:"expense",color:"#5C7C89",archived:!1,sortOrder:4},{id:"shopping",householdId:"local-default",name:"쇼핑",kind:"expense",color:"#A6678E",archived:!1,sortOrder:5}],v={title:"Components/CaptureCategoryChips",component:d,decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})],args:{categories:p,categoryIds:["food","cafe-snack","transport","living","shopping"],mode:"root",onSelect:i()},argTypes:{categories:{control:"object"},categoryIds:{control:"object"},selectedId:{control:"text"},mode:{control:"select",options:["recent","root"]},onSelect:{control:!1}}},e={},o={args:{selectedId:"food"}},r={play:async({args:a,canvas:s,userEvent:n})=>{await n.click(s.getByRole("button",{name:"식비 분류"})),await l(a.onSelect).toHaveBeenCalledWith("food")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    selectedId: 'food'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '식비 분류'
    }));
    await expect(args.onSelect).toHaveBeenCalledWith('food');
  }
}`,...r.parameters?.docs?.source}}};const I=["Playground","Selected","SelectsCategory"];export{e as Playground,o as Selected,r as SelectsCategory,I as __namedExportsOrder,v as default};
