import{j as a,s as p,p as i,r as H}from"./theme-B2QsN4Sz.js";import{r as v}from"./iframe-Doe5r-is.js";import"./cashflow-sankey-D85FpS-d.js";import{V as d,A as u,u as h,F as U,f as C,M as F,S as Z}from"./components-DvscOU_I.js";import{v as S,b as B}from"./calendar-DHZANot5.js";import{e as _}from"./cancellation-B33q6obR.js";import{l as I}from"./ledger-ui-CypR_rRD.js";import"./preload-helper-DhRmtqSx.js";function L(t,e,n=0){const s=Number(t.slice(0,4)),c=Number(t.slice(5,7)),r=new Date(Date.UTC(s,c-1+n,1)),l=new Date(Date.UTC(r.getUTCFullYear(),r.getUTCMonth()+1,0)).getUTCDate();return`${r.getUTCFullYear()}-${String(r.getUTCMonth()+1).padStart(2,"0")}-${String(Math.min(e,l)).padStart(2,"0")}`}function O(t,e){const n=new Date(`${t}T12:00:00Z`);return n.setUTCDate(n.getUTCDate()+e),n.toISOString().slice(0,10)}function P(t,e){if(!S(e))throw new Error("기준 날짜를 확인해주세요.");return{from:e.slice(0,7)+"-01",to:L(e.slice(0,7),31)}}function T(t,e){if(!S(t)||!S(e)||t>e)return[];const n=[];for(let s=t;s<=e;s=O(s,1))n.push(s);return n}function V(t){if(!S(t))return[];const{from:e,to:n}=P("month",t),s=(new Date(e+"T12:00:00Z").getUTCDay()+6)%7,c=[...Array(s).fill(null),...T(e,n)];for(;c.length%7;)c.push(null);return c}function $(t){return{income:t.filter(e=>e.kind==="income").reduce((e,n)=>e+n.amount,0),expense:t.reduce((e,n)=>e+_(n),0)}}function A(t,e){return t.filter(n=>B(n.occurredAt)===e)}function D(t){const e=Math.abs(t),n=e>=1e8?(e/1e8).toFixed(1).replace(/\.0$/,"")+"억":e>=1e4?(e/1e4).toFixed(1).replace(/\.0$/,"")+"만":String(e);return(t<0?"−":"")+n}const M=["월","화","수","목","금","토","일"];function W({day:t,rows:e,selected:n,today:s,onSelect:c,weekday:r,planned:l}){const[w,g]=v.useState(!1),o=$(e),j=t+" "+(l?"예정 지출 ":o.expense<0?"환급 초과 ":"지출 ")+C(Math.abs(o.expense))+(l?"":" 수입 "+C(o.income))+" "+e.length+"건"+(s?" 오늘":"");return a.jsxs(F,{accessibilityRole:"button",accessibilityLabel:j,accessibilityState:{selected:n},"aria-pressed":n,onPress:()=>c(t),onFocus:()=>g(!0),onBlur:()=>g(!1),style:({pressed:R})=>[{flex:1,minWidth:0,minHeight:r?94:104,padding:p.xs,gap:p.xs,borderRadius:r?H.sm:0,borderWidth:n?2:1,borderColor:n?i.primary:s?i.inputBorder:i.borderSubtle,backgroundColor:n?i.primarySoft:i.surface},w&&I.focus,R&&{opacity:.7}],children:[r?a.jsx(u,{style:[h.helper,{textAlign:"center"}],children:r}):null,a.jsxs(u,{style:{textAlign:r?"center":"left",fontWeight:n||s?"700":"500"},children:[Number(t.slice(8)),s?"·":""]}),e.length?a.jsxs(a.Fragment,{children:[o.expense!==0?a.jsxs(u,{style:{fontSize:12,color:l?i.muted:i.expenseStrong,textAlign:r?"center":"left"},children:[l?"예":o.expense<0?"환급":"지"," ",D(Math.abs(o.expense))]}):null,!l&&o.income!==0?a.jsxs(u,{style:{fontSize:12,color:i.income,textAlign:r?"center":"left"},children:["수 ",D(o.income)]}):null,o.expense===0&&o.income===0?a.jsxs(u,{style:h.helper,children:[e.length,"건"]}):null]}):null]})}function N({date:t,from:e,to:n,rows:s,onSelect:c,planned:r=!1}){const[l,w]=v.useState(0),g=B(new Date);return a.jsxs(d,{onLayout:o=>w(o.nativeEvent.layout.width),style:{gap:p.sm},children:[a.jsx(U,{horizontal:!0,showsHorizontalScrollIndicator:!0,contentContainerStyle:{gap:p.xs},accessibilityLabel:"주간 날짜 요약",children:T(e,n).map((o,j)=>a.jsx(d,{style:{width:Math.max(44,Math.floor((l-24)/7))},children:a.jsx(W,{day:o,rows:A(s,o),selected:o===t,today:o===g,weekday:M[j],planned:r,onSelect:c})},o))}),a.jsxs(u,{style:h.helper,children:["요일을 선택하면 해당 날짜의 기록으로 이동합니다. 금액은 ",r?"예정 지출":"지출(지)·수입(수)"," 요약입니다."]})]})}function k({date:t,rows:e,onSelect:n,planned:s=!1}){const c=B(new Date);return a.jsxs(d,{style:{gap:p.sm},accessibilityLabel:"월간 거래 달력",children:[a.jsx(d,{style:{flexDirection:"row"},children:M.map(r=>a.jsx(u,{style:[h.helper,{width:"14.2857%",textAlign:"center",paddingVertical:p.sm}],children:r},r))}),a.jsx(d,{style:{flexDirection:"row",flexWrap:"wrap"},children:V(t).map((r,l)=>a.jsx(d,{style:{width:"14.2857%",minWidth:0},children:r?a.jsx(W,{day:r,rows:A(e,r),selected:r===t,today:r===c,planned:s,onSelect:n}):a.jsx(d,{style:{minHeight:104,borderWidth:1,borderColor:i.borderSubtle,backgroundColor:i.surfaceMuted}})},r??"blank-"+l))}),a.jsx(u,{style:h.helper,children:"선택일은 청록색, 오늘은 날짜 옆 점으로 표시합니다. 축약 금액의 정확한 값은 선택일 내역에서 확인하세요."})]})}const{expect:m,fn:z}=__STORYBOOK_MODULE_TEST__,E=[{id:"calendar-expense",householdId:"example",kind:"expense",amount:33333,merchant:"합성 가전",toAccountId:"card",occurredAt:"2026-11-18T03:00:00Z",createdAt:"2026-11-18T03:00:00Z",updatedAt:"2026-11-18T03:00:00Z",createdBy:"owner",updatedBy:"owner"},{id:"calendar-income",householdId:"example",kind:"income",amount:25e5,merchant:"합성 급여",toAccountId:"bank",occurredAt:"2026-11-17T03:00:00Z",createdAt:"2026-11-17T03:00:00Z",updatedAt:"2026-11-17T03:00:00Z",createdBy:"owner",updatedBy:"owner"}],te={title:"Features/Transactions/PeriodCalendar",component:k,args:{date:"2026-11-18",rows:E,onSelect:z(),planned:!1},decorators:[t=>a.jsx(Z,{children:a.jsx(t,{})})]},x={render:t=>{const[e,n]=v.useState(t.date);return a.jsx(k,{...t,date:e,onSelect:s=>{t.onSelect(s),n(s)}})},play:async({args:t,canvas:e,userEvent:n})=>{const s=e.getByRole("button",{name:/^2026-11-17 지출 0원 수입 2,500,000원 1건/});await n.click(s),await m(t.onSelect).toHaveBeenCalledWith("2026-11-17"),await m(s).toHaveAttribute("aria-pressed","true"),await m(e.getByRole("button",{name:/^2026-11-30 /})).toBeVisible()}},f={args:{rows:[]}},b={args:{planned:!0,rows:E.filter(t=>t.kind==="expense")}},y={render:t=>a.jsx(N,{...t,from:"2026-11-16",to:"2026-11-22"}),play:async({args:t,canvas:e,userEvent:n})=>{await n.click(e.getByRole("button",{name:/^2026-11-18 지출 33,333원/})),await m(t.onSelect).toHaveBeenCalledWith("2026-11-18"),await m(e.getAllByRole("button")).toHaveLength(7)}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState(args.date);
    return <MonthCalendar {...args} date={date} onSelect={value => {
      args.onSelect(value);
      setDate(value);
    }} />;
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const target = canvas.getByRole('button', {
      name: /^2026-11-17 지출 0원 수입 2,500,000원 1건/
    });
    await userEvent.click(target);
    await expect(args.onSelect).toHaveBeenCalledWith('2026-11-17');
    await expect(target).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByRole('button', {
      name: /^2026-11-30 /
    })).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    planned: true,
    rows: rows.filter(row => row.kind === 'expense')
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <WeekStrip {...args} from="2026-11-16" to="2026-11-22" />,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /^2026-11-18 지출 33,333원/
    }));
    await expect(args.onSelect).toHaveBeenCalledWith('2026-11-18');
    await expect(canvas.getAllByRole('button')).toHaveLength(7);
  }
}`,...y.parameters?.docs?.source}}};const ne=["MonthSelection","EmptyMonth","PlannedMonth","WeekNavigation"];export{f as EmptyMonth,x as MonthSelection,b as PlannedMonth,y as WeekNavigation,ne as __namedExportsOrder,te as default};
