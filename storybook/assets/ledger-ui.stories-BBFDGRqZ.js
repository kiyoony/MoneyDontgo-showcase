import{j as o}from"./theme-B2QsN4Sz.js";import{r as d}from"./iframe-Bt0wZtCA.js";import"./cashflow-sankey-uokYedbH.js";import{S as l}from"./components-BR6b8uV5.js";import{L as i}from"./ledger-ui-BerZakuZ.js";import"./preload-helper-DhRmtqSx.js";const{expect:s,fn:u}=__STORYBOOK_MODULE_TEST__,w={title:"Components/Ledger/Segments",component:i,args:{label:"기간 선택",value:"day",options:[{value:"day",label:"일간"},{value:"week",label:"주간"},{value:"month",label:"월간"}],onChange:u()},decorators:[e=>o.jsx(l,{children:o.jsx(e,{})})],render:e=>{const[a,n]=d.useState(e.value);return o.jsx(i,{...e,value:a,onChange:c=>{e.onChange(c),n(c)}})}},t={play:async({args:e,canvas:a,userEvent:n})=>{a.getByRole("radio",{name:"일간"}).focus(),await n.keyboard("{ArrowRight}"),await s(e.onChange).toHaveBeenCalledWith("week"),await s(a.getByRole("radio",{name:"주간"})).toHaveAttribute("aria-checked","true")}},r={args:{tabs:!0},play:async({canvas:e,userEvent:a})=>{e.getByRole("tab",{name:"일간"}).focus(),await a.keyboard("{End}"),await s(e.getByRole("tab",{name:"월간"})).toHaveAttribute("aria-selected","true")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    canvas.getByRole('radio', {
      name: '일간'
    }).focus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(args.onChange).toHaveBeenCalledWith('week');
    await expect(canvas.getByRole('radio', {
      name: '주간'
    })).toHaveAttribute('aria-checked', 'true');
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: true
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    canvas.getByRole('tab', {
      name: '일간'
    }).focus();
    await userEvent.keyboard('{End}');
    await expect(canvas.getByRole('tab', {
      name: '월간'
    })).toHaveAttribute('aria-selected', 'true');
  }
}`,...r.parameters?.docs?.source}}};const R=["RadioKeyboard","TabKeyboard"];export{t as RadioKeyboard,r as TabKeyboard,R as __namedExportsOrder,w as default};
