
const styleDate = (date) => {
    const now = new Date();
    const updated = new Date(date);
    const difference = (((now - updated) / 1000) / 60) / 60;
    let changedTime;
    if (difference > 24 && difference < 48) {
        changedTime = "yesterday";
    } else if (difference < 24) {
        let difference2 = (updated.getHours() - 12) - (now.getHours() - 12)
        if (difference2 < 1) {
            changedTime = "one hour ago"
        } else {
            changedTime = difference2 + " hours ago"
        }
    } else {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        changedTime = months[updated.getMonth()] + " " + updated.getDate();
    }
    return changedTime;
}

export default styleDate;