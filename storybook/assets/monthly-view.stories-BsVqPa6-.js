import{c as J,a as Q}from"./book-scenarios-C5IhzNz1.js";import{b as O,c as $}from"./category-B3c2Fc3d.js";import{e as X}from"./cancellation-B33q6obR.js";import{a as K}from"./calendar-DHZANot5.js";import{r as ee}from"./iframe-BZnyquBv.js";import{j as t,p as m,s as p}from"./theme-DrLBCnSR.js";import{S as I}from"./app-symbol.web-BpmHQ6nT.js";import{C as te}from"./cashflow-sankey-DP2akK8q.js";import{S as ne,V as d,M as R,A as c,u as h,C as k,d as L,f as w,e as z,s as ae,g as N}from"./components-DVSlncDs.js";import"./preload-helper-DhRmtqSx.js";function Y(e,r,s){const l=new Map(r.map(i=>[i.id,i])),y=new Map;for(const i of e){if(i.kind!==s&&!(s==="expense"&&i.kind==="reversal"))continue;const x=i.categoryId??`uncategorized-${s}`,f=x.startsWith("uncategorized-")?x:$(r,x).at(0)?.id??x;y.set(f,(y.get(f)??0)+(s==="expense"?X(i):i.amount))}return[...y.entries()].map(([i,x])=>({id:i,label:l.get(i)?.name??"미분류",amount:x})).sort((i,x)=>x.amount-i.amount||i.label.localeCompare(x.label,"ko"))}function G(e,r,s){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(s))throw new Error("월은 YYYY-MM 형식이어야 합니다.");const l=e.filter(o=>K(o.occurredAt)===s),y=Y(l,r,"income"),i=Y(l,r,"expense"),x=[...O(l,r,"income"),...O(l,r,"expense")],f=y.reduce((o,v)=>o+v.amount,0),n=i.reduce((o,v)=>o+v.amount,0),u=l.filter(o=>o.kind==="reversal").reduce((o,v)=>o+v.amount,0),g=i.filter(o=>o.amount<0),C=i.filter(o=>o.amount>0),j=f-n,T=Math.max(f-g.reduce((o,v)=>o+v.amount,0),C.reduce((o,v)=>o+v.amount,0)),M=o=>T===0?0:o/T,W=y.map(o=>({...o,share:M(o.amount),kind:"income"}));for(const o of g)W.push({id:`refund-${o.id}`,label:`${o.label} 취소 환급`,amount:-o.amount,share:M(-o.amount),kind:"funding"});j<0&&W.push({id:"funding-gap",label:"이월·부족분",amount:-j,share:M(-j),kind:"funding"});const q=C.map(o=>({...o,share:M(o.amount),kind:"expense"}));return j>0&&q.push({id:"remainder",label:"남은 돈",amount:j,share:M(j),kind:"remainder"}),{month:s,totalIncome:f,totalExpense:n,totalRefund:u,netCashFlow:j,totalFlow:T,inflows:W,outflows:q,categorySummaries:x}}function S(e){return{month:e,expandedCategoryIds:new Set}}function se(e,r){const[s=0,l=1]=e.split("-").map(Number),y=new Date(Date.UTC(s,l-1+r,1));return`${y.getUTCFullYear()}-${String(y.getUTCMonth()+1).padStart(2,"0")}`}function V(e,r,s){const l=G(r,s,e.month),y=se(e.month,-1),i=G(r,s,y),x=u=>r.some(g=>K(g.occurredAt)===u&&(g.kind==="income"||g.kind==="expense"||g.kind==="reversal")),f=l.categorySummaries.filter(u=>u.kind==="expense"),n=u=>f.some(g=>$(s,g.id).slice(0,-1).some(C=>C.id===u));return{...l,hasRecords:x(e.month),comparison:{month:y,hasRecords:x(y),income:i.totalIncome,expense:i.totalExpense,net:i.netCashFlow,incomeChange:l.totalIncome-i.totalIncome,expenseChange:l.totalExpense-i.totalExpense,netChange:l.netCashFlow-i.netCashFlow},topExpenses:l.outflows.filter(u=>u.kind==="expense").slice(0,3),month:e.month,visibleSummaries:f.filter(u=>$(s,u.id).slice(0,-1).every(g=>e.expandedCategoryIds.has(g.id))),hasChildren:n,isExpanded:u=>e.expandedCategoryIds.has(u)}}function oe({report:e,dispatch:r,onRecords:s}){const[l,y]=ee.useState(!1),[i,x]=e.month.split("-"),f=e.outflows.filter(n=>n.kind==="expense").reduce((n,u)=>n+u.amount,0);return t.jsxs(ne,{children:[t.jsxs(d,{style:a.monthPicker,children:[t.jsx(R,{accessibilityRole:"button",accessibilityLabel:"이전 달",style:({pressed:n})=>[a.monthButton,n&&a.pressed],onPress:()=>r({type:"previousMonth"}),children:t.jsx(I,{name:{ios:"chevron.left",android:"chevron_left",web:"chevron_left"},tintColor:m.primary,size:20})}),t.jsx(d,{style:a.monthTitle,children:t.jsxs(c,{style:h.screenHeading,children:[i,"년 ",Number(x),"월"]})}),t.jsx(R,{accessibilityRole:"button",accessibilityLabel:"다음 달",style:({pressed:n})=>[a.monthButton,n&&a.pressed],onPress:()=>r({type:"nextMonth"}),children:t.jsx(I,{name:{ios:"chevron.right",android:"chevron_right",web:"chevron_right"},tintColor:m.primary,size:20})})]}),t.jsxs(k,{style:a.summaryGrid,children:[t.jsx(H,{label:"총수입",amount:e.totalIncome,color:m.income}),t.jsx(H,{label:e.totalExpense<0?"환급 초과":"총지출",amount:Math.abs(e.totalExpense),color:m.expenseStrong}),t.jsx(H,{label:"순현금흐름",amount:e.netCashFlow,color:m.ink})]}),e.hasRecords||e.comparison.hasRecords?t.jsx(le,{comparison:e.comparison}):null,e.hasRecords?null:t.jsx(k,{children:t.jsx(c,{style:h.helper,children:"이달의 수입·지출 기록이 없습니다."})}),e.hasRecords&&e.topExpenses.length>0?t.jsxs(d,{style:a.section,children:[t.jsx(L,{title:"지출 상위 분류"}),e.totalRefund>0&&e.topExpenses.length>0?t.jsx(c,{style:h.helper,children:"취소를 반영한 양수 지출 분류를 기준으로 비중을 표시합니다."}):null,t.jsx(k,{style:a.breakdownCard,children:e.topExpenses.map((n,u)=>{const g=n.amount/f*100,C=[a.rankRow,u>0&&a.divider],j=t.jsxs(t.Fragment,{children:[t.jsxs(d,{style:a.rankHeading,children:[t.jsx(c,{style:[h.value,a.rankLabel],children:n.label}),t.jsx(c,{style:a.breakdownAmount,children:w(n.amount)}),s?t.jsx(I,{name:{ios:"chevron.right",android:"chevron_right",web:"chevron_right"},size:16,tintColor:m.primary}):null]}),t.jsxs(d,{style:a.rankHeading,children:[t.jsx(d,{style:a.rankTrack,children:t.jsx(d,{style:[a.rankFill,{width:`${g}%`}]})}),t.jsxs(c,{style:h.helper,children:[g.toFixed(1),"%"]})]})]});return s?t.jsx(R,{accessibilityRole:"button",accessibilityLabel:`상위 분류 거래 ${n.label}, ${w(n.amount)}, ${g.toFixed(1)}%`,style:({pressed:T})=>[...C,T&&a.pressed],onPress:()=>s(e.month,n.id),children:j},n.id):t.jsx(d,{style:C,children:j},n.id)})})]}):null,s?t.jsx(d,{style:a.recordsLink,children:t.jsx(z,{label:"이달 거래 보기",variant:"quiet",onPress:()=>s(e.month)})}):null,e.totalRefund>0?t.jsxs(c,{style:h.helper,children:["카드 승인 취소 ",w(e.totalRefund),"를 취소 발생월 지출에서 차감했습니다. 총수입에는 포함하지 않습니다."]}):null,e.hasRecords?t.jsx(z,{label:"상세 분석",accessibilityLabel:"상세 분석 펼치기",variant:"outlined",expanded:l,onPress:()=>y(!l)}):null,l?t.jsxs(t.Fragment,{children:[e.hasRecords?t.jsxs(d,{style:a.section,children:[t.jsx(L,{title:"돈의 흐름"}),t.jsx(k,{children:e.totalFlow===0&&e.totalRefund>0?t.jsx(c,{style:h.subtitle,children:"승인과 취소가 상쇄되어 순현금흐름이 없습니다."}):t.jsx(te,{inflows:e.inflows,outflows:e.outflows,totalFlow:e.totalFlow})})]}):null,e.hasRecords&&(e.visibleSummaries.length>0||e.totalRefund>0)?t.jsxs(d,{style:a.section,children:[t.jsx(L,{title:"지출 결산"}),s?t.jsx(c,{style:h.helper,children:"화살표가 있는 분류를 펼치거나 금액을 눌러 거래를 확인하세요."}):null,t.jsxs(k,{style:a.breakdownCard,children:[e.visibleSummaries.map((n,u)=>t.jsxs(d,{style:[a.breakdownRow,u>0&&a.divider],children:[t.jsxs(R,{disabled:!e.hasChildren(n.id),accessibilityRole:e.hasChildren(n.id)?"button":void 0,accessibilityState:e.hasChildren(n.id)?{expanded:e.isExpanded(n.id)}:void 0,accessibilityLabel:`결산 카테고리 ${n.path}`,style:a.breakdownLabel,onPress:()=>{e.hasChildren(n.id)&&r({type:"toggleCategory",id:n.id})},children:[t.jsx(d,{style:[a.dot,{backgroundColor:m.expense,opacity:.7}]}),t.jsxs(d,{style:{flex:1,minWidth:0},children:[t.jsxs(d,{style:{flexDirection:"row",alignItems:"center",gap:p.xs,paddingLeft:Math.max(0,n.depth-1)*p.md},children:[t.jsx(d,{style:{width:16},children:e.hasChildren(n.id)?t.jsx(I,{name:{ios:e.isExpanded(n.id)?"chevron.down":"chevron.right",android:e.isExpanded(n.id)?"expand_more":"chevron_right",web:e.isExpanded(n.id)?"expand_more":"chevron_right"},size:16,tintColor:m.primary}):null}),t.jsx(c,{style:[h.value,{flex:1}],children:n.label})]}),n.directAmount!==0&&n.directAmount!==n.aggregateAmount?t.jsxs(c,{style:h.label,children:["직접 ",n.directAmount<0?"환급 초과 ":"",w(Math.abs(n.directAmount))]}):null]})]}),s?t.jsx(R,{accessibilityRole:"button",accessibilityLabel:`거래 보기 ${n.path}`,onPress:()=>s(e.month,n.id),style:{minHeight:44,justifyContent:"center",alignItems:"flex-end",paddingLeft:p.sm},children:t.jsxs(c,{style:a.breakdownAmount,children:[n.aggregateAmount<0?"환급 초과 ":"",w(Math.abs(n.aggregateAmount))]})}):t.jsx(c,{style:a.breakdownAmount,children:w(Math.abs(n.aggregateAmount))})]},n.id)),e.totalExpense===0?t.jsxs(d,{style:a.empty,children:[t.jsx(c,{style:h.value,children:e.totalRefund>0?"승인과 취소가 상쇄되어 순지출이 없습니다.":"이달의 지출이 없습니다."}),t.jsx(c,{style:h.subtitle,children:e.totalRefund>0?"원 승인과 취소 기록은 이달 거래에서 확인할 수 있습니다.":"거래를 추가하면 카테고리별 결산이 표시됩니다."})]}):null]})]}):null]}):null]})}function le({comparison:e}){const r=[{label:"수입",previous:w(e.income),delta:e.incomeChange},{label:"지출",previous:e.expense<0?"환급 초과 "+w(Math.abs(e.expense)):w(e.expense),delta:e.expenseChange},{label:"순현금흐름",previous:w(e.net),delta:e.netChange}],s=e.expense>0?e.expenseChange/e.expense*100:null;return t.jsxs(k,{style:a.comparison,children:[t.jsx(c,{accessibilityRole:"header",style:h.value,children:"지난달과 비교"}),e.hasRecords?t.jsxs(t.Fragment,{children:[t.jsxs(d,{role:"table",accessibilityLabel:"지난달과 비교",children:[t.jsxs(d,{role:"row",style:a.compareRow,children:[t.jsx(c,{role:"columnheader",style:[h.label,a.compareName],children:"항목"}),t.jsx(c,{role:"columnheader",style:[h.label,a.compareValue],children:"전월"}),t.jsx(c,{role:"columnheader",style:[h.label,a.compareDelta],children:"증감"})]}),r.map(l=>t.jsxs(d,{role:"row",style:[a.compareRow,a.divider],children:[t.jsx(c,{role:"rowheader",style:[a.compareText,a.compareName],children:l.label}),t.jsx(c,{role:"cell",style:[a.compareText,a.compareValue],children:l.previous}),t.jsx(N,{role:"cell",value:l.delta,style:[a.compareText,a.compareDelta]})]},l.label))]}),s===null?t.jsx(c,{style:h.helper,children:e.expense===0?"전월 지출이 0원이므로 증감률은 계산하지 않습니다.":"전월 순지출이 음수이므로 증감률은 계산하지 않습니다."}):t.jsxs(d,{style:[h.row,{gap:p.xs}],children:[t.jsx(c,{style:h.helper,children:"지출 증감률"}),t.jsx(N,{value:s,unit:"%",context:"지출 증감률",style:h.helper})]})]}):t.jsxs(c,{style:h.subtitle,children:["지난달(",e.month,") 수입·지출 기록이 없습니다."]})]})}function H({label:e,amount:r,color:s}){return t.jsxs(d,{style:a.metric,children:[t.jsx(c,{style:h.label,children:e}),t.jsx(c,{style:[a.metricAmount,{color:s}],children:w(r)})]})}const a=ae.create({monthPicker:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:p.md},monthTitle:{flex:1,alignItems:"center",gap:p.xs},monthButton:{width:48,height:48,alignItems:"center",justifyContent:"center",backgroundColor:m.surface,borderColor:m.border,borderWidth:1,borderRadius:8},monthButtonText:{color:m.primary,fontSize:32,lineHeight:34,fontWeight:"700"},pressed:{opacity:.76},summaryGrid:{flexDirection:"row",flexWrap:"wrap",gap:p.sm},metric:{flexGrow:1,flexBasis:80,gap:p.xs},metricAmount:{fontSize:16,fontWeight:"600",fontVariant:["tabular-nums"]},recordsLink:{alignItems:"flex-end"},comparison:{gap:p.sm},compareRow:{flexDirection:"row",alignItems:"baseline",gap:p.xs,paddingVertical:p.sm},compareText:{fontSize:13,lineHeight:19,color:m.ink},compareName:{flex:.8,minWidth:0},compareValue:{flex:1,minWidth:0,textAlign:"right",fontVariant:["tabular-nums"]},compareDelta:{flex:1.25,minWidth:0,textAlign:"right",fontVariant:["tabular-nums"]},rankRow:{minHeight:52,justifyContent:"center",gap:p.xs,paddingVertical:p.sm},rankHeading:{flexDirection:"row",alignItems:"center",gap:p.sm},rankLabel:{flex:1},rankTrack:{flex:1,height:5,borderRadius:3,backgroundColor:m.borderSubtle},rankFill:{height:5,borderRadius:3,backgroundColor:m.expenseStrong},section:{gap:p.md},breakdownCard:{paddingVertical:0},breakdownRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",minHeight:56,paddingVertical:p.md},breakdownLabel:{minHeight:44,flex:1,flexDirection:"row",alignItems:"center",gap:p.sm},breakdownAmount:{color:m.expenseStrong,fontSize:15,fontWeight:"600"},divider:{borderTopWidth:1,borderTopColor:m.border},dot:{width:10,height:10,borderRadius:5},empty:{gap:p.xs,paddingVertical:p.lg}}),{expect:b,fn:ie}=__STORYBOOK_MODULE_TEST__,B=J(),U=Q(),re=V(S("2026-08"),B.transactions,B.categories),we={title:"Screens/Monthly",component:oe,args:{report:re,dispatch:ie()},argTypes:{report:{control:!1},dispatch:{control:!1}}},A={play:async({args:e,canvas:r,userEvent:s})=>{await s.click(r.getByRole("button",{name:"상세 분석 펼치기"}));const[l]=r.queryAllByRole("button",{name:/결산 카테고리/});l&&(await s.click(l),await b(e.dispatch).toHaveBeenCalledWith(b.objectContaining({type:"toggleCategory"})))}},E={args:{report:V(S("2026-08"),U.transactions,U.categories)},play:async({canvas:e})=>{await b(e.getByText("이달의 수입·지출 기록이 없습니다.")).toBeVisible(),await b(e.queryByText("돈의 흐름")).not.toBeInTheDocument(),await b(e.queryByText("지출 결산")).not.toBeInTheDocument(),await b(e.queryByRole("table",{name:"지난달과 비교"})).not.toBeInTheDocument()}},F={args:{report:V(S("2026-09"),B.transactions,B.categories)},play:async({canvas:e})=>{await b(e.getByText("이달의 수입·지출 기록이 없습니다.")).toBeVisible(),await b(e.getByRole("table",{name:"지난달과 비교"})).toBeVisible()}},D={play:async({args:e,canvas:r,userEvent:s})=>{await s.click(r.getByRole("button",{name:"이전 달"})),await b(e.dispatch).toHaveBeenCalledWith({type:"previousMonth"})}},_={args:{report:V(S("2026-08"),B.transactions.filter(e=>e.kind==="expense"),B.categories)},play:async({canvas:e})=>{await b(e.getByText("-183,400원")).toBeVisible()}},Z=B.transactions.find(e=>e.kind==="expense"),{fromAccountId:je,toAccountId:ve,...ce}=Z,P={args:{report:V(S("2026-09"),[{...ce,id:"refund-only",kind:"reversal",reversalOfId:Z.id,fromAccountId:"card",amount:3e3,occurredAt:"2026-09-01T03:00:00Z"}],B.categories)},play:async({canvas:e})=>{await b(e.getByText("환급 초과",{exact:!0})).toBeVisible(),await b(e.getAllByText("3,000원",{exact:!0})[0]).toBeVisible(),await b(e.queryByText("-3,000원",{exact:!0})).not.toBeInTheDocument(),await b(e.getByText("총수입",{exact:!0})).toBeVisible(),await b(e.getByText(/카드 승인 취소 3,000원/)).toBeVisible()}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '상세 분석 펼치기'
    }));
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
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-08'), empty.transactions, empty.categories)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('이달의 수입·지출 기록이 없습니다.')).toBeVisible();
    await expect(canvas.queryByText('돈의 흐름')).not.toBeInTheDocument();
    await expect(canvas.queryByText('지출 결산')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('table', {
      name: '지난달과 비교'
    })).not.toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-09'), active.transactions, active.categories)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('이달의 수입·지출 기록이 없습니다.')).toBeVisible();
    await expect(canvas.getByRole('table', {
      name: '지난달과 비교'
    })).toBeVisible();
  }
}`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-08'), active.transactions.filter(item => item.kind === 'expense'), active.categories)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('-183,400원')).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const Be=["Populated","Empty","EmptyWithPrevious","PreviousMonth","NegativeCashFlow","RefundOnly"];export{E as Empty,F as EmptyWithPrevious,_ as NegativeCashFlow,A as Populated,D as PreviousMonth,P as RefundOnly,Be as __namedExportsOrder,we as default};
