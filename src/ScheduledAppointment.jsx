import React, {useState, useEffect} from "react"



export default function ScheduledAppointment() {

    const [appointmentList, getAppointmentList] = useState([]);

    const userId = sessionStorage.getItem("user_id")

    useEffect(() => {
        fetch(`/api/appointment-list-${userId}`)
        .then((response) => response.json())
        .then((appointmentData) => {
            console.log(appointmentData)
            getAppointmentList(appointmentData);
        })
        }, []);
    
    const appointments = appointmentList.map(appointmentList => <li value={appointmentList}>{appointmentList}</li>)

    return(
    <div>
        <h1>View Appointments</h1>
            <ul>
                {appointments}
            </ul>
    </div>
    )
}