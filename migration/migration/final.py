import requests
import json
import time

# Set your valid Gemini API key
api_key = 'AIzaSyDqXC1K7aF2aPbnVCCOx9ZvpmCqgl8TzRM'
url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent"

# Function to load input data from a JSON file
def load_input_data(input_file):
    with open(input_file, 'r') as file:
        return json.load(file)

# Function to save output data to a JSON file
def save_output_data(output_file, data):
    with open(output_file, 'w') as file:
        json.dump(data, file, indent=4)

# Function to construct the prompt for Gemini API
def construct_prompt(input_data):
    prompt = f"""
You are a product information transformer. Take the following product information and transform it into the following JSON format. Output should be the product information in the exact format provided below. Use the given data to fill out the output fields.
keep brand_id as 2, manufacturer_id as 3, group_description as empty object
Input Data:
{json.dumps(input_data, indent=4)}

Output Format:
{json.dumps({
    "seller_fk": 6,
    "name": "string", 
    "description": "string", 
    "content": "string", 
    "product_type": 0, 
    "net_weight": 0, 
    "volumetric_weight": 0, 
    "length": 0, 
    "breadth": 0, 
    "height": 0, 
    "sku": "string", 
    "upc": "string", 
    "ean": "string", 
    "mpn": "string", 
    "packaging_type": 0, 
    "brand_id": 1, 
    "manufacturer_id": 0, 
    "group_fk": 0, 
    "group_description": { 
      "additionalProp1": "string", 
      "additionalProp2": "string", 
      "additionalProp3": "string" 
    }, 
    "category_fk": 0, 
    "product_details": [ 
      { 
        "productFk": 0, 
        "attribute": "Key Features", 
        "value": "string" 
      }, 
      { 
        "productFk": 0, 
        "attribute": "How to Use", 
        "value": "string" 
      } 
    ]
}, indent=4)}
"""
    return prompt

# Function to process each product and send the request to the Gemini API
def process_product(input_data):
    prompt = construct_prompt(input_data)

    # Prepare the request payload
    data = {
        "contents": [
            {
                "parts": [
                    {
                        "text": prompt
                    }
                ]
            }
        ]
    }

    # Set the request headers (including your API key)
    headers = {
        "Content-Type": "application/json"
    }

    # Send the POST request to Gemini API
    response = requests.post(url, params={"key": api_key}, json=data, headers=headers)

    # Check the response
    if response.status_code == 200:
        # Parse the response data
        try:
            response_data = response.json()

            # Extract the generated text (make sure to adjust the path according to the actual response structure)
            generated_text = response_data['candidates'][0]['content']['parts'][0]['text']
            print("Generated Output:", generated_text)

            # If you want to parse the generated text into JSON or further process it:
            # try:
            #     structured_output = json.loads(generated_text)
            #     return structured_output
            # except json.JSONDecodeError as e:
            #     print(f"Error decoding JSON from response: {e}")
            #     return None
            return generated_text
        except KeyError as e:
            print(f"Error parsing AI response: {e}")
            return None
    else:
        print(f"Error: {response.status_code}, {response.text}")
        return None

# Main function to run the process
def main(input_file, output_file):
    # Load input data from the provided file
    input_data = load_input_data(input_file)
    
    # Process each product
    generated_outputs = []

    for product in input_data:
        output = process_product(product)
        generated_outputs.append(output[7:])
        print("output that is appended is ",output[7:])
        time.sleep(5)  

        
    json_objects = []
    for json_str in generated_outputs:
        try:
            clean_str = json_str.strip().strip("```")
            json_object = json.loads(clean_str)
            json_objects.append(json_object)
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON: {e}")
    with open("res.json", "w") as json_file:
        json.dump(json_objects, json_file, indent=4)


# Run the script
input_file = "output.json"  # Replace with your actual input file path
output_file = "res.json"  # Replace with your desired output file path
main(input_file, output_file)
