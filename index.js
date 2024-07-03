// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}

saturdayFun();
saturdayFun("bathe my dog");

//
const mondayWork = function(actMonday = "go to the office"){
    return (`This Monday, I will ${actMonday}.`);
}
mondayWork();
mondayWork("go to the nail salon");

//
function wrapAdjective(description = '*'){
    const selfAffirmations = function(adj = "special"){
        return `You are ${description}${adj}${description}!`;
    };
    return selfAffirmations;
}
wrapAdjective();
wrapAdjective('*');
wrapAdjective('||');
