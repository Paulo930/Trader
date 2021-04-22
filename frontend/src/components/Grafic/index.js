import React from 'react'
import { Bar } from 'react-chartjs-2';

export default function Grafic() {
    return (
            <Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'left',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            '#d94a30',
                            '#2cab40',
                            '#d94a30',
                            '#2cab40',
                            '#d94a30',
                            '#2cab40',
                        ],
                        borderWidth: 1
                    }]
                }}
                options={{}}
                />
    )
}
