import{c as K,a as Z}from"./book-scenarios-C5IhzNz1.js";import{b as O,c as W}from"./category-B3c2Fc3d.js";import{e as J}from"./cancellation-B33q6obR.js";import{a as q}from"./calendar-DHZANot5.js";import"./iframe-6VNptBMr.js";import{j as e,p as y,s as m}from"./theme-B2QsN4Sz.js";import{S as P}from"./app-symbol.web-BTz7z5QG.js";import{C as Q}from"./cashflow-sankey-CALehV-d.js";import{S as X,V as p,M as B,A as l,u as d,C as S,g as H,f as g,d as ee,s as te}from"./components-H9BRLdA7.js";import"./preload-helper-DhRmtqSx.js";function z(t,r,a){const c=new Map(r.map(s=>[s.id,s])),u=new Map;for(const s of t){if(s.kind!==a&&!(a==="expense"&&s.kind==="reversal"))continue;const x=s.categoryId??`uncategorized-${a}`,n=x.startsWith("uncategorized-")?x:W(r,x).at(0)?.id??x;u.set(n,(u.get(n)??0)+(a==="expense"?J(s):s.amount))}return[...u.entries()].map(([s,x])=>({id:s,label:c.get(s)?.name??"미분류",amount:x})).sort((s,x)=>x.amount-s.amount||s.label.localeCompare(x.label,"ko"))}function N(t,r,a){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(a))throw new Error("월은 YYYY-MM 형식이어야 합니다.");const c=t.filter(i=>q(i.occurredAt)===a),u=z(c,r,"income"),s=z(c,r,"expense"),x=[...O(c,r,"income"),...O(c,r,"expense")],n=u.reduce((i,j)=>i+j.amount,0),b=s.reduce((i,j)=>i+j.amount,0),h=c.filter(i=>i.kind==="reversal").reduce((i,j)=>i+j.amount,0),f=s.filter(i=>i.amount<0),C=s.filter(i=>i.amount>0),w=n-b,$=Math.max(n-f.reduce((i,j)=>i+j.amount,0),C.reduce((i,j)=>i+j.amount,0)),M=i=>$===0?0:i/$,_=u.map(i=>({...i,share:M(i.amount),kind:"income"}));for(const i of f)_.push({id:`refund-${i.id}`,label:`${i.label} 취소 환급`,amount:-i.amount,share:M(-i.amount),kind:"funding"});w<0&&_.push({id:"funding-gap",label:"이월·부족분",amount:-w,share:M(-w),kind:"funding"});const D=C.map(i=>({...i,share:M(i.amount),kind:"expense"}));return w>0&&D.push({id:"remainder",label:"남은 돈",amount:w,share:M(w),kind:"remainder"}),{month:a,totalIncome:n,totalExpense:b,totalRefund:h,netCashFlow:w,totalFlow:$,inflows:_,outflows:D,categorySummaries:x}}function V(t){return{month:t,expandedCategoryIds:new Set}}function ne(t,r){const[a=0,c=1]=t.split("-").map(Number),u=new Date(Date.UTC(a,c-1+r,1));return`${u.getUTCFullYear()}-${String(u.getUTCMonth()+1).padStart(2,"0")}`}function R(t,r,a){const c=N(r,a,t.month),u=ne(t.month,-1),s=N(r,a,u),x=r.some(h=>q(h.occurredAt)===u&&(h.kind==="income"||h.kind==="expense"||h.kind==="reversal")),n=c.categorySummaries.filter(h=>h.kind==="expense"),b=h=>n.some(f=>W(a,f.id).slice(0,-1).some(C=>C.id===h));return{...c,comparison:{month:u,hasRecords:x,income:s.totalIncome,expense:s.totalExpense,net:s.netCashFlow,incomeChange:c.totalIncome-s.totalIncome,expenseChange:c.totalExpense-s.totalExpense,netChange:c.netCashFlow-s.netCashFlow},topExpenses:c.outflows.filter(h=>h.kind==="expense").slice(0,3),month:t.month,visibleSummaries:n.filter(h=>W(a,h.id).slice(0,-1).every(f=>t.expandedCategoryIds.has(f.id))),hasChildren:b,isExpanded:h=>t.expandedCategoryIds.has(h)}}const Y=t=>`${t>0?"+":""}${g(t)}`;function se({report:t,dispatch:r,onRecords:a}){const[c,u]=t.month.split("-"),s=t.comparison,x=t.outflows.filter(n=>n.kind==="expense").reduce((n,b)=>n+b.amount,0);return e.jsxs(X,{children:[e.jsxs(p,{style:o.monthPicker,children:[e.jsx(B,{accessibilityRole:"button",accessibilityLabel:"이전 달",style:({pressed:n})=>[o.monthButton,n&&o.pressed],onPress:()=>r({type:"previousMonth"}),children:e.jsx(P,{name:{ios:"chevron.left",android:"chevron_left",web:"chevron_left"},tintColor:y.primary,size:20})}),e.jsxs(p,{style:o.monthTitle,children:[e.jsxs(l,{style:d.title,children:[c,"년 ",Number(u),"월"]}),e.jsx(l,{style:d.subtitle,children:"한국 시간 기준 · 원장에서 계산한 월별 결산"})]}),e.jsx(B,{accessibilityRole:"button",accessibilityLabel:"다음 달",style:({pressed:n})=>[o.monthButton,n&&o.pressed],onPress:()=>r({type:"nextMonth"}),children:e.jsx(P,{name:{ios:"chevron.right",android:"chevron_right",web:"chevron_right"},tintColor:y.primary,size:20})})]}),e.jsxs(S,{style:o.summaryGrid,children:[e.jsx(L,{label:"총수입",amount:t.totalIncome,color:y.income}),e.jsx(L,{label:t.totalExpense<0?"환급 초과":"총지출",amount:Math.abs(t.totalExpense),color:y.expenseStrong}),e.jsx(L,{label:"순현금흐름",amount:t.netCashFlow,color:y.ink})]}),e.jsxs(p,{style:o.section,children:[e.jsx(H,{title:"지출 상위 분류"}),t.totalRefund>0&&t.topExpenses.length>0?e.jsx(l,{style:d.helper,children:"취소를 반영한 양수 지출 분류를 기준으로 비중을 표시합니다."}):null,e.jsx(S,{style:o.breakdownCard,children:t.topExpenses.length?t.topExpenses.map((n,b)=>{const h=n.amount/x*100,f=[o.rankRow,b>0&&o.divider],C=e.jsxs(e.Fragment,{children:[e.jsxs(p,{style:o.rankHeading,children:[e.jsx(l,{style:[d.value,o.rankLabel],children:n.label}),e.jsx(l,{style:o.breakdownAmount,children:g(n.amount)}),a?e.jsx(P,{name:{ios:"chevron.right",android:"chevron_right",web:"chevron_right"},size:16,tintColor:y.primary}):null]}),e.jsxs(p,{style:o.rankHeading,children:[e.jsx(p,{style:o.rankTrack,children:e.jsx(p,{style:[o.rankFill,{width:`${h}%`}]})}),e.jsxs(l,{style:d.helper,children:[h.toFixed(1),"%"]})]})]});return a?e.jsx(B,{accessibilityRole:"button",accessibilityLabel:`상위 분류 거래 ${n.label}, ${g(n.amount)}, ${h.toFixed(1)}%`,style:({pressed:w})=>[...f,w&&o.pressed],onPress:()=>a(t.month,n.id),children:C},n.id):e.jsx(p,{style:f,children:C},n.id)}):e.jsx(l,{style:[d.subtitle,o.empty],children:"표시할 지출 분류가 없습니다."})}),a?e.jsx(ee,{label:"이달 거래 보기",variant:"secondary",onPress:()=>a(t.month)}):null]}),t.totalRefund>0?e.jsxs(l,{style:d.helper,children:["카드 승인 취소 ",g(t.totalRefund),"를 취소 발생월 지출에서 차감했습니다. 총수입에는 포함하지 않습니다."]}):null,e.jsx(S,{children:e.jsxs(p,{style:{gap:m.sm},children:[e.jsx(l,{style:d.value,children:"지난달과 비교"}),s.hasRecords?e.jsxs(e.Fragment,{children:[e.jsxs(l,{style:d.subtitle,children:[s.month," 기록 대비"]}),e.jsx(p,{children:e.jsxs(l,{style:d.value,children:["수입 ",Y(s.incomeChange)," · 전월 ",g(s.income)]})}),e.jsx(p,{children:e.jsxs(l,{style:d.value,children:["지출 ",s.expenseChange<0?"감소 ":"증가 ",g(Math.abs(s.expenseChange))," · 전월 ",s.expense<0?"환급 초과 ":"",g(Math.abs(s.expense))]})}),e.jsx(p,{children:e.jsxs(l,{style:d.value,children:["순현금흐름 ",Y(s.netChange)," · 전월 ",g(s.net)]})}),e.jsx(l,{style:d.helper,children:s.expense===0?"전월 지출이 0원이므로 증감률은 계산하지 않습니다.":s.expense<0?"전월 순지출이 음수이므로 증감률은 계산하지 않습니다.":`지출 증감률 ${s.expenseChange>0?"+":""}${(s.expenseChange/s.expense*100).toFixed(1)}%`})]}):e.jsxs(l,{style:d.subtitle,children:["이전 월(",s.month,")의 수입·지출 기록이 없어 비교할 수 없습니다."]})]})}),e.jsxs(p,{style:o.section,children:[e.jsx(H,{title:"돈의 흐름"}),e.jsx(S,{children:t.totalFlow===0&&t.totalRefund>0?e.jsx(l,{style:d.subtitle,children:"승인과 취소가 상쇄되어 순현금흐름이 없습니다."}):e.jsx(Q,{inflows:t.inflows,outflows:t.outflows,totalFlow:t.totalFlow})})]}),e.jsxs(p,{style:o.section,children:[e.jsx(H,{title:"지출 결산"}),a?e.jsx(l,{style:d.helper,children:"분류 이름으로 하위 항목을 펼치고, 금액을 눌러 근거 거래를 확인하세요."}):null,e.jsxs(S,{style:o.breakdownCard,children:[t.visibleSummaries.map((n,b)=>e.jsxs(p,{style:[o.breakdownRow,b>0&&o.divider],children:[e.jsxs(B,{disabled:!t.hasChildren(n.id)&&!a,accessibilityRole:t.hasChildren(n.id)||a?"button":void 0,accessibilityState:t.hasChildren(n.id)?{expanded:t.isExpanded(n.id)}:void 0,accessibilityLabel:`결산 카테고리 ${n.path}`,style:o.breakdownLabel,onPress:()=>{t.hasChildren(n.id)?r({type:"toggleCategory",id:n.id}):a?.(t.month,n.id)},children:[e.jsx(p,{style:[o.dot,{backgroundColor:y.expense,opacity:.7}]}),e.jsxs(p,{style:{flex:1,minWidth:0},children:[e.jsx(l,{style:[d.value,{paddingLeft:Math.max(0,n.depth-1)*m.md}],children:t.hasChildren(n.id)?`${t.isExpanded(n.id)?"⌄":"›"} ${n.label}`:n.label}),n.directAmount!==0&&n.directAmount!==n.aggregateAmount?e.jsxs(l,{style:d.label,children:["직접 ",n.directAmount<0?"환급 초과 ":"",g(Math.abs(n.directAmount))]}):null]})]}),a?e.jsx(B,{accessibilityRole:"button",accessibilityLabel:`거래 보기 ${n.path}`,onPress:()=>a(t.month,n.id),style:{minHeight:44,justifyContent:"center",alignItems:"flex-end",paddingLeft:m.sm},children:e.jsxs(l,{style:o.breakdownAmount,children:[n.aggregateAmount<0?"환급 초과 ":"",g(Math.abs(n.aggregateAmount))]})}):e.jsx(l,{style:o.breakdownAmount,children:g(Math.abs(n.aggregateAmount))})]},n.id)),t.totalExpense===0?e.jsxs(p,{style:o.empty,children:[e.jsx(l,{style:d.value,children:t.totalRefund>0?"승인과 취소가 상쇄되어 순지출이 없습니다.":"이달의 지출이 없습니다."}),e.jsx(l,{style:d.subtitle,children:t.totalRefund>0?"원 승인과 취소 기록은 이달 거래에서 확인할 수 있습니다.":"거래를 추가하면 카테고리별 결산이 표시됩니다."})]}):null]})]})]})}function L({label:t,amount:r,color:a}){return e.jsxs(p,{style:o.metric,children:[e.jsx(l,{style:d.label,children:t}),e.jsx(l,{style:[o.metricAmount,{color:a}],children:g(r)})]})}const o=te.create({monthPicker:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:m.md},monthTitle:{flex:1,alignItems:"center",gap:m.xs},monthButton:{width:48,height:48,alignItems:"center",justifyContent:"center",backgroundColor:y.surface,borderColor:y.border,borderWidth:1,borderRadius:8},monthButtonText:{color:y.primary,fontSize:32,lineHeight:34,fontWeight:"700"},pressed:{opacity:.76},summaryGrid:{flexDirection:"row",flexWrap:"wrap",gap:m.sm},metric:{flexGrow:1,flexBasis:80,gap:m.xs},metricAmount:{fontSize:16,fontWeight:"700",fontVariant:["tabular-nums"]},rankRow:{minHeight:52,justifyContent:"center",gap:m.xs,paddingVertical:m.sm},rankHeading:{flexDirection:"row",alignItems:"center",gap:m.sm},rankLabel:{flex:1},rankTrack:{flex:1,height:5,borderRadius:3,backgroundColor:y.borderSubtle},rankFill:{height:5,borderRadius:3,backgroundColor:y.expenseStrong},section:{gap:m.md},breakdownCard:{paddingVertical:0},breakdownRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",minHeight:56,paddingVertical:m.md},breakdownLabel:{flex:1,flexDirection:"row",alignItems:"center",gap:m.sm},breakdownAmount:{color:y.expenseStrong,fontSize:15,fontWeight:"600"},divider:{borderTopWidth:1,borderTopColor:y.border},dot:{width:10,height:10,borderRadius:5},empty:{gap:m.xs,paddingVertical:m.lg}}),{expect:v,fn:ae}=__STORYBOOK_MODULE_TEST__,k=K(),G=Z(),oe=R(V("2026-08"),k.transactions,k.categories),ge={title:"Screens/Monthly",component:se,args:{report:oe,dispatch:ae()},argTypes:{report:{control:!1},dispatch:{control:!1}}},T={play:async({args:t,canvas:r,userEvent:a})=>{const[c]=r.queryAllByRole("button",{name:/결산 카테고리/});c&&(await a.click(c),await v(t.dispatch).toHaveBeenCalledWith(v.objectContaining({type:"toggleCategory"})))}},A={args:{report:R(V("2026-08"),G.transactions,G.categories)}},E={play:async({args:t,canvas:r,userEvent:a})=>{await a.click(r.getByRole("button",{name:"이전 달"})),await v(t.dispatch).toHaveBeenCalledWith({type:"previousMonth"})}},I={args:{report:R(V("2026-08"),k.transactions.filter(t=>t.kind==="expense"),k.categories)},play:async({canvas:t})=>{await v(t.getByText("-183,400원")).toBeVisible()}},U=k.transactions.find(t=>t.kind==="expense"),{fromAccountId:be,toAccountId:fe,...ie}=U,F={args:{report:R(V("2026-09"),[{...ie,id:"refund-only",kind:"reversal",reversalOfId:U.id,fromAccountId:"card",amount:3e3,occurredAt:"2026-09-01T03:00:00Z"}],k.categories)},play:async({canvas:t})=>{await v(t.getByText("환급 초과",{exact:!0})).toBeVisible(),await v(t.getAllByText("3,000원",{exact:!0})[0]).toBeVisible(),await v(t.queryByText("-3,000원",{exact:!0})).not.toBeInTheDocument(),await v(t.getByText("총수입",{exact:!0})).toBeVisible(),await v(t.getByText(/카드 승인 취소 3,000원/)).toBeVisible()}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-08'), empty.transactions, empty.categories)
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-08'), active.transactions.filter(item => item.kind === 'expense'), active.categories)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('-183,400원')).toBeVisible();
  }
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const we=["Populated","Empty","PreviousMonth","NegativeCashFlow","RefundOnly"];export{A as Empty,I as NegativeCashFlow,T as Populated,E as PreviousMonth,F as RefundOnly,we as __namedExportsOrder,ge as default};
