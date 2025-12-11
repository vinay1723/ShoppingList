Shopping List Web App

    Live Demo: [https://shoppinglistclient.netlify.app](https://shoppinglistclient.netlify.app/)

    Demo Video: [Video Link](https://youtu.be/DG4YfUpU6Rs)

 This project is a full-stack shopping list application where users can:

    1.Sign up / Log in
    2.Add items to their personal shopping list
    2.Edit existing items
    3.Delete items
    View their list in a clean, organized UI
    
🚀 Tech Stack
Frontend

    React.js
    React Router
    Tailwind CSS
    React-Redux 

Backend

    Node.js
    Express.js
    MongoDB + Mongoose
    JWT Authentication

Deployment

    Frontend: Netlify
    Backend: vercel.com

Database: MongoDB Atlas

📸 Demo (30-second Walkthrough)

Watch the short explanation video showing how the app works and the main features:
➡️ [Demo link](https://youtu.be/DG4YfUpU6Rs)](https://youtu.be/DG4YfUpU6Rs)

Running the Project Locally

  commands:-
  (open your command line interface)
  
  1.git clone [<your-repo-url>](https://github.com/vinay1723/ShoppingList)
  
  2.cd SoppingList

  !!(importtant do the back-end setup before the front-end)

Frontend Setup
 commands:- (open your command line interface)
  1. cd client
  2. npm install
  3. client -> src -> api -> helpers.js (change all https://shopping-list-serv.vercel.app -> http://localhost:3000) do the same for Products.jsx and ShoppingList.jsx (where useEffect contains url links change the part to https://shopping-list-serv.vercel.app -> http://localhost:3000)
  4. npm run dev


Back-end setup

 In the  server->app.js file change the code to this app.use(cors:{origin:"http://localhost:5173"}) or the host link that youre currently running on.
 command:-
  1. npm start
     
Application successfully runs in your application.
 
 
