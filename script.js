const date = document.getElementById("dates");
const hour = document.getElementById("hour");


function getDate(){
    const currentDate = new Date();

   
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    
    let month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const time = currentDate.toLocaleTimeString();

    if(month === "Jan"){
        month = "January";
    }else if (month === "Feb"){
        month = "February";
    }else if(month === "Mar"){
        month = "March";
    }else if(month === "Apr"){
        month = "April";
    }else if(month === "May"){
        month = "May";
    }else if(month === "Jun"){
        month = "June";
    }else if(month === "Jul"){
        month = "July";
    }else if(month === "Aug"){
        month = "August";
    }else if(month === "Sep"){
        month = "September";
    }else if(month === "Oct"){
        month = "October";
    }else if(month === "Nov"){
        month = "November";
    }else if(month === "Dec"){
        month = "December";
    }


    
    const formattedDate = ` ${day} ${month} ${year} `;
    const formattedTime = ` ${time} `;

    console.log(formattedDate);

    date.innerHTML = formattedDate;
    hour.innerText = formattedTime;

}

setInterval(getDate, 1000);