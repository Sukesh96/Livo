
// Revenue Chart //
var ctx = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            data: [100, 180, 50, 300, 750, 420, 750, 500, 1200, 1100, 1200 ,1500],
            borderColor: [
                '#f21c47',
            ],
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 0,
        }],
    },

    options: {
        scales: {
            y: {
                beginAtZero: true,
                steps: 8,
                stepValue: 250,
                max: 2000,
                
                grid:{
                    display:false,
                    drawBorder: false,
                },
                ticks: {
                    color: '#12303c',
                    fontFamily: 'Barlow',
                    font: {
                        size: 10,
                        weight: 600,
                    },
                },
                
            },

            x:{
                grid:{
                    tickColor: 'transparent',
                    lineWidth: 1,
                    borderDash:[10,10],
                    drawBorder: false,
                },

                ticks: {
                    color: '#12303c',
                    fontFamily: 'Barlow',
                    font: {
                        size: 10,
                        weight: 600,
                    },
                },
            },
            
        },

        plugins: {
            legend: {
                display: false,
            },
        }
    }
});



// Listing Chart //
var ctx = document.getElementById('listingChart').getContext('2d');
var listingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: [
            ['Jan'],
            ['Feb'],
            ['Mar'],
            ['Apr'],
            ['May'],
            ['Jun'],
            ['Jul'],
            ['Aug'],
            ['Sep'],
            ['Oct'],
            ['Nov'],
            ['Dec'],
        ],
        datasets: [
            {
                label: "Set 1",
                data: [ 1000, 800, 1200, 1500, 1600, 1000, 900, 1500, 1950, 700, 850, 1200 ],
                backgroundColor: '#380e79',
                borderColor: '#380e79',
                // borderWidth: 1,
                barPercentage: 0.4,
            },
            {
                label: "Set 2",
                data: [ 800, 1500, 1740, 1100, 1600, 1900, 1500, 1200, 1400, 900, 1850, 1750 ],
                backgroundColor: '#380e79',
                borderColor: '#380e79',
                // borderWidth: 1,
                barPercentage: 0.4,
            },
            {
                label: "Set 2",
                data: [ 1100, 1900, 600, 900, 1900, 1500, 1100, 1750, 1650, 1000, 500, 1800 ],
                backgroundColor: '#380e79',
                borderColor: '#380e79',
                // borderWidth: 1,
                barPercentage: 0.4,
            },
            {
                label: "Set 2",
                data: [ 800, 1500, 1800, 900, 1500, 1600, 1450, 1920, 1453, 1692, 1478, 1654 ],
                backgroundColor: '#380e79',
                borderColor: '#380e79',
                // borderWidth: 1,
                barPercentage: 0.4,
            },
            
            {
            // data: [100, 180, 50, 300, 750, 420, 750, 500, 1200, 1100, 1200 ,1500],
            // borderColor: [
            //     '#380e79',
            // ],
            // borderWidth: 3,
            // tension: 0.5,
            // pointRadius: 0,
            
            }
        ],
    },

    options: {
        layout: {
            padding: {
                left: 10,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                steps: 8,
                stepValue: 250,
                max: 2000,
                
                grid:{
                    display:false,
                    drawBorder: false,
                },
                ticks: {
                    color: '#12303c',
                    fontFamily: 'Barlow',
                    font: {
                        size: 10,
                        weight: 600,
                    },
                    
                },
                
            },

            x:{
                grid:{
                    tickColor: 'transparent',
                    display:false,
                    drawBorder: false,
                },

                ticks: {
                    color: '#12303c',
                    fontFamily: 'Barlow',
                    font: {
                        size: 10,
                        weight: 600,
                    },
                    // padding:10,
                },
            },
            
        },

        plugins: {
            legend: {
                display: false,
            },
        }
    }
});
    

        

        