const p=e=>e.kind==="expense"?e.amount:e.kind==="reversal"?-e.amount:0;export{p as e};
