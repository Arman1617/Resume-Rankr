# Resume-Rankr

Resume-Rankr is a web-based application that helps recruiters rank resumes based on their relevance to a given job description. It uses **Natural Language Processing (NLP)** and **Machine Learning** techniques to evaluate resumes and generate similarity scores.

---

## 🚀 Features

- ✅ **Resume Parsing**: Extracts text from uploaded `.docx` files.
- ✅ **Job Description Matching**: Compares resumes against a given job description.
- ✅ **TF-IDF & Cosine Similarity**: Calculates similarity scores between resumes and job descriptions.
- ✅ **Ranking System**: Sorts resumes based on relevance.
- ✅ **CSV Download**: Download ranked results in a CSV format.
- ✅ **Web Interface**: Built using Flask for easy interaction.

---


# 📥 Installation & Setup

Follow the steps below to set up the **Resume-Rankr** project on your local machine.

---

## **Step 1: Clone the Repository**
First, download the project by cloning it from GitHub:
```bash
git clone https://github.com/Arman1617/Resume-Rankr.git
cd Resume-Rankr
```

---

## **Step 2: Set Up a Virtual Environment (Optional but Recommended)**
Setting up a virtual environment ensures that dependencies are installed in an isolated space without affecting global Python packages.

Run the following command to create a virtual environment:

```bash
python -m venv env
```

### **Activate the Virtual Environment**  
Depending on your operating system, use one of the following commands:

- **Windows**:
  ```bash
  env\Scripts\activate
  ```

- **macOS/Linux**:
  ```bash
  source env/bin/activate
  ```

To confirm the virtual environment is active, you should see **(env)** at the beginning of your terminal prompt.

---

## **Step 3: Install Dependencies**
Once inside the project directory and with the virtual environment activated, install the required Python packages:

```bash
pip install -r requirements.txt
```

This will install all the necessary dependencies, including:
- `Flask` (for the web framework)
- `spaCy` (for NLP processing)
- `scikit-learn` (for machine learning algorithms)
- `python-docx` (for extracting text from `.docx` files)

---

## **Step 4: Download SpaCy NLP Model**
Since the project uses **spaCy** for NLP tasks, you need to download the necessary model:

```bash
python -m spacy download en_core_web_sm
```

This will install the small English NLP model required for extracting names and other text-based insights.

---

# 🚀 Usage Guide

## **Step 1: Run the Flask Application**
Now that everything is installed, start the web application by running:

```bash
python app.py
```

After running this command, the app will be available locally at:  
👉 **http://127.0.0.1:5000/**

---

## **Step 2: Upload Resumes & Job Description**
1. Open the web app in your browser.
2. Upload one or more `.docx` resume files.
3. Enter the job description.
4. Click **Submit** to analyze and rank resumes based on their relevance.

---

## **Step 3: Download Ranked Resumes as CSV**
After ranking, you can download the results in CSV format.

1. Click the **Download CSV** button.
2. The ranked results will be saved as `ranked_resumes.csv`.

---

# 📂 Project Structure
```
Resume-Rankr/
│-- app.py                 # Main Flask application
│-- templates/             # HTML Templates
│   ├── index.html         # Main UI page
│   ├── features.html      # Features page
│   ├── team.html          # Team page
│   ├── contact.html       # Contact page
│-- static/                # Static files (CSS, JS, Images)
│-- uploads/               # Directory for uploaded resumes
│-- requirements.txt       # Required dependencies
│-- README.md              # Documentation
```

---

# 🛠 Technologies Used
This project utilizes the following technologies:

- **Python** - Programming Language
- **Flask** - Web Framework
- **spaCy** - Natural Language Processing
- **scikit-learn** - Machine Learning Algorithms
- **HTML, CSS** - Frontend Development
- **Bootstrap** - Styling and Layout

---

# 🤝 Contributing
Contributions are welcome! Follow these steps to contribute:

1. **Fork** the repository.
2. **Clone** your forked repository:
   ```bash
   git clone https://github.com/your-username/Resume-Rankr.git
   ```
3. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature-branch
   ```
4. **Make changes** and commit:
   ```bash
   git add .
   git commit -m "Added new feature"
   ```
5. **Push to your branch**:
   ```bash
   git push origin feature-branch
   ```
6. **Create a Pull Request** on GitHub.

---

## ✅ **Setup, Usage & Contribution Complete!**
Your **Resume-Rankr** project is now fully set up and ready to use. 🚀  
If you face any issues, feel free to check the project documentation or open an issue on GitHub.

---


