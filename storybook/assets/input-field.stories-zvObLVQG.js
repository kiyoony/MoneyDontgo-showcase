import{I as s}from"./components-C1wPcwlK.js";import"./theme-CDuz6VZs.js";import"./iframe-CiSudx_z.js";import"./preload-helper-DhRmtqSx.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,d={title:"Primitives/InputField",component:s,args:{label:"금액",value:"12,500",suffix:"원",helper:"원 단위로 입력하세요.",onChangeText:t()},argTypes:{label:{control:"text"},value:{control:"text"},placeholder:{control:"text"},helper:{control:"text"},error:{control:"text"},suffix:{control:"text"},editable:{control:"boolean"},onChangeText:{control:!1}}},e={},r={args:{value:"",placeholder:"12,500"}},a={args:{label:"사용처",value:"",suffix:"",helper:"",error:"사용처를 확인해 주세요."}},o={args:{editable:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: '12,500'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: '사용처',
    value: '',
    suffix: '',
    helper: '',
    error: '사용처를 확인해 주세요.'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    editable: false
  }
}`,...o.parameters?.docs?.source}}};const i=["Playground","Empty","Error","Disabled"];export{o as Disabled,r as Empty,a as Error,e as Playground,i as __namedExportsOrder,d as default};
