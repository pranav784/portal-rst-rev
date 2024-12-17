import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ReviewList = () => {
 const [reviews, setReviews] = useState([]);
 const [filter, setFilter] = useState(''); // Default filter is empty
 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalPages, setTotalPages] = useState(0);
 const itemsPerPage = 5; // Number of reviews per page
 useEffect(() => {
 const fetchReviews = async () => {
 setLoading(true);
 try {
 const response = await
axios.get(`https://example.com/api/reviews?page=${currentPage}&limit=${ite
msPerPage}`);
 setReviews(response.data.reviews);
 setTotalPages(response.data.totalPages); // Assuming the API
returns total pages
 } catch (error) {
 console.error('Error fetching reviews:', error);
 } finally {
 setLoading(false);
 }
 };
 fetchReviews();
 }, [currentPage]);
 useEffect(() => {
 const sortReviews = () => {
 const sortedReviews = [...reviews];
 if (filter === 'ratingHigh') {
 sortedReviews.sort((a, b) => b.rating - a.rating);
 } else if (filter === 'ratingLow') {
 sortedReviews.sort((a, b) => a.rating - b.rating);
 } else if (filter === 'date') {
 sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
 }
 setReviews(sortedReviews);
 };
 sortReviews();
 }, [filter, reviews]);
 const handleNextPage = () => {
 if (currentPage < totalPages) {
 setCurrentPage(currentPage + 1);
 }
 };
 const handlePrevPage = () => {
 if (currentPage > 1) {
 setCurrentPage(currentPage - 1);
 }
 };
 return (
 <div>
 <h2>Reviews</h2>
 <div className="mb-3">
 <label htmlFor="filterSelect" className="form-label">Sort
By:</label>
 <select
 id="filterSelect"
 className="form-select"
 value={filter}
 onChange={(e) => setFilter(e.target.value)}
 >
 <option value="">Select Filter</option>
 <option value="ratingHigh">Rating: High to Low</option>
 <option value="ratingLow">Rating: Low to High</option>
 <option value="date">Date: Newest First</option>
 </select>
 </div>
 {loading ? (
 <p>Loading reviews...</p>
 ) : (
 reviews.map((review) => (
 <div key={review.id} className="card my-2">
 <div className="card-body">
 <h5 className="card-title">{review.author}</h5>
 <p className="card-text">{review.text}</p>
 <p className="card-text"><strong>Rating:</strong>
{review.rating} / 5</p>
 <p className="card-text"><strong>Date:</strong> {new
Date(review.date).toLocaleDateString()}</p>
 </div>
 </div>
 ))
 )}
 <div className="pagination-controls">
 <button onClick={handlePrevPage} disabled={currentPage ===
1}>Previous</button>
 <span>Page {currentPage} of {totalPages}</span>
 <button onClick={handleNextPage} disabled={currentPage ===
totalPages}>Next</button>
 </div>
 </div>
 );
};
export default ReviewList; 
