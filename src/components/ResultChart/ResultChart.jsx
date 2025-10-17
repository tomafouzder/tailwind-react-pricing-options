import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "physics": 85,
        "chemistry": 78,
        "math": 90
    },
    {
        "id": 2,
        "name": "Brian Lee",
        "physics": 75,
        "chemistry": 82,
        "math": 88
    },
    {
        "id": 3,
        "name": "Catherine Smith",
        "physics": 92,
        "chemistry": 89,
        "math": 95
    },
    {
        "id": 4,
        "name": "David Miller",
        "physics": 68,
        "chemistry": 74,
        "math": 70
    },
    {
        "id": 5,
        "name": "Ella Brown",
        "physics": 88,
        "chemistry": 91,
        "math": 85
    },
    {
        "id": 6,
        "name": "Frank Wilson",
        "physics": 72,
        "chemistry": 65,
        "math": 80
    },
    {
        "id": 7,
        "name": "Grace Thomas",
        "physics": 95,
        "chemistry": 93,
        "math": 97
    },
    {
        "id": 8,
        "name": "Henry Clark",
        "physics": 81,
        "chemistry": 79,
        "math": 84
    },
    {
        "id": 9,
        "name": "Isabella Davis",
        "physics": 90,
        "chemistry": 87,
        "math": 92
    },
    {
        "id": 10,
        "name": "Jack White",
        "physics": 70,
        "chemistry": 73,
        "math": 75
    }
]


const ResultChart = () => {
    return (
        <div className='mt-20'>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='white'></Line>
                <Line dataKey="physics" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;