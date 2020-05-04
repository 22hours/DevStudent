const timeForToday = (value) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
};

const getTimeStamp = () => {
    var d = new Date();
    var s =
        leadingZeros(d.getFullYear(), 4) + "-" + leadingZeros(d.getMonth() + 1, 2) + "-" + leadingZeros(d.getDate(), 2);
    // "-" +
    // leadingZeros(d.getHours(), 2) +
    // ":" +
    // leadingZeros(d.getMinutes(), 2) +
    // ":" +
    // leadingZeros(d.getSeconds(), 2);

    return s;
};

function leadingZeros(n, digits) {
    var zero = "";
    n = n.toString();

    if (n.length < digits) {
        for (var i = 0; i < digits - n.length; i++) zero += "0";
    }
    return zero + n;
}

export { timeForToday, getTimeStamp };
