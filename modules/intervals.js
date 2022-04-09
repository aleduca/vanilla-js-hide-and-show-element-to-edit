let intervals = [];

export function addInterval(index, interval){
    intervals.push({[index]:interval});
    console.log(intervals);
}

export function removeInterval(index){
    const key = intervals.findIndex(inter => {
        return inter[index]
    })

    if(intervals[key]){
        clearInterval(intervals[key][index]);
        intervals.splice(key,1)
    }

    console.log('fim => ', intervals);
}