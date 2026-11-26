import{c as Z,a as J}from"./book-scenarios-C5IhzNz1.js";import{b as z,c as H}from"./category-B3c2Fc3d.js";import{e as Q}from"./cancellation-B33q6obR.js";import{a as U}from"./calendar-DHZANot5.js";import"./iframe-DcUV9DEb.js";import{j as t,p as y,s as u}from"./theme-Bmk8G3Xq.js";import{S as _}from"./app-symbol.web-BQYCspdR.js";import{C as X}from"./cashflow-sankey-DMHpqij8.js";import{S as ee,V as h,M,A as r,u as d,C as k,e as L,f,d as te,s as ne,g as N}from"./components-CrgZFfWO.js";import"./preload-helper-DhRmtqSx.js";function O(e,c,s){const i=new Map(c.map(l=>[l.id,l])),x=new Map;for(const l of e){if(l.kind!==s&&!(s==="expense"&&l.kind==="reversal"))continue;const n=l.categoryId??`uncategorized-${s}`,m=n.startsWith("uncategorized-")?n:H(c,n).at(0)?.id??n;x.set(m,(x.get(m)??0)+(s==="expense"?Q(l):l.amount))}return[...x.entries()].map(([l,n])=>({id:l,label:i.get(l)?.name??"미분류",amount:n})).sort((l,n)=>n.amount-l.amount||l.label.localeCompare(n.label,"ko"))}function Y(e,c,s){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(s))throw new Error("월은 YYYY-MM 형식이어야 합니다.");const i=e.filter(o=>U(o.occurredAt)===s),x=O(i,c,"income"),l=O(i,c,"expense"),n=[...z(i,c,"income"),...z(i,c,"expense")],m=x.reduce((o,w)=>o+w.amount,0),j=l.reduce((o,w)=>o+w.amount,0),p=i.filter(o=>o.kind==="reversal").reduce((o,w)=>o+w.amount,0),b=l.filter(o=>o.amount<0),C=l.filter(o=>o.amount>0),B=m-j,P=Math.max(m-b.reduce((o,w)=>o+w.amount,0),C.reduce((o,w)=>o+w.amount,0)),T=o=>P===0?0:o/P,W=x.map(o=>({...o,share:T(o.amount),kind:"income"}));for(const o of b)W.push({id:`refund-${o.id}`,label:`${o.label} 취소 환급`,amount:-o.amount,share:T(-o.amount),kind:"funding"});B<0&&W.push({id:"funding-gap",label:"이월·부족분",amount:-B,share:T(-B),kind:"funding"});const q=C.map(o=>({...o,share:T(o.amount),kind:"expense"}));return B>0&&q.push({id:"remainder",label:"남은 돈",amount:B,share:T(B),kind:"remainder"}),{month:s,totalIncome:m,totalExpense:j,totalRefund:p,netCashFlow:B,totalFlow:P,inflows:W,outflows:q,categorySummaries:n}}function S(e){return{month:e,expandedCategoryIds:new Set}}function ae(e,c){const[s=0,i=1]=e.split("-").map(Number),x=new Date(Date.UTC(s,i-1+c,1));return`${x.getUTCFullYear()}-${String(x.getUTCMonth()+1).padStart(2,"0")}`}function R(e,c,s){const i=Y(c,s,e.month),x=ae(e.month,-1),l=Y(c,s,x),n=p=>c.some(b=>U(b.occurredAt)===p&&(b.kind==="income"||b.kind==="expense"||b.kind==="reversal")),m=i.categorySummaries.filter(p=>p.kind==="expense"),j=p=>m.some(b=>H(s,b.id).slice(0,-1).some(C=>C.id===p));return{...i,hasRecords:n(e.month),comparison:{month:x,hasRecords:n(x),income:l.totalIncome,expense:l.totalExpense,net:l.netCashFlow,incomeChange:i.totalIncome-l.totalIncome,expenseChange:i.totalExpense-l.totalExpense,netChange:i.netCashFlow-l.netCashFlow},topExpenses:i.outflows.filter(p=>p.kind==="expense").slice(0,3),month:e.month,visibleSummaries:m.filter(p=>H(s,p.id).slice(0,-1).every(b=>e.expandedCategoryIds.has(b.id))),hasChildren:j,isExpanded:p=>e.expandedCategoryIds.has(p)}}function se({report:e,dispatch:c,onRecords:s}){const[i,x]=e.month.split("-"),l=e.outflows.filter(n=>n.kind==="expense").reduce((n,m)=>n+m.amount,0);return t.jsxs(ee,{children:[t.jsxs(h,{style:a.monthPicker,children:[t.jsx(M,{accessibilityRole:"button",accessibilityLabel:"이전 달",style:({pressed:n})=>[a.monthButton,n&&a.pressed],onPress:()=>c({type:"previousMonth"}),children:t.jsx(_,{name:{ios:"chevron.left",android:"chevron_left",web:"chevron_left"},tintColor:y.primary,size:20})}),t.jsx(h,{style:a.monthTitle,children:t.jsxs(r,{style:d.title,children:[i,"년 ",Number(x),"월"]})}),t.jsx(M,{accessibilityRole:"button",accessibilityLabel:"다음 달",style:({pressed:n})=>[a.monthButton,n&&a.pressed],onPress:()=>c({type:"nextMonth"}),children:t.jsx(_,{name:{ios:"chevron.right",android:"chevron_right",web:"chevron_right"},tintColor:y.primary,size:20})})]}),t.jsxs(k,{style:a.summaryGrid,children:[t.jsx($,{label:"총수입",amount:e.totalIncome,color:y.income}),t.jsx($,{label:e.totalExpense<0?"환급 초과":"총지출",amount:Math.abs(e.totalExpense),color:y.expenseStrong}),t.jsx($,{label:"순현금흐름",amount:e.netCashFlow,color:y.ink})]}),e.hasRecords?null:t.jsx(k,{children:t.jsx(r,{style:d.helper,children:"이달의 수입·지출 기록이 없습니다."})}),e.hasRecords&&e.topExpenses.length>0?t.jsxs(h,{style:a.section,children:[t.jsx(L,{title:"지출 상위 분류"}),e.totalRefund>0&&e.topExpenses.length>0?t.jsx(r,{style:d.helper,children:"취소를 반영한 양수 지출 분류를 기준으로 비중을 표시합니다."}):null,t.jsx(k,{style:a.breakdownCard,children:e.topExpenses.map((n,m)=>{const j=n.amount/l*100,p=[a.rankRow,m>0&&a.divider],b=t.jsxs(t.Fragment,{children:[t.jsxs(h,{style:a.rankHeading,children:[t.jsx(r,{style:[d.value,a.rankLabel],children:n.label}),t.jsx(r,{style:a.breakdownAmount,children:f(n.amount)}),s?t.jsx(_,{name:{ios:"chevron.right",android:"chevron_right",web:"chevron_right"},size:16,tintColor:y.primary}):null]}),t.jsxs(h,{style:a.rankHeading,children:[t.jsx(h,{style:a.rankTrack,children:t.jsx(h,{style:[a.rankFill,{width:`${j}%`}]})}),t.jsxs(r,{style:d.helper,children:[j.toFixed(1),"%"]})]})]});return s?t.jsx(M,{accessibilityRole:"button",accessibilityLabel:`상위 분류 거래 ${n.label}, ${f(n.amount)}, ${j.toFixed(1)}%`,style:({pressed:C})=>[...p,C&&a.pressed],onPress:()=>s(e.month,n.id),children:b},n.id):t.jsx(h,{style:p,children:b},n.id)})})]}):null,s?t.jsx(h,{style:a.recordsLink,children:t.jsx(te,{label:"이달 거래 보기",variant:"quiet",onPress:()=>s(e.month)})}):null,e.totalRefund>0?t.jsxs(r,{style:d.helper,children:["카드 승인 취소 ",f(e.totalRefund),"를 취소 발생월 지출에서 차감했습니다. 총수입에는 포함하지 않습니다."]}):null,e.hasRecords||e.comparison.hasRecords?t.jsx(oe,{comparison:e.comparison}):null,e.hasRecords?t.jsxs(h,{style:a.section,children:[t.jsx(L,{title:"돈의 흐름"}),t.jsx(k,{children:e.totalFlow===0&&e.totalRefund>0?t.jsx(r,{style:d.subtitle,children:"승인과 취소가 상쇄되어 순현금흐름이 없습니다."}):t.jsx(X,{inflows:e.inflows,outflows:e.outflows,totalFlow:e.totalFlow})})]}):null,e.hasRecords&&(e.visibleSummaries.length>0||e.totalRefund>0)?t.jsxs(h,{style:a.section,children:[t.jsx(L,{title:"지출 결산"}),s?t.jsx(r,{style:d.helper,children:"분류 이름으로 하위 항목을 펼치고, 금액을 눌러 근거 거래를 확인하세요."}):null,t.jsxs(k,{style:a.breakdownCard,children:[e.visibleSummaries.map((n,m)=>t.jsxs(h,{style:[a.breakdownRow,m>0&&a.divider],children:[t.jsxs(M,{disabled:!e.hasChildren(n.id)&&!s,accessibilityRole:e.hasChildren(n.id)||s?"button":void 0,accessibilityState:e.hasChildren(n.id)?{expanded:e.isExpanded(n.id)}:void 0,accessibilityLabel:`결산 카테고리 ${n.path}`,style:a.breakdownLabel,onPress:()=>{e.hasChildren(n.id)?c({type:"toggleCategory",id:n.id}):s?.(e.month,n.id)},children:[t.jsx(h,{style:[a.dot,{backgroundColor:y.expense,opacity:.7}]}),t.jsxs(h,{style:{flex:1,minWidth:0},children:[t.jsx(r,{style:[d.value,{paddingLeft:Math.max(0,n.depth-1)*u.md}],children:e.hasChildren(n.id)?`${e.isExpanded(n.id)?"⌄":"›"} ${n.label}`:n.label}),n.directAmount!==0&&n.directAmount!==n.aggregateAmount?t.jsxs(r,{style:d.label,children:["직접 ",n.directAmount<0?"환급 초과 ":"",f(Math.abs(n.directAmount))]}):null]})]}),s?t.jsx(M,{accessibilityRole:"button",accessibilityLabel:`거래 보기 ${n.path}`,onPress:()=>s(e.month,n.id),style:{minHeight:44,justifyContent:"center",alignItems:"flex-end",paddingLeft:u.sm},children:t.jsxs(r,{style:a.breakdownAmount,children:[n.aggregateAmount<0?"환급 초과 ":"",f(Math.abs(n.aggregateAmount))]})}):t.jsx(r,{style:a.breakdownAmount,children:f(Math.abs(n.aggregateAmount))})]},n.id)),e.totalExpense===0?t.jsxs(h,{style:a.empty,children:[t.jsx(r,{style:d.value,children:e.totalRefund>0?"승인과 취소가 상쇄되어 순지출이 없습니다.":"이달의 지출이 없습니다."}),t.jsx(r,{style:d.subtitle,children:e.totalRefund>0?"원 승인과 취소 기록은 이달 거래에서 확인할 수 있습니다.":"거래를 추가하면 카테고리별 결산이 표시됩니다."})]}):null]})]}):null]})}function oe({comparison:e}){const c=[{label:"수입",previous:f(e.income),delta:e.incomeChange},{label:"지출",previous:e.expense<0?"환급 초과 "+f(Math.abs(e.expense)):f(e.expense),delta:e.expenseChange},{label:"순현금흐름",previous:f(e.net),delta:e.netChange}],s=e.expense>0?e.expenseChange/e.expense*100:null;return t.jsxs(k,{style:a.comparison,children:[t.jsx(r,{accessibilityRole:"header",style:d.value,children:"지난달과 비교"}),e.hasRecords?t.jsxs(t.Fragment,{children:[t.jsxs(h,{role:"table",accessibilityLabel:"지난달과 비교",children:[t.jsxs(h,{role:"row",style:a.compareRow,children:[t.jsx(r,{role:"columnheader",style:[d.label,a.compareName],children:"항목"}),t.jsx(r,{role:"columnheader",style:[d.label,a.compareValue],children:"전월"}),t.jsx(r,{role:"columnheader",style:[d.label,a.compareDelta],children:"증감"})]}),c.map(i=>t.jsxs(h,{role:"row",style:[a.compareRow,a.divider],children:[t.jsx(r,{role:"rowheader",style:[a.compareText,a.compareName],children:i.label}),t.jsx(r,{role:"cell",style:[a.compareText,a.compareValue],children:i.previous}),t.jsx(N,{role:"cell",value:i.delta,style:[a.compareText,a.compareDelta]})]},i.label))]}),s===null?t.jsx(r,{style:d.helper,children:e.expense===0?"전월 지출이 0원이므로 증감률은 계산하지 않습니다.":"전월 순지출이 음수이므로 증감률은 계산하지 않습니다."}):t.jsxs(h,{style:[d.row,{gap:u.xs}],children:[t.jsx(r,{style:d.helper,children:"지출 증감률"}),t.jsx(N,{value:s,unit:"%",context:"지출 증감률",style:d.helper})]})]}):t.jsxs(r,{style:d.subtitle,children:["지난달(",e.month,") 수입·지출 기록이 없습니다."]})]})}function $({label:e,amount:c,color:s}){return t.jsxs(h,{style:a.metric,children:[t.jsx(r,{style:d.label,children:e}),t.jsx(r,{style:[a.metricAmount,{color:s}],children:f(c)})]})}const a=ne.create({monthPicker:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:u.md},monthTitle:{flex:1,alignItems:"center",gap:u.xs},monthButton:{width:48,height:48,alignItems:"center",justifyContent:"center",backgroundColor:y.surface,borderColor:y.border,borderWidth:1,borderRadius:8},monthButtonText:{color:y.primary,fontSize:32,lineHeight:34,fontWeight:"700"},pressed:{opacity:.76},summaryGrid:{flexDirection:"row",flexWrap:"wrap",gap:u.sm},metric:{flexGrow:1,flexBasis:80,gap:u.xs},metricAmount:{fontSize:16,fontWeight:"700",fontVariant:["tabular-nums"]},recordsLink:{alignItems:"flex-end"},comparison:{gap:u.sm},compareRow:{flexDirection:"row",alignItems:"baseline",gap:u.xs,paddingVertical:u.sm},compareText:{fontSize:13,lineHeight:19,color:y.ink},compareName:{flex:.8,minWidth:0},compareValue:{flex:1,minWidth:0,textAlign:"right",fontVariant:["tabular-nums"]},compareDelta:{flex:1.25,minWidth:0,textAlign:"right",fontVariant:["tabular-nums"]},rankRow:{minHeight:52,justifyContent:"center",gap:u.xs,paddingVertical:u.sm},rankHeading:{flexDirection:"row",alignItems:"center",gap:u.sm},rankLabel:{flex:1},rankTrack:{flex:1,height:5,borderRadius:3,backgroundColor:y.borderSubtle},rankFill:{height:5,borderRadius:3,backgroundColor:y.expenseStrong},section:{gap:u.md},breakdownCard:{paddingVertical:0},breakdownRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",minHeight:56,paddingVertical:u.md},breakdownLabel:{flex:1,flexDirection:"row",alignItems:"center",gap:u.sm},breakdownAmount:{color:y.expenseStrong,fontSize:15,fontWeight:"600"},divider:{borderTopWidth:1,borderTopColor:y.border},dot:{width:10,height:10,borderRadius:5},empty:{gap:u.xs,paddingVertical:u.lg}}),{expect:g,fn:le}=__STORYBOOK_MODULE_TEST__,v=Z(),G=J(),ie=R(S("2026-08"),v.transactions,v.categories),fe={title:"Screens/Monthly",component:se,args:{report:ie,dispatch:le()},argTypes:{report:{control:!1},dispatch:{control:!1}}},V={play:async({args:e,canvas:c,userEvent:s})=>{const[i]=c.queryAllByRole("button",{name:/결산 카테고리/});i&&(await s.click(i),await g(e.dispatch).toHaveBeenCalledWith(g.objectContaining({type:"toggleCategory"})))}},I={args:{report:R(S("2026-08"),G.transactions,G.categories)},play:async({canvas:e})=>{await g(e.getByText("이달의 수입·지출 기록이 없습니다.")).toBeVisible(),await g(e.queryByText("돈의 흐름")).not.toBeInTheDocument(),await g(e.queryByText("지출 결산")).not.toBeInTheDocument(),await g(e.queryByRole("table",{name:"지난달과 비교"})).not.toBeInTheDocument()}},A={args:{report:R(S("2026-09"),v.transactions,v.categories)},play:async({canvas:e})=>{await g(e.getByText("이달의 수입·지출 기록이 없습니다.")).toBeVisible(),await g(e.getByRole("table",{name:"지난달과 비교"})).toBeVisible()}},E={play:async({args:e,canvas:c,userEvent:s})=>{await s.click(c.getByRole("button",{name:"이전 달"})),await g(e.dispatch).toHaveBeenCalledWith({type:"previousMonth"})}},F={args:{report:R(S("2026-08"),v.transactions.filter(e=>e.kind==="expense"),v.categories)},play:async({canvas:e})=>{await g(e.getByText("-183,400원")).toBeVisible()}},K=v.transactions.find(e=>e.kind==="expense"),{fromAccountId:we,toAccountId:je,...re}=K,D={args:{report:R(S("2026-09"),[{...re,id:"refund-only",kind:"reversal",reversalOfId:K.id,fromAccountId:"card",amount:3e3,occurredAt:"2026-09-01T03:00:00Z"}],v.categories)},play:async({canvas:e})=>{await g(e.getByText("환급 초과",{exact:!0})).toBeVisible(),await g(e.getAllByText("3,000원",{exact:!0})[0]).toBeVisible(),await g(e.queryByText("-3,000원",{exact:!0})).not.toBeInTheDocument(),await g(e.getByText("총수입",{exact:!0})).toBeVisible(),await g(e.getByText(/카드 승인 취소 3,000원/)).toBeVisible()}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    report: createMonthlyViewModel(createMonthlyState('2026-08'), active.transactions.filter(item => item.kind === 'expense'), active.categories)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('-183,400원')).toBeVisible();
  }
}`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const ve=["Populated","Empty","EmptyWithPrevious","PreviousMonth","NegativeCashFlow","RefundOnly"];export{I as Empty,A as EmptyWithPrevious,F as NegativeCashFlow,V as Populated,E as PreviousMonth,D as RefundOnly,ve as __namedExportsOrder,fe as default};
