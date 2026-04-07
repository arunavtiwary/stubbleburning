document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scrolling & Navigation Active State
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Fade-In Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Chart Parameters Configuration
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#6b7280';
    Chart.defaults.scale.grid.color = '#f1f5f9';

    // 1. Chart: Fire vs AQI (Figure 5) Line Chart
    const ctxFireAQI = document.getElementById('fireAQIChart');
    if (ctxFireAQI) {
        new Chart(ctxFireAQI, {
            type: 'line',
            data: {
                labels: ['August', 'September', 'mid-October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Farm Fires Count',
                        data: [20, 100, 2500, 6000, 500],
                        borderColor: '#ff5e00',
                        backgroundColor: 'rgba(255, 94, 0, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'AQI % Change',
                        data: [5, 10, 80, 250, 90],
                        borderColor: '#dc2626',
                        backgroundColor: 'rgba(220, 38, 38, 0.1)',
                        borderWidth: 3,
                        borderDash: [5, 5],
                        tension: 0.4,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: { display: true, text: 'No. of Fire Incidents' }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { display: true, text: 'AQI % Change over Annual Mean' },
                        grid: { drawOnChartArea: false }
                    }
                }
            }
        });
    }

    // 2. Chart: Revenue Chart (Figure 7) Bar Chart
    const ctxRevenue = document.getElementById('revenueChart');
    if (ctxRevenue) {
        new Chart(ctxRevenue, {
            type: 'bar',
            data: {
                labels: ['Biomass Energy', 'Paper/Packaging', 'Compressed Biogas', 'Animal Fodder'],
                datasets: [{
                    label: 'Potential Revenue (₹ per tonne)',
                    data: [2500, 3000, 2200, 1200], // Illustrative optimal data
                    backgroundColor: [
                        'rgba(255, 94, 0, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Revenue (₹)' }
                    }
                }
            }
        });
    }

    // 3. Chart: Top Districts (Figure 8) Horizontal Bar
    const ctxDistrict = document.getElementById('districtChart');
    if (ctxDistrict) {
        new Chart(ctxDistrict, {
            type: 'bar',
            data: {
                labels: ['Sangrur', 'Tarn Taran', 'Ferozepur', 'Muktsar', 'Amritsar'],
                datasets: [{
                    label: 'Fire Incidents (2025)',
                    data: [695, 693, 544, 367, 197],
                    backgroundColor: 'rgba(220, 38, 38, 0.85)',
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y', // Makes it horizontal
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Fire Incidents' }
                    }
                }
            }
        });
    }
});
