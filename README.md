[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/P7mjNSSK)

# Python API Setup Guide

To set up the environment and install dependencies, run the following commands in your terminal:

```bash
# Create a virtual environment
python -m venv .venv

# Activate the environment (Windows)
.venv\Scripts\activate

# Activate the environment (macOS/Linux)
source .venv/bin/activate

# Install requirements
pip install -r requirements.txt
```

## API Routes

The following routes are available in this application:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/v1/health`      | API status |
| GET    | `/api/v1/news` | Retrieve a list of all news items |
| POST   | `/api/v1/news` | Create a new news item |
| DELETE | `/api/v1/news/{news_id}` | Delete a news item |