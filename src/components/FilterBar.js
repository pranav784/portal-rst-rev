import React, { useState } from 'react';
const FilterBar = ({ onFilterChange }) => {
 const [sortOption, setSortOption] = useState('');
 const [searchTerm, setSearchTerm] = useState('');
 const handleSortChange = (value) => {
 setSortOption(value);
 onFilterChange(value, searchTerm);
 };
 const handleSearchChange = (value) => {
 setSearchTerm(value);
 onFilterChange(sortOption, value);
 };
 return (
 <div className="d-flex justify-content-between align-items-center my3">
 <div>
 <select
 className="form-select"
 value={sortOption}
 onChange={(e) => handleSortChange(e.target.value)}
 >
 <option value="">Sort By</option>
 <option value="date">Date</option>
 <option value="ratingHigh">Rating: High to Low</option>
 <option value="ratingLow">Rating: Low to High</option>
 </select>
 </div>
 <div>
 <input
 type="text"
 className="form-control"
 placeholder="Search by keyword"
 value={searchTerm}
 onChange={(e) => handleSearchChange(e.target.value)}
 />
 </div>
 </div>
 );
};
export default FilterBar; 