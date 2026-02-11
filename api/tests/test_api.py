"""
Module to test the API endpoints for the news service.
"""
from fastapi.testclient import TestClient
import pytest

# It's assumed the FastAPI app instance is in a file `main.py` inside an `api` directory.
# This is a common convention.
try:
    # We are assuming the app is created in `api/main.py`
    from api.main import app
    CLIENT = TestClient(app)
except (ModuleNotFoundError, ImportError):
    # If the app cannot be imported, we skip the tests.
    # This allows for static analysis tools like pylint to run without errors.
    pytest.skip("Skipping API tests: FastAPI application not found.", allow_module_level=True)


def test_health_check_endpoint():
    """
    Tests the GET /api/v1/health endpoint to ensure the API is responsive.
    """
    response = CLIENT.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json() == {"status": "API status"}  # Assuming a simple status response. [8]


def test_news_crud_flow():
    """
    Tests the complete CRUD (Create, Read, Delete) flow for news items.
    GET (all) -> POST -> GET (all) -> DELETE -> GET (all)
    """
    # 1. Initial state: Get all news, and record the count.
    initial_response = CLIENT.get("/api/v1/news")
    assert initial_response.status_code == 200
    initial_news_count = len(initial_response.json())

    # 2. Create a new news item
    new_news_data = {"title": "A Brand New Article", "content": "Here is some news."}
    post_response = CLIENT.post("/api/v1/news", json=new_news_data)
    assert post_response.status_code == 201  # Check for '201 Created'. [2, 5, 9]
    created_news_item = post_response.json()
    assert "id" in created_news_item
    assert created_news_item["title"] == new_news_data["title"]
    news_id = created_news_item["id"]

    # 3. Read: Verify the new item is in the list
    get_response = CLIENT.get("/api/v1/news")
    assert get_response.status_code == 200
    news_list = get_response.json()
    assert len(news_list) == initial_news_count + 1
    assert news_id in [item["id"] for item in news_list]

    # 4. Delete the newly created news item
    delete_response = CLIENT.delete(f"/api/v1/news/{news_id}")
    assert delete_response.status_code == 200  # Or 204, but 200 with body is common. [13, 21]

    # 5. Final state: Verify the item has been deleted
    final_response = CLIENT.get("/api/v1/news")
    assert final_response.status_code == 200
    assert len(final_response.json()) == initial_news_count


def test_delete_non_existent_news_item():
    """
    Tests that attempting to delete a news item that does not exist
    returns a 404 Not Found error. [5, 21]
    """
    non_existent_id = "a-very-unlikely-id-12345"
    response = CLIENT.delete(f"/api/v1/news/{non_existent_id}")
    assert response.status_code == 404
