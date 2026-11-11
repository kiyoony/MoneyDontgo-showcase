import{j as e,s as l,p as y}from"./theme-B2QsN4Sz.js";import"./cashflow-sankey-D85FpS-d.js";import{V as o,A as n,u as c,f as g,S as V}from"./components-DvscOU_I.js";import{r as W}from"./iframe-Doe5r-is.js";import{D}from"./date-field.web-DLTSZKek.js";import{b as I}from"./calendar-DHZANot5.js";import{l as R,F as i}from"./ledger-ui-CypR_rRD.js";import"./preload-helper-DhRmtqSx.js";function k({plan:t,onDate:s,asOf:E,editablePlan:v}){const[F,O]=W.useState(0),w=F>=(s?580:320),j=s?64:36,f=s?120:88,B=s?72:44,T=s?l.md:l.sm,S=E??I(new Date);return e.jsxs(o,{onLayout:a=>O(a.nativeEvent.layout.width),style:{gap:l.sm},children:[w?e.jsxs(o,{style:{flexDirection:"row",padding:l.sm,backgroundColor:y.surfaceMuted,gap:T},children:[e.jsx(n,{style:[c.helper,{width:j}],children:"회차"}),e.jsx(n,{style:[c.helper,{flex:1}],children:"결제일"}),e.jsx(n,{style:[c.helper,{width:f,textAlign:"right"}],children:"금액"}),e.jsx(n,{style:[c.helper,{width:B,textAlign:"right"}],children:"상태"})]}):null,t.payments.map((a,r)=>{const u=v?.payments[r]??a,x=a.cancelled?"취소":u.date>S?"예정":"반영",L=s&&!a.cancelled&&!u.cancelled&&u.date>S,_=r+1+"/"+t.payments.length+"회차 · "+a.date+" · "+g(a.amount)+" · "+x,A=L?e.jsx(D,{label:t.merchant+" "+(r+1)+"회차 결제일",value:a.date,onChange:C=>s?.(r,C)}):e.jsx(n,{children:a.date});return e.jsx(o,{accessibilityLabel:_,style:{borderBottomWidth:1,borderBottomColor:y.border,paddingVertical:l.sm,gap:l.sm},children:w?e.jsxs(o,{style:{flexDirection:"row",alignItems:"center",gap:T,paddingHorizontal:l.sm},children:[e.jsxs(n,{style:{width:j},children:[r+1,"/",t.payments.length]}),e.jsx(o,{style:{flex:1,minWidth:0},children:A}),e.jsx(n,{style:{width:f,textAlign:"right",fontWeight:"600"},children:g(a.amount)}),e.jsx(n,{style:{width:B,textAlign:"right",color:y.muted},children:x})]}):e.jsxs(o,{style:R.stack,children:[e.jsxs(i,{label:"회차",children:[r+1,"/",t.payments.length]}),L?A:e.jsx(i,{label:"결제일",children:a.date}),e.jsx(i,{label:"금액",children:g(a.amount)}),e.jsx(i,{label:"상태",children:x})]})},r)})]})}const{expect:d,fn:H}=__STORYBOOK_MODULE_TEST__,b={type:"installment",id:"design-example",householdId:"example",cardId:"card",merchant:"합성 할부",purchaseDate:"2026-10-20",totalAmount:1e5,createdBy:"owner",createdAt:"2026-10-20T03:00:00Z",revision:1,payments:[{date:"2026-11-15",amount:33333},{date:"2026-12-15",amount:33333},{date:"2027-01-15",amount:33334}]},Z={title:"Features/Accounts/PaymentSchedule",component:k,args:{plan:b,asOf:"2026-11-18"},decorators:[t=>e.jsx(V,{children:e.jsx(t,{})})]},m={},p={args:{onDate:H()},play:async({canvas:t})=>{await d(t.queryByLabelText("합성 할부 1회차 결제일")).not.toBeInTheDocument(),await d(t.getByLabelText("합성 할부 2회차 결제일")).toBeVisible(),await d(t.getByLabelText("합성 할부 3회차 결제일")).toBeVisible(),await d(t.getByLabelText("1/3회차 · 2026-11-15 · 33,333원 · 반영")).toHaveTextContent("반영")}},h={args:{plan:{...b,payments:b.payments.map((t,s)=>s?{...t,cancelled:!0}:t)}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onDate: fn()
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByLabelText('합성 할부 1회차 결제일')).not.toBeInTheDocument();
    await expect(canvas.getByLabelText('합성 할부 2회차 결제일')).toBeVisible();
    await expect(canvas.getByLabelText('합성 할부 3회차 결제일')).toBeVisible();
    await expect(canvas.getByLabelText('1/3회차 · 2026-11-15 · 33,333원 · 반영')).toHaveTextContent('반영');
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    plan: {
      ...plan,
      payments: plan.payments.map((payment, index) => index ? {
        ...payment,
        cancelled: true
      } : payment)
    }
  }
}`,...h.parameters?.docs?.source}}};const J=["ReadonlySchedule","FutureOnlyEditing","CancelledFuture"];export{h as CancelledFuture,p as FutureOnlyEditing,m as ReadonlySchedule,J as __namedExportsOrder,Z as default};
