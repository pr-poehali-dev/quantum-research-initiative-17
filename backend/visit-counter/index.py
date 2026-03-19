import json
import os
import psycopg2

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def handler(event: dict, context) -> dict:
    """Счётчик посещений: GET — получить, POST — увеличить и вернуть."""

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()

    method = event.get("httpMethod", "GET")

    if method == "POST":
        cur.execute("UPDATE page_visits SET count = count + 1, updated_at = NOW() RETURNING count")
    else:
        cur.execute("SELECT count FROM page_visits LIMIT 1")

    row = cur.fetchone()
    count = row[0] if row else 0

    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": CORS_HEADERS,
        "body": json.dumps({"count": count}),
    }
