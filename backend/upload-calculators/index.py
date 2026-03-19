"""
Загружает HTML-калькуляторы с Google Drive в S3 хранилище.
"""
import os
import json
import boto3
import urllib.request


CALCULATORS = [
    {
        "id": "simulator",
        "drive_id": "1BSWFgqdGvEyp7fRB-IsCSLr8E5sYL9E1",
        "filename": "simulator-v2.2.html",
    },
    {
        "id": "gnkt-general",
        "drive_id": "1TBIuHw8wD0gGe4rknDLaxpwfQXLtSwYP",
        "filename": "gnkt-general.html",
    },
    {
        "id": "gnkt-volume",
        "drive_id": "1m3lmxgXybkHfVzzZ3dX6Mq9PVrgoRMFS",
        "filename": "gnkt-volume-si-v1.html",
    },
]


def handler(event: dict, context) -> dict:
    """Скачивает HTML-калькуляторы с Google Drive и загружает в S3."""
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            "body": "",
        }

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )

    results = []
    key_id = os.environ["AWS_ACCESS_KEY_ID"]

    for calc in CALCULATORS:
        url = f"https://drive.google.com/uc?export=download&id={calc['drive_id']}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            content = resp.read()

        s3_key = f"calculators/{calc['filename']}"
        s3.put_object(
            Bucket="files",
            Key=s3_key,
            Body=content,
            ContentType="text/html; charset=utf-8",
        )

        cdn_url = f"https://cdn.poehali.dev/projects/{key_id}/bucket/{s3_key}"
        results.append({"id": calc["id"], "filename": calc["filename"], "url": cdn_url})

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"success": True, "files": results}),
    }
