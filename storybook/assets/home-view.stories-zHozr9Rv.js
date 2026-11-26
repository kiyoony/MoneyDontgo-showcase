import{c as ee,a as te}from"./book-scenarios-C5IhzNz1.js";import{j as t,p as m,s as y}from"./theme-Bmk8G3Xq.js";import"./cashflow-sankey-CiEQazL3.js";import{_ as ne,V as p,b as ae,s as P,S as q,A as u,u as f,g as K,C as R,f as j,M as F,d as b}from"./components-D_GHyz9Y.js";import{r as v}from"./iframe-D6EPEmzm.js";import{a as U,f as re,b as oe}from"./calendar-DHZANot5.js";import{e as se}from"./cancellation-B33q6obR.js";import"./preload-helper-DhRmtqSx.js";var ie=["animating","color","hidesWhenStopped","size","style"],N=e=>v.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e}),Y=v.forwardRef((e,r)=>{var a=e.animating,i=a===void 0?!0:a,o=e.color,n=o===void 0?"#1976D2":o,l=e.hidesWhenStopped,c=l===void 0?!0:l,d=e.size,h=d===void 0?"small":d,W=e.style,x=ne(e,ie),M=v.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},N({stroke:n,opacity:.2}),N({stroke:n,strokeDasharray:80,strokeDashoffset:60}));return v.createElement(p,ae({},x,{"aria-valuemax":1,"aria-valuemin":0,ref:r,role:"progressbar",style:[A.container,W]}),v.createElement(p,{children:M,style:[typeof h=="number"?{height:h,width:h}:ce[h],A.animation,!i&&A.animationPause,!i&&c&&A.hidesWhenStopped]}))});Y.displayName="ActivityIndicator";var A=P.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),ce=P.create({small:{width:20,height:20},large:{width:36,height:36}});const le=new Set(["cash","bank","investment","real-estate","other-asset"]),L=new Set(["credit-card","loan","other-liability"]);function de(e){if(!Number.isSafeInteger(e)||e<=0)throw new Error("금액은 0보다 큰 원 단위 정수여야 합니다.")}function me(e){const r=[];try{de(e.amount)}catch(a){r.push(a instanceof Error?a.message:"금액이 올바르지 않습니다.")}return e.kind==="income"&&!e.toAccountId&&r.push("수입에는 입금 계정이 필요합니다."),e.kind==="expense"&&!e.fromAccountId&&!e.toAccountId&&r.push("지출에는 현금 출금 계정 또는 카드 부채 계정이 필요합니다."),(e.kind==="transfer"||e.kind==="card-payment")&&(!e.fromAccountId||!e.toAccountId)&&r.push("이체와 카드납부에는 출금·입금 계정이 모두 필요합니다."),e.fromAccountId&&e.toAccountId&&e.fromAccountId===e.toAccountId&&r.push("출금 계정과 입금 계정은 달라야 합니다."),e.kind==="reversal"&&(!e.reversalOfId||!e.fromAccountId||e.toAccountId)&&r.push("취소에는 원 승인과 카드 계정이 필요합니다."),r}function ue(e,r){const a=new Map(e.map(n=>[n.id,n])),i=Object.fromEntries(e.map(n=>[n.id,n.openingBalance])),o=(n,l)=>{!n||!a.has(n)||(i[n]=(i[n]??0)+l)};for(const n of r){if(me(n).length>0)continue;const l=n.fromAccountId?a.get(n.fromAccountId):void 0,c=n.toAccountId?a.get(n.toAccountId):void 0;switch(n.kind){case"income":o(n.toAccountId,n.amount);break;case"expense":c&&L.has(c.kind)?o(c.id,n.amount):o(n.fromAccountId,-n.amount);break;case"transfer":o(l?.id,L.has(l?.kind??"cash")?n.amount:-n.amount),o(c?.id,L.has(c?.kind??"cash")?-n.amount:n.amount);break;case"reversal":o(l?.id,-n.amount);break;case"card-payment":o(l?.id,-n.amount),o(c?.id,-n.amount);break}}return i}function pe(e,r){return e.reduce((a,i)=>{const o=r[i.id]??0;return le.has(i.kind)?a+o:L.has(i.kind)?a-o:a},0)}function he(e,r,a){return e.filter(i=>(i.kind==="expense"||i.kind==="reversal")&&U(i.occurredAt)===r&&!0).reduce((i,o)=>i+se(o),0)}const $={income:"수입",expense:"지출",transfer:"이체","card-payment":"카드납부",reversal:"카드 취소"};function ye({model:e,localReady:r,onCapture:a,onMonthly:i,onDaily:o,onRecords:n,onDrafts:l,draftCount:c,onTransaction:d}){if(!r)return t.jsx(q,{children:t.jsxs(p,{style:s.loading,children:[t.jsx(Y,{accessibilityLabel:"내 장부 준비 중",color:m.primary}),t.jsx(u,{style:f.subtitle,children:"내 장부를 준비하고 있어요."})]})});const h=e.income-e.expense,W=t.jsxs(t.Fragment,{children:[t.jsxs(p,{style:s.section,children:[t.jsx(K,{title:"이번 달 쓴 돈"}),t.jsxs(R,{style:s.monthCard,children:[e.expense<0?t.jsx(u,{style:f.label,children:"환급 초과"}):null,t.jsx(u,{style:s.monthAmount,children:j(Math.abs(e.expense))}),t.jsx(p,{style:s.monthDivider}),t.jsxs(p,{style:s.monthMeta,children:[t.jsxs(p,{children:[t.jsx(u,{style:s.metaLabel,children:"수입"}),t.jsx(u,{style:[s.metaAmount,{color:m.income}],children:j(e.income)})]}),t.jsxs(p,{children:[t.jsx(u,{style:s.metaLabel,children:"순현금흐름"}),t.jsx(u,{style:s.metaAmount,children:j(h)})]})]})]})]}),t.jsxs(p,{style:s.section,children:[t.jsx(K,{title:"최근 거래"}),e.recentTransactions.length===0?t.jsx(u,{style:f.helper,children:"아직 반영된 거래가 없습니다."}):t.jsx(R,{style:s.listCard,children:e.recentTransactions.map((x,M)=>{const{id:k,kind:g,merchant:J,occurredAt:Q,amount:X}=x,z=J||(g==="transfer"||g==="card-payment"?$[g]:"거래 상대 미입력"),O="home-kind-"+encodeURIComponent(k),V="home-amount-"+encodeURIComponent(k),Z=g==="income"?m.income:g==="expense"?m.expenseStrong:m.ink;return t.jsxs(F,{accessibilityRole:"button","aria-describedby":O+" "+V,accessibilityLabel:"거래 상세 "+z,onPress:()=>d?.(k),style:[s.transaction,M>0&&s.divider],children:[t.jsxs(p,{style:s.transactionText,children:[t.jsx(u,{numberOfLines:2,style:f.value,children:z}),t.jsxs(u,{nativeID:O,style:f.label,children:[$[g]," · ",re(Q)]})]}),t.jsx(u,{nativeID:V,style:[s.transactionAmount,{color:Z}],children:j(X)})]},k)})})]}),t.jsx(F,{accessibilityRole:"button",accessibilityLabel:"이번 달 결산 보기",onPress:i,style:({pressed:x})=>[s.monthLink,x&&s.pressed],children:t.jsx(u,{style:s.monthLinkText,children:"이번 달 결산 보기"})})]});return t.jsxs(q,{children:[t.jsx(u,{accessibilityRole:"header",style:f.title,children:"이번 달 기록"}),o||n||l?t.jsxs(p,{style:s.quickLinks,children:[t.jsxs(p,{style:s.periodLinks,children:[o?t.jsx(b,{label:"일간",accessibilityLabel:"일간 기록 보기",variant:"quiet",onPress:o}):null,n?t.jsx(b,{label:"전체",accessibilityLabel:"전체 기록 보기",variant:"quiet",onPress:n}):null]}),l?t.jsx(b,{label:c?"초안 "+c:"초안",accessibilityLabel:c?"초안 보관함 열기 ("+c+"개)":"초안 보관함 열기",variant:"quiet",onPress:l}):null]}):null,e.isEmpty?t.jsxs(R,{style:s.emptyCard,children:[t.jsx(u,{style:s.emptyTitle,children:"첫 거래를 기록해볼까요?"}),t.jsx(b,{accessibilityLabel:"첫 거래 기록하기",label:"거래 기록하기",onPress:a})]}):t.jsxs(t.Fragment,{children:[t.jsx(b,{label:"거래 기록하기",onPress:a}),W]})]})}const s=P.create({quickLinks:{flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},periodLinks:{flexDirection:"row",gap:y.xs},loading:{minHeight:220,alignItems:"center",justifyContent:"center",gap:y.md},pressed:{opacity:.8},section:{gap:y.md},monthCard:{gap:y.sm,padding:y.lg,backgroundColor:"transparent",borderColor:m.borderSubtle,borderRadius:8},monthAmount:{color:m.expenseStrong,fontSize:44,fontWeight:"700",textAlign:"right",fontVariant:["tabular-nums"]},monthDivider:{height:1,marginVertical:y.xs,backgroundColor:m.borderSubtle},monthMeta:{flexDirection:"row",flexWrap:"wrap",gap:y.xl},metaLabel:{color:m.muted,fontSize:12,fontWeight:"700"},metaAmount:{marginTop:4,color:m.ink,fontSize:15,fontWeight:"600",textAlign:"right",fontVariant:["tabular-nums"]},listCard:{paddingVertical:0,borderRadius:8},transaction:{flexDirection:"row",alignItems:"center",minHeight:68,paddingHorizontal:y.md,gap:y.sm},transactionText:{flex:1,minWidth:0,gap:4},transactionAmount:{flexShrink:0,textAlign:"right",fontVariant:["tabular-nums"],color:m.expense,fontSize:15,fontWeight:"600"},divider:{borderTopWidth:1,borderTopColor:m.border},monthLink:{minHeight:52,alignItems:"center",justifyContent:"center",borderWidth:1.5,borderColor:m.primary,borderRadius:8},monthLinkText:{color:m.primary,fontSize:16,fontWeight:"600"},emptyCard:{gap:y.md,padding:y.lg,borderRadius:8},emptyTitle:{color:m.ink,fontSize:21,fontWeight:"700"}});function G(e,r,a,i,o,n){const l=r?e.filter(d=>d.householdId===r):[],c=ue(l,[...a]);return{signedIn:i,demo:r==="demo-active",isEmpty:a.length===0,netWorth:pe(l,c),income:a.filter(d=>d.kind==="income"&&U(d.occurredAt)===o).reduce((d,h)=>d+h.amount,0),expense:he([...a],o),bankBalance:c.bank??0,cardBalance:c.card??0,recentTransactions:a.filter(d=>oe(d.occurredAt)<=n).sort((d,h)=>Date.parse(h.occurredAt)-Date.parse(d.occurredAt)||h.id.localeCompare(d.id)).slice(0,5)}}const{expect:E,fn:_}=__STORYBOOK_MODULE_TEST__,B=ee(),D=te(),H=G(B.accounts,B.book.id,B.transactions,!0,"2026-08","2026-08-31"),ge=G(D.accounts,D.book.id,D.transactions,!1,"2026-08","2026-08-31"),we={title:"Screens/Home",component:ye,args:{model:H,localReady:!0,onCapture:_(),onMonthly:_()},argTypes:{model:{control:"object"},localReady:{control:"boolean"},onCapture:{control:!1},onMonthly:{control:!1}}},S={play:async({args:e,canvas:r,userEvent:a})=>{await a.click(r.getByRole("button",{name:"거래 기록하기"})),await E(e.onCapture).toHaveBeenCalledOnce()}},I={args:{model:ge},play:async({args:e,canvas:r,userEvent:a})=>{await a.click(r.getByRole("button",{name:"첫 거래 기록하기"})),await E(e.onCapture).toHaveBeenCalledOnce()}},w={args:{localReady:!1}},T={args:{model:{...H,signedIn:!1,demo:!1}}},C={args:{model:{...H,recentTransactions:[{...B.transactions.find(e=>e.id==="demo-groceries"),merchant:void 0}]},onTransaction:_()},play:async({args:e,canvas:r,userEvent:a})=>{await E(r.queryByText("미분류 거래")).not.toBeInTheDocument(),await a.click(r.getByRole("button",{name:"거래 상세 거래 상대 미입력"})),await E(e.onTransaction).toHaveBeenCalledWith("demo-groceries")}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '거래 기록하기'
    }));
    await expect(args.onCapture).toHaveBeenCalledOnce();
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    model: emptyModel
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '첫 거래 기록하기'
    }));
    await expect(args.onCapture).toHaveBeenCalledOnce();
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    localReady: false
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    model: {
      ...populatedModel,
      signedIn: false,
      demo: false
    }
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    model: {
      ...populatedModel,
      recentTransactions: [{
        ...active.transactions.find(item => item.id === 'demo-groceries')!,
        merchant: undefined
      }]
    },
    onTransaction: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.queryByText('미분류 거래')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '거래 상세 거래 상대 미입력'
    }));
    await expect(args.onTransaction).toHaveBeenCalledWith('demo-groceries');
  }
}`,...C.parameters?.docs?.source}}};const Te=["Populated","Empty","Loading","LocalPopulated","MissingMerchant"];export{I as Empty,w as Loading,T as LocalPopulated,C as MissingMerchant,S as Populated,Te as __namedExportsOrder,we as default};
