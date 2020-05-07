function highestWicketTakers(matches,deliveries){
    const result={};
    //console.log()
    let arrofmatches=[];
    for(let match of matches){
        let season=match.season;
        let matchids=match.id
            if(season=='2016'){
                arrofmatches.push(matchids)
            }
    }
    for(let delivery of deliveries){
        let id=delivery.match_id;
        if(arrofmatches.includes(id)){
        let bowler=delivery.bowler;
        if(delivery.batsman==delivery.player_dismissed){

            if(result[bowler]){
                result[bowler]+=1
            }else{
                result[bowler]=1
            }
        }
    }
}
let arr=Object.entries(result);
let sorted=arr.sort((a,b) => b[1]-a[1]);
let onlyTopTen=sorted.slice(0,10);
var objSorted = {}
onlyTopTen.forEach(function(item){
objSorted[item[0]]=item[1]
})
return (objSorted);

}
module.exports=highestWicketTakers;