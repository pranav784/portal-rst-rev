import React from 'react';
import { Pie } from 'react-chartjs-2';
const ReviewAnalytics = ({ reviewData }) => {
 // Default data if no reviewData is provided
 const defaultData = {
 labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
 datasets: [
 {
 data: [50, 25, 15, 5, 5],
 backgroundColor: ['#4caf50', '#8bc34a', '#ffc107', '#ff9800',
'#f44336'],
 },
 ],
 };
 // Use provided reviewData or fallback to default
 const data = reviewData || defaultData;
 const options = {
 responsive: true,
 plugins: {
 legend: {
 position: 'top',
 },
 tooltip: {
 callbacks: {
 label: (tooltipItem) => {
 const label = tooltipItem.label || '';
 const value = tooltipItem.raw || 0;
 return `${label}: ${value}`;
 },
 },
 },
 },
 };
 return (
 <div>
 <h2>Review Analytics</h2>
 <div role="img" aria-label="Review distribution pie chart">
 <Pie data={data} options={options} />
 </div>
 </div>
 );
};
export default ReviewAnalytics; 