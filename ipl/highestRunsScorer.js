function HighestRunsScorer(matches,deliveries){

    
    let result={};var arr=[];
    for(let match of matches){
        let ids=match.id;
        let season=match.season;
        if(season=='2018'){
            arr.push(ids);
        }
    }
    for(let delivery of deliveries){
        let id=delivery.match_id;
        if(arr.includes(id)){
        let batsman=delivery.batsman;
        if(result[batsman]){
            result[batsman]+=parseInt(delivery.batsman_runs);
        }else{
            result[batsman]=parseInt(delivery.batsman_runs);
        }

    }
}

//TOP TEN ONLY
var sortable = [];
    for (var i in result) {
    sortable.push([i, result[i]]);
    }
    sortable.sort(function(a, b) {
    return b[1] - a[1];
    });

var ar2=sortable.slice(0,10);
var finalResult={}
for(var i=0;i<ar2.length;i++){

    finalResult[ar2[i][0]]=ar2[i][1];
}
return finalResult;
}

module.exports = HighestRunsScorer;