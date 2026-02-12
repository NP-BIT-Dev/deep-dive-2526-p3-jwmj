from fastapi.testclient import TestClient
import io
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

    file_content = b"fake image content"
    file_name = "test_image.jpg"
    
    post_response = CLIENT.post(
        "/api/v1/news/",
        data={"title": "A Brand New Article"},
        files=[("files", (file_name, io.BytesIO(file_content), "image/jpeg"))]
    )
    
    assert post_response.status_code == 200
    assert post_response.json()["message"] == "Nieuws met foto's geüpload!"

    get_all = CLIENT.get("/api/v1/news")
    news_list = get_all.json()
    assert len(news_list) == initial_news_count + 1
    
    news_id = news_list[-1]["id"]

    delete_response = CLIENT.delete(f"/api/v1/news/{news_id}")
    assert delete_response.status_code in [200, 204]

    final_response = CLIENT.get("/api/v1/news")
    assert len(final_response.json()) == initial_news_count

def test_delete_non_existent_news_item():
    non_existent_id = 999999
    response = CLIENT.delete(f"/api/v1/news/{non_existent_id}")
    assert response.status_code == 404
