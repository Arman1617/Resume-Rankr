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

## 📥 Installation & Setup

### **Step 1: Clone the Repository**
First, download the project by cloning it from GitHub:
```bash
git clone https://github.com/Arman1617/Resume-Rankr.git
cd Resume-Rankr
Step 2: Set Up a Virtual Environment (Optional but Recommended)
Using a virtual environment helps manage dependencies properly.

bash
Copy
Edit
python -m venv env
Activate the virtual environment:

Windows:
bash
Copy
Edit
env\Scripts\activate
macOS/Linux:
bash
Copy
Edit
source env/bin/activate
Step 3: Install Dependencies
Install the required Python packages using:

bash
Copy
Edit
pip install -r requirements.txt
Step 4: Download SpaCy NLP Model
Since the project uses spaCy for NLP tasks, download the necessary model:

bash
Copy
Edit
python -m spacy download en_core_web_sm

