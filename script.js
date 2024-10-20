



// Polar Area Chart
const polarCtx = document
    .getElementById("polarAreaChart")
    .getContext("2d");
const polarAreaChart = new Chart(polarCtx, {
    type: "polarArea",
    data: {
        labels: [
            "Temprature",
            "sleep",
            "Heartrate",
            "Health",
        ],
        datasets: [
            {
                label: "My Polar Area Data",
                data: [37, 56, 70, 90],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",

                ],
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Polar Area Chart Example",
            },
        },
    },
});

// Line Chart
const lineCtx = document
    .getElementById("lineChart")
    .getContext("2d");
const lineChart = new Chart(lineCtx, {
    type: "line",
    data: {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            title: {
                display: true,
                text: "Line Chart Example",
            },
        },
    },
});