import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilterBar from "./components/FilterBar";
import ReviewList from "./components/ReviewList";
import ReviewAnalytics from "./components/ReviewAnalytics";
import UserQuery from "./components/UserQuery";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
 return (
 <div className="container mt-4">
 <header className="text-center py-4 bg-primary text-white rounded">
 <h1>Google Integration Portal</h1>
 <p className="lead">Effortlessly manage and analyze your Google
reviews</p>
 </header>
 <UserQuery />
 <section className="my-4">
 <FilterBar />
 </section>
 <div className="row">
 <div className="col-lg-8">
 <ReviewList />
 </div>
 <div className="col-lg-4">
 <ReviewAnalytics />
 </div>
 </div>
 <footer className="text-center py-3 mt-4 bg-light rounded">
 <small>Powered by Google APIs | Designed with ❤ </small>
 </footer>
 </div>
 );
}
export default App;