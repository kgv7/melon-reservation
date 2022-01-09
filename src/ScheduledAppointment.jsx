import React from "react"


export default function ScheduledAppointment() {

    // const [appointmentList, getAppointmentList] = useState();

    const appointmentList = () => { 
        try{
        const resp = await fetch('/api/appointment-list', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            })
        if (resp.status !== 200) {
            alert("There has been an error");
            return false;
        }
      
        const data = await resp.json();
        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("user_id", data.user_id)
        // alert("You are logged in")
        console.log(sessionStorage.getItem("token"))
        
        return data;
      }
      catch(error){
        console.error("THERE WAS AN ERROR!!!", error)
      };
    };
}



    return(
    <div>
        <h1>View Appointments</h1>
        {appointmentList}
    </div>
    )
}