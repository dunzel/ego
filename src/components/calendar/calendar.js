import React from 'react';
import AvailableTimes from "react-available-times";
import moment from "../../App";

class Calendar extends React.Component {

    render() {

        return (
            <AvailableTimes
                weekStartsOn="monday"
                calendars={[
                    {
                        id: 'work',
                        title: 'Work',
                        foregroundColor: '#ff00ff',
                        backgroundColor: '#f0f0f0',
                        selected: true,
                    },
                ]}
                onChange={(selections) => {
                    selections.forEach(({ start, end }) => {
                        console.log('Start:', start, 'End:', end);
                    })
                }}
                onEventsRequested={({ calendarId, start, end, callback }) => {
                    // MoreEvents(calendarId, start, end).then(callback);
                }}
                initialSelections={[
                    {  }
                ]}
                height={600}
                recurring={true}
                availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                availableHourRange={{ start: 0, end: 24 }}
            />
        );
    }
}

export default Calendar;
