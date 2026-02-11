from fastapi.testclient import TestClient
import pytest
from main import app

CLIENT = TestClient(app)

def test_health_check_endpoint():
    response = CLIENT.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok", "version": "v1"}

def test_news_crud_flow():
    initial_response = CLIENT.get("/api/v1/news")
    assert initial_response.status_code == 200
    initial_news_count = len(initial_response.json())

    new_news_data = {
        "title": "A Brand New Article", 
        "content": "Here is some news.",
        "pictures": [
            {"url": "https://picsum.photos/200", "description": "Test Image"}
        ]
    }
    post_response = CLIENT.post("/api/v1/news", json=new_news_data)
    assert post_response.status_code == 201
    
    created_item = post_response.json()
    news_id = created_item["id"]

    get_response = CLIENT.get("/api/v1/news")
    assert len(get_response.json()) == initial_news_count + 1

    delete_response = CLIENT.delete(f"/api/v1/news/{news_id}")
    assert delete_response.status_code in [200, 204]

    final_response = CLIENT.get("/api/v1/news")
    assert len(final_response.json()) == initial_news_count

def test_delete_non_existent_news_item():
    non_existent_id = 999999
    response = CLIENT.delete(f"/api/v1/news/{non_existent_id}")
    assert response.status_code == 404