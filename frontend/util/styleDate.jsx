
const styleDate = (date) => {
    const now = new Date();
    const updated = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const difference = (((now-updated) / 1000) / 60 ) / 60;
    let changedTime;
    if (difference < 24){
        let timeDifference = (updated.getHours() - 12) - (now.getHours() - 12)
        if (timeDifference < 1) {
            changedTime = "one hour ago"
        } else {
            changedTime = timeDifference + " hour(s) ago"
        }
    } else if (difference > 24 && difference < 48){
        changedTime = "yesterday";
    } else {
        changedTime =  months[updated.getMonth()] + " " + updated.getDate();
    }
    return changedTime;
}

export default styleDate;