import json

def process_json_to_dict(json_file):
    with open(json_file, 'r') as file:
        data = json.load(file)  # Parse JSON content

    # Check if the data is a list of objects
    if isinstance(data, list):
        result = []
        for obj in data:
            if isinstance(obj, dict):
                # Append the dictionary to the result list
                result.append(obj)
            else:
                print(f"Skipping non-object item: {obj}")
        return result
    else:
        print("The JSON file does not contain a list of objects.")
        return None

# Example usage
json_file_path = 'data.json'  # Replace with the path to your JSON file
converted_data = process_json_to_dict(json_file_path)

# Output the converted list of dictionaries
if converted_data:
    print("Converted Data:")
    for item in converted_data:
        print(item)
