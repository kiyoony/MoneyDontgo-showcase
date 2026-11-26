import{c as S,a as V}from"./book-scenarios-C5IhzNz1.js";import{j as e,s as n,p as c}from"./theme-Bmk8G3Xq.js";import"./cashflow-sankey-DMHpqij8.js";import{S as w,d as v,C as y,A as i,f,u as m,V as p,e as C,g as W,s as T}from"./components-CrgZFfWO.js";import"./iframe-DcUV9DEb.js";import{F as k}from"./feedback-CK4rgOZM.js";import{b as E}from"./calendar-DHZANot5.js";import"./preload-helper-DhRmtqSx.js";function F({model:o,feedback:d,onRegister:l,onRevalue:a,cardSummaries:r}){return e.jsxs(w,{children:[e.jsx(k,{value:d}),l?e.jsx(v,{label:"자산 등록",onPress:l}):null,e.jsxs(y,{style:s.totalCard,children:[e.jsx(i,{style:s.totalLabel,children:"비현금 자산 평가액"}),e.jsx(i,{style:s.totalValue,children:f(o.total)}),e.jsx(i,{style:m.helper,children:"마지막 수동 평가 기준"})]}),e.jsxs(p,{style:s.section,children:[e.jsx(C,{title:"보유 자산"}),e.jsxs(y,{style:s.listCard,children:[o.assets.map((t,h)=>e.jsxs(p,{style:[s.asset,h>0&&s.divider],children:[e.jsxs(p,{style:s.assetText,children:[e.jsx(i,{style:m.value,children:t.name}),e.jsx(i,{style:m.label,children:t.detail})]}),e.jsxs(p,{style:s.assetValue,children:[e.jsx(i,{style:s.value,children:f(t.value)}),e.jsx(W,{value:t.change,unit:"%",context:"이전 평가 대비",style:s.change}),a?e.jsx(v,{label:`평가 갱신 ${t.name}`,variant:"secondary",onPress:()=>a(t.id)}):null]})]},t.id)),o.assets.length===0?e.jsx(p,{style:s.empty,children:e.jsx(i,{style:m.value,children:"등록된 자산이 없습니다."})}):null]})]}),r]})}const s=T.create({totalCard:{backgroundColor:"transparent",gap:n.sm},totalLabel:{color:c.muted,fontWeight:"600"},totalValue:{color:c.ink,fontSize:28,fontWeight:"700"},section:{gap:n.md},listCard:{paddingVertical:0},asset:{flexDirection:"row",flexWrap:"wrap",gap:n.md,alignItems:"center",paddingVertical:n.md},divider:{borderTopWidth:1,borderTopColor:c.border},assetText:{flexGrow:1,flexBasis:140,minWidth:0,gap:4},assetValue:{gap:n.sm,flexGrow:1,flexBasis:140,minWidth:0,alignItems:"flex-end"},value:{color:c.ink,fontSize:16,fontWeight:"600"},change:{color:c.muted,fontSize:13,textAlign:"right"},empty:{gap:n.xs,paddingVertical:n.lg}});function H(o,d){return d.filter(l=>l.holdingId===o).sort((l,a)=>a.valuedAt.localeCompare(l.valuedAt))}function A(o,d){const l=o.flatMap(a=>{const[r,t]=H(a.id,d);if(!r)return[];const h=t&&t.value!==0?(r.value-t.value)/t.value*100:null;return[{id:a.id,name:a.name,detail:`${E(r.valuedAt).replaceAll("-",".")} 수동 평가`,value:r.value,change:h}]});return{assets:l,total:l.reduce((a,r)=>a+r.value,0)}}const j=S(),b=V(),L={title:"Screens/Assets",component:F,args:{model:A(j.assetHoldings,j.valuations)},argTypes:{model:{control:"object"}}},u={},g={args:{model:A(b.assetHoldings,b.valuations)}},x={args:{model:{total:9e5,assets:[{id:"asset-down",name:"국내 주식",detail:"2026.09.11 수동 평가",value:9e5,change:-10}]}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    model: createAssetsViewModel(empty.assetHoldings, empty.valuations)
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    model: {
      total: 900_000,
      assets: [{
        id: 'asset-down',
        name: '국내 주식',
        detail: '2026.09.11 수동 평가',
        value: 900_000,
        change: -10
      }]
    }
  }
}`,...x.parameters?.docs?.source}}};const $=["Populated","Empty","Falling"];export{g as Empty,x as Falling,u as Populated,$ as __namedExportsOrder,L as default};
