// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(style) {
    let result = (function(string = 'special'){
        return `You are ${style}${string}${style}!`
    })
    return result
}
