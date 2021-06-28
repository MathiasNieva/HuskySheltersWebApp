import json
import boto3
import os

pets_table = os.environ['PETS_TABLE']

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(pets_table)

def getPets(event, context):
    print(json.dumps({"running": True}))
    print(json.dumps(event))
    
    path = event["path"] # "/user/123"
    array_path = path.split("/") # ["", "user", "123"]
    user_id = array_path[-1]
    
    response = table.get_item(
        Key={
            'pk': user_id,
            'sk': 'age'
        }
    )
    item = response['Item']
    print(item)
    return {
        'statusCode': 200,
        'body': json.dumps(item)
    }
