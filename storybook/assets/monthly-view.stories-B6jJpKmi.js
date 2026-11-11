import{c as K,a as Z}from"./book-scenarios-C5IhzNz1.js";import{b as H,c as W}from"./category-B3c2Fc3d.js";import{e as J}from"./cancellation-B33q6obR.js";import{a as G}from"./calendar-DHZANot5.js";import"./iframe-Doe5r-is.js";import{j as t,p as w,s as x}from"./theme-B2QsN4Sz.js";import{S as L}from"./app-symbol.web-BTz7z5QG.js";import{C as Q}from"./cashflow-sankey-D85FpS-d.js";import{S as X,V as m,M as k,A as r,u as c,d as ee,j as _,f as y,C as $,g as O,s as te}from"./components-DvscOU_I.js";import"./preload-helper-DhRmtqSx.js";function z(e,i,o){const l=new Map(i.map(s=>[s.id,s])),h=new Map;for(const s of e){if(s.kind!==o&&!(o==="expense"&&s.kind==="reversal"))continue;const u=s.categoryId??`uncategorized-${o}`,n=u.startsWith("uncategorized-")?u:W(i,u).at(0)?.id??u;h.set(n,(h.get(n)??0)+(o==="expense"?J(s):s.amount))}return[...h.entries()].map(([s,u])=>({id:s,label:l.get(s)?.name??"미분류",amount:u})).sort((s,u)=>u.amount-s.amount||s.label.localeCompare(u.label,"ko"))}function N(e,i,o){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(o))throw new Error("월은 YYYY-MM 형식이어야 합니다.");const l=e.filter(a=>G(a.occurredAt)===o),h=z(l,i,"income"),s=z(l,i,"expense"),u=[...H(l,i,"income"),...H(l,i,"expense")],n=h.reduce((a,g)=>a+g.amount,0),f=s.reduce((a,g)=>a+g.amount,0),p=l.filter(a=>a.kind==="reversal").reduce((a,g)=>a+g.amount,0),j=s.filter(a=>a.amount<0),B=s.filter(a=>a.amount>0),v=n-f,R=Math.max(n-j.reduce((a,g)=>a+g.amount,0),B.reduce((a,g)=>a+g.amount,0)),M=a=>R===0?0:a/R,P=h.map(a=>({...a,share:M(a.amount),kind:"income"}));for(const a of j)P.push({id:`refund-${a.id}`,label:`${a.label} 취소 환급`,amount:-a.amount,share:M(-a.amount),kind:"funding"});v<0&&P.push({id:"funding-gap",label:"이월·부족분",amount:-v,share:M(-v),kind:"funding"});const D=B.map(a=>({...a,share:M(a.amount),kind:"expense"}));return v>0&&D.push({id:"remainder",label:"남은 돈",amount:v,share:M(v),kind:"remainder"}),{month:o,totalIncome:n,totalExpense:f,totalRefund:p,netCashFlow:v,totalFlow:R,inflows:P,outflows:D,categorySummaries:u}}function V(e){return{month:e,expandedCategoryIds:new Set}}function ne(e,i){const[o=0,l=1]=e.split("-").map(Number),h=new Date(Date.UTC(o,l-1+i,1));return`${h.getUTCFullYear()}-${String(h.getUTCMonth()+1).padStart(2,"0")}`}function F(e,i,o){const l=N(i,o,e.month),h=ne(e.month,-1),s=N(i,o,h),u=i.some(p=>G(p.occurredAt)===h&&(p.kind==="income"||p.kind==="expense"||p.kind==="reversal")),n=l.categorySummaries.filter(p=>p.kind==="expense"),f=p=>n.some(j=>W(o,j.id).slice(0,-1).some(B=>B.id===p));return{...l,comparison:{month:h,hasRecords:u,income:s.totalIncome,expense:s.totalExpense,net:s.netCashFlow,incomeChange:l.totalIncome-s.totalIncome,expenseChange:l.totalExpense-s.totalExpense,netChange:l.netCashFlow-s.netCashFlow},topExpenses:l.outflows.filter(p=>p.kind==="expense").slice(0,3),month:e.month,visibleSummaries:n.filter(p=>W(o,p.id).slice(0,-1).every(j=>e.expandedCategoryIds.has(j.id))),hasChildren:f,isExpanded:p=>e.expandedCategoryIds.has(p)}}const Y=e=>`${e>0?"+":""}${y(e)}`;function se({report:e,dispatch:i,onRecords:o}){const[l,h]=e.month.split("-"),s=e.comparison,u=e.outflows.filter(n=>n.kind==="expense").reduce((n,f)=>n+f.amount,0);return t.jsxs(X,{children:[t.jsxs(m,{style:d.monthPicker,children:[t.jsx(k,{accessibilityRole:"button",accessibilityLabel:"이전 달",style:({pressed:n})=>[d.monthButton,n&&d.pressed],onPress:()=>i({type:"previousMonth"}),children:t.jsx(L,{name:{ios:"chevron.left",android:"chevron_left",web:"chevron_left"},tintColor:w.primary,size:20})}),t.jsxs(m,{style:d.monthTitle,children:[t.jsxs(r,{style:c.title,children:[l,"년 ",Number(h),"월"]}),t.jsx(r,{style:c.subtitle,children:"한국 시간 기준 · 원장에서 계산한 월별 결산"})]}),t.jsx(k,{accessibilityRole:"button",accessibilityLabel:"다음 달",style:({pressed:n})=>[d.monthButton,n&&d.pressed],onPress:()=>i({type:"nextMonth"}),children:t.jsx(L,{name:{ios:"chevron.right",android:"chevron_right",web:"chevron_right"},tintColor:w.primary,size:20})})]}),o?t.jsx(ee,{label:"이달 거래 보기",variant:"secondary",onPress:()=>o(e.month)}):null,t.jsxs(m,{style:d.summaryGrid,children:[t.jsx(_,{label:"총수입",amount:e.totalIncome,tone:"income"}),t.jsx(_,{label:e.totalExpense<0?"환급 초과":"총지출",amount:Math.abs(e.totalExpense),tone:"expense"}),t.jsx(_,{label:"순현금흐름",amount:e.netCashFlow,tone:e.netCashFlow>=0?"income":"expense"})]}),e.totalRefund>0?t.jsxs(r,{style:c.helper,children:["카드 승인 취소 ",y(e.totalRefund),"를 취소 발생월 지출에서 차감했습니다. 총수입에는 포함하지 않습니다."]}):null,t.jsx($,{children:t.jsxs(m,{style:{gap:x.sm},children:[t.jsx(r,{style:c.value,children:"지난달과 비교"}),s.hasRecords?t.jsxs(t.Fragment,{children:[t.jsxs(r,{style:c.subtitle,children:[s.month," 기록 대비"]}),t.jsx(m,{children:t.jsxs(r,{style:c.value,children:["수입 ",Y(s.incomeChange)," · 전월 ",y(s.income)]})}),t.jsx(m,{children:t.jsxs(r,{style:c.value,children:["지출 ",s.expenseChange<0?"감소 ":"증가 ",y(Math.abs(s.expenseChange))," · 전월 ",s.expense<0?"환급 초과 ":"",y(Math.abs(s.expense))]})}),t.jsx(m,{children:t.jsxs(r,{style:c.value,children:["순현금흐름 ",Y(s.netChange)," · 전월 ",y(s.net)]})}),t.jsx(r,{style:c.helper,children:s.expense===0?"전월 지출이 0원이므로 증감률은 계산하지 않습니다.":s.expense<0?"전월 순지출이 음수이므로 증감률은 계산하지 않습니다.":`지출 증감률 ${s.expenseChange>0?"+":""}${(s.expenseChange/s.expense*100).toFixed(1)}%`})]}):t.jsxs(r,{style:c.subtitle,children:["이전 월(",s.month,")의 수입·지출 기록이 없어 비교할 수 없습니다."]}),t.jsx(r,{style:c.value,children:"지출 상위 분류"}),e.topExpenses.length?e.topExpenses.map(n=>t.jsxs(r,{style:c.subtitle,children:[n.label," · ",y(Math.abs(n.amount))," · ",e.totalRefund>0?"지출 흐름의":"지출의"," ",(n.amount/u*100).toFixed(1),"%"]},n.id)):t.jsx(r,{style:c.subtitle,children:"이달의 지출이 없습니다."})]})}),t.jsxs(m,{style:d.section,children:[t.jsx(O,{title:"돈의 흐름"}),t.jsx($,{children:e.totalFlow===0&&e.totalRefund>0?t.jsx(r,{style:c.subtitle,children:"승인과 취소가 상쇄되어 순현금흐름이 없습니다."}):t.jsx(Q,{inflows:e.inflows,outflows:e.outflows,totalFlow:e.totalFlow})})]}),t.jsxs(m,{style:d.section,children:[t.jsx(O,{title:"지출 결산"}),o?t.jsx(r,{style:c.helper,children:"분류 이름으로 하위 항목을 펼치고, 금액을 눌러 근거 거래를 확인하세요."}):null,t.jsxs($,{style:d.breakdownCard,children:[e.visibleSummaries.map((n,f)=>t.jsxs(m,{style:[d.breakdownRow,f>0&&d.divider],children:[t.jsxs(k,{disabled:!e.hasChildren(n.id)&&!o,accessibilityRole:e.hasChildren(n.id)||o?"button":void 0,accessibilityState:e.hasChildren(n.id)?{expanded:e.isExpanded(n.id)}:void 0,accessibilityLabel:`결산 카테고리 ${n.path}`,style:d.breakdownLabel,onPress:()=>{e.hasChildren(n.id)?i({type:"toggleCategory",id:n.id}):o?.(e.month,n.id)},children:[t.jsx(m,{style:[d.dot,{backgroundColor:w.expense,opacity:.7}]}),t.jsxs(m,{style:{flex:1,minWidth:0},children:[t.jsx(r,{style:[c.value,{paddingLeft:Math.max(0,n.depth-1)*x.md}],children:e.hasChildren(n.id)?`${e.isExpanded(n.id)?"⌄":"›"} ${n.label}`:n.label}),n.directAmount!==0&&n.directAmount!==n.aggregateAmount?t.jsxs(r,{style:c.label,children:["직접 ",n.directAmount<0?"환급 초과 ":"",y(Math.abs(n.directAmount))]}):null]})]}),o?t.jsx(k,{accessibilityRole:"button",accessibilityLabel:`거래 보기 ${n.path}`,onPress:()=>o(e.month,n.id),style:{minHeight:44,justifyContent:"center",alignItems:"flex-end",paddingLeft:x.sm},children:t.jsxs(r,{style:d.breakdownAmount,children:[n.aggregateAmount<0?"환급 초과 ":"",y(Math.abs(n.aggregateAmount))]})}):t.jsx(r,{style:d.breakdownAmount,children:y(Math.abs(n.aggregateAmount))})]},n.id)),e.totalExpense===0?t.jsxs(m,{style:d.empty,children:[t.jsx(r,{style:c.value,children:e.totalRefund>0?"승인과 취소가 상쇄되어 순지출이 없습니다.":"이달의 지출이 없습니다."}),t.jsx(r,{style:c.subtitle,children:e.totalRefund>0?"원 승인과 취소 기록은 이달 거래에서 확인할 수 있습니다.":"거래를 추가하면 카테고리별 결산이 표시됩니다."})]}):null]})]})]})}const d=te.create({monthPicker:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:x.md},monthTitle:{flex:1,alignItems:"center",gap:x.xs},monthButton:{width:48,height:48,alignItems:"center",justifyContent:"center",backgroundColor:w.surface,borderColor:w.border,borderWidth:1,borderRadius:8},monthButtonText:{color:w.primary,fontSize:32,lineHeight:34,fontWeight:"700"},pressed:{opacity:.76},summaryGrid:{flexDirection:"row",flexWrap:"wrap",gap:x.md},section:{gap:x.md},breakdownCard:{paddingVertical:0},breakdownRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",minHeight:56,paddingVertical:x.md},breakdownLabel:{flex:1,flexDirection:"row",alignItems:"center",gap:x.sm},breakdownAmount:{color:w.expenseStrong,fontSize:15,fontWeight:"600"},divider:{borderTopWidth:1,borderTopColor:w.border},dot:{width:10,height:10,borderRadius:5},empty:{gap:x.xs,paddingVertical:x.lg}}),{expect:b,fn:ae}=__STORYBOOK_MODULE_TEST__,C=K(),q=Z(),oe=F(V("2026-08"),C.transactions,C.categories),ge={title:"Screens/Monthly",component:se,args:{report:oe,dispatch:ae()},argTypes:{report:{control:!1},dispatch:{control:!1}}},S={play:async({args:e,canvas:i,userEvent:o})=>{const[l]=i.queryAllByRole("button",{name:/결산 카테고리/});l&&(await o.click(l),await b(e.dispatch).toHaveBeenCalledWith(b.objectContaining({type:"toggleCategory"})))}},T={args:{report:F(V("2026-08"),q.transactions,q.categories)}},A={play:async({args:e,canvas:i,userEvent:o})=>{await o.click(i.getByRole("button",{name:"이전 달"})),await b(e.dispatch).toHaveBeenCalledWith({type:"previousMonth"})}},E={args:{report:F(V("2026-08"),C.transactions.filter(e=>e.kind==="expense"),C.categories)},play:async({canvas:e})=>{await b(e.getByText("-183,400원")).toBeVisible()}},U=C.transactions.find(e=>e.kind==="expense"),{fromAccountId:be,toAccountId:fe,...ie}=U,I={args:{report:F(V("2026-09"),[{...ie,id:"refund-only",kind:"reversal",reversalOfId:U.id,fromAccountId:"card",amount:3e3,occurredAt:"2026-09-01T03:00:00Z"}],C.categories)},play:async({canvas:e})=>{await b(e.getByText("환급 초과",{exact:!0})).toBeVisible(),await b(e.getAllByText("3,000원",{exact:!0})[0]).toBeVisible(),await b(e.queryByText("-3,000원",{exact:!0})).not.toBeInTheDocument(),await b(e.getByText("총수입",{exact:!0})).toBeVisible(),await b(e.getByText(/카드 승인 취소 3,000원/)).toBeVisible()}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const [category] = canvas.queryAllByRole('button', {
      name: /결산 카테고리/
    });
    if (category) {
      await userEvent.click(category);
      await expect(args.dispatch).toHaveBeenCalledWith(expect.objectContaining({
        type: 'toggleCategory'
      }));
    }
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-08'), empty.transactions, empty.categories)
  }
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '이전 달'
    }));
    await expect(args.dispatch).toHaveBeenCalledWith({
      type: 'previousMonth'
    });
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-08'), active.transactions.filter(item => item.kind === 'expense'), active.categories)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('-183,400원')).toBeVisible();
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-09'), [{
      ...approvalFields,
      id: 'refund-only',
      kind: 'reversal',
      reversalOfId: approval.id,
      fromAccountId: 'card',
      amount: 3000,
      occurredAt: '2026-09-01T03:00:00Z'
    }], active.categories)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('환급 초과', {
      exact: true
    })).toBeVisible();
    await expect(canvas.getAllByText('3,000원', {
      exact: true
    })[0]!).toBeVisible();
    await expect(canvas.queryByText('-3,000원', {
      exact: true
    })).not.toBeInTheDocument();
    await expect(canvas.getByText('총수입', {
      exact: true
    })).toBeVisible();
    await expect(canvas.getByText(/카드 승인 취소 3,000원/)).toBeVisible();
  }
}`,...I.parameters?.docs?.source}}};const we=["Populated","Empty","PreviousMonth","NegativeCashFlow","RefundOnly"];export{T as Empty,E as NegativeCashFlow,S as Populated,A as PreviousMonth,I as RefundOnly,we as __namedExportsOrder,ge as default};
