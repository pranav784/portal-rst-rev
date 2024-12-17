Steps to Run the Web Application Locally
This document provides detailed instructions for setting up and testing the Google Integration Portal on a local machine. Follow these steps carefully to ensure the application runs successfully.

1. Prerequisites
Before starting, ensure the following tools and software are installed on your system:
Node.js (https://nodejs.org/) for running the application.
Git (https://git-scm.com/) for cloning the repository.
A Code Editor (e.g., Visual Studio Code) for managing the files.
Internet Access to download dependencies and packages.

2. Clone the Repository
Open your terminal or command prompt.
Execute the following command:
git clone https://github.com/yourusername/your-repo-name.git
Replace yourusername and your-repo-name with your actual GitHub username and repository name.
Navigate to the project directory:
cd your-repo-name

3. Install Dependencies
The project consists of two parts: the back-end and front-end. You need to install dependencies for both.
3.1 Back-End
Navigate to the backend directory:
cd backend
Install the required packages:
npm install
3.2 Front-End
Navigate to the frontend directory:
cd ../frontend
Install the required packages:
npm install

4. Set Up Environment Variables
The application requires environment variables for proper configuration. These variables should be stored in .env files in both the back-end and front-end directories.
4.1 Back-End Environment Variables
Create a .env file in the backend directory.
Add the following variables:
PORT=5000
DB_CONNECTION_STRING=your_database_connection_string
GOOGLE_API_KEY=your_google_api_key
Replace your_database_connection_string and your_google_api_key with the appropriate values.
4.2 Front-End Environment Variables
Create a .env file in the frontend directory.
Add the following variable:
REACT_APP_API_URL=http://localhost:5000

5. Start the Application
The application requires both the back-end server and front-end application to be running simultaneously.
5.1 Start the Back-End Server
Open a terminal and navigate to the backend directory:
cd backend
Start the server:
npm start
The server will run on http://localhost:5000.
5.2 Start the Front-End Application
Open another terminal and navigate to the frontend directory:
cd frontend
Start the React application:
npm start
The application will open in your default browser at http://localhost:3000.

6. Testing the Application
Open the application in your browser at http://localhost:3000.
Use the interface to perform the following actions:
Submit queries in the search bar.
Filter and sort reviews.
Analyze reviews using the provided charts.
Ensure all functionalities work as expected.
Check the browser console and terminal for errors or warnings.

7. Troubleshooting
Port Conflicts: Ensure that ports 3000 (front-end) and 5000 (back-end) are not in use by other applications.
Dependency Issues: Run npm install again in the respective directories to reinstall missing packages.
Environment Variables: Double-check the .env files for correctness.

8. Additional Notes
Database Configuration: If a database is required, ensure it is running and accessible.
Google API Key: Ensure your API key has the necessary permissions for the application.
By following these steps, you should be able to successfully set up and test the Google Integration Portal on your local machine.

