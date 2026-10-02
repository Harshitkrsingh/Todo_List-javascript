📝 Todo List

A simple and responsive Todo List application built using HTML, CSS, and JavaScript.

The app allows users to add, complete, and remove todos. Todo data is stored in LocalStorage, so the todos remain available even after refreshing the page.

🚀 Features

- ➕ Add new todos
- ✅ Mark todos as completed
- 🗑️ Remove todos
- 💾 Data persistence using LocalStorage
- 📱 Responsive design
- 🎨 Clean and modern UI
- ⚡ Built with Vanilla JavaScript

🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage

📂 Project Structure

todo-list-javascript/
│
├── index.html
├── style.css
└── script.js

⚙️ How to Run

1. Clone the repository:

git clone YOUR_REPOSITORY_URL

2. Open the project folder.

3. Open "index.html" in your browser.

That's it! 🚀

💡 How It Works

Each todo is stored as an object containing:

{
    id: Date.now(),
    text: "Learn JavaScript",
    completed: false
}

The todos are stored in the browser's LocalStorage, allowing them to persist after refreshing the page.

📸 Preview

<img width="1897" height="907" alt="image" src="https://github.com/user-attachments/assets/f239835e-f80d-4598-a5e6-fc4ce932c165" />


📌 Future Improvements

- Edit todo functionality
- Todo filters (All / Active / Completed)
- Dark mode
- Todo due dates
- Better animations

👨‍💻 Author

Harshit Kumar Singh

Built while learning and practicing JavaScript DOM manipulation, events, and LocalStorage.
