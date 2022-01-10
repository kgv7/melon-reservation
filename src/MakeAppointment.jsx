import React, {useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


export default function MakeAppointment() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
        <div>
            <h1>Schedule a Tasting</h1>
            <h3>Choose a range of dates to find an available 30-minute tasting.</h3>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                withPortal
            />
        </div>
    );

}