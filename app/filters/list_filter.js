angular.module("app").filter("listfilter",function(){
    return function(item,filters){
        if(filters.families == false
        &&filters.groups == false
        &&filters.individual == false
        &&filters.all_inclusive == false
        &&filters.private_guide == false
        &&filters.premium_package == false){
            return item;
        }
        var res=[],i,lim = item.length;
        for(i=0;i<lim;i++){
            if(item[i].details.families == filters.families
            ||item[i].details.groups == filters.groups
            ||item[i].details.individual == filters.individual
            ||item[i].details.all_inclusive == filters.all_inclusive
            ||item[i].details.private_guide == filters.private_guide
            ||item[i].details.premium_package == filters.premium_package){
                res.push(item[i]);
            }
        }
        return res;
    }
});