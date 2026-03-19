import os
import base64
import boto3


def handler(event: dict, context) -> dict:
    """Загружает HTML-файл калькулятора в S3 хранилище."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    import json
    body = json.loads(event.get('body', '{}'))
    filename = body.get('filename')
    content_b64 = body.get('content')

    if not filename or not content_b64:
        return {'statusCode': 400, 'headers': {'Access-Control-Allow-Origin': '*'}, 'body': json.dumps({'error': 'filename and content required'})}

    content_bytes = base64.b64decode(content_b64)
    key = f'calculators/{filename}'

    s3.put_object(
        Bucket='files',
        Key=key,
        Body=content_bytes,
        ContentType='text/html; charset=utf-8'
    )

    access_key = os.environ['AWS_ACCESS_KEY_ID']
    cdn_url = f'https://cdn.poehali.dev/projects/{access_key}/bucket/{key}'

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'url': cdn_url})
    }
