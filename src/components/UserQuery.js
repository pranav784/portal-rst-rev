import React, { useState } from 'react';
const UserQuery = () => {
 const [query, setQuery] = useState('');
 const handleSubmit = (e) => {
 e.preventDefault();
 if (query.trim() === '') {
 alert('Please enter a search query.');
 return;
 }
 alert(`You are searching for: ${query}`);
 setQuery(''); // Clear the input field after submission
 };
 return (
 <div className="my-3">
 <form onSubmit={handleSubmit}>
 <div className="mb-3">
 <label htmlFor="userQuery" className="form-label">Search
Query</label>
 <input
 id="userQuery"
 type="text"
 className="form-control"
 placeholder="What are you looking for?"
 value={query}
 onChange={(e) => setQuery(e.target.value)}
 />
 </div>
 <button type="submit" className="btn btn-primary">
 Search
 </button>
 </form>
 </div>
 );
};
export default UserQuery; 