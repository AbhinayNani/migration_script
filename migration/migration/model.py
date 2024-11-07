import requests
import json

# Replace with your actual API key
api_key = 'AIzaSyCUS2y6JWETjUimFm_rZpF8kW-kAhRfTXc'
# The endpoint URL for Gemini API
url = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={api_key}'

# Function to interact with Gemini AI and transform text
def ai_transform_text_with_gemini(input_data):
    # Prepare the request body with the input data (sending input as text)
    data = {
        "contents": [
            {
                "parts": [
                    {
                        "text": json.dumps(input_data)  # Send the entire input data as JSON string
                    }
                ]
            }
        ]
    }

    # Set headers for the request
    headers = {
        'Content-Type': 'application/json',
    }

    # Send POST request to Gemini API
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()  # Check for errors

        # Debugging: print the raw response for further inspection
        print("API Response (Raw):", response.text)  # Print the raw response as text

        # Get the transformed content from the response
        response_data = response.json()

        # Check if 'candidates' key exists in the response and extract data
        if 'candidates' in response_data and response_data['candidates']:
            # Extract the text from the first candidate
            generated_text = response_data['candidates'][0]['content']['parts'][0]['text']
            return generated_text
        else:
            print("No 'candidates' or 'content' found in response.")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        print("Response:", response.text)  # Output the raw response for debugging
        return None

# Function to convert input data to the required output format
def convert_to_output_format(input_data):
    # Convert the input data to text (in case it contains a list or dictionary)
    input_text = ""
    for key, value in input_data.items():
        input_text += f"{key}: {value}\n"
    
    # Call AI to process the input data and return the consistent output
    ai_output = ai_transform_text_with_gemini(input_text)
    
    if ai_output is None:
        return []

    try:
        # Debugging: Print AI output for inspection
        print("AI Output:", ai_output)

        # Assuming AI returns a JSON-like string or plain text, we handle both cases:
        try:
            # Try to parse the AI output if it's in JSON format
            output_data = json.loads(ai_output)
        except json.JSONDecodeError:
            # If parsing fails, treat the output as plain text
            output_data = {"description": ai_output}
        
        # Ensure that the output data has the correct format
        final_output = []

        # Add fields manually or adjust the structure to match desired output
        product_output = {
            "seller_fk": 0,
            "name": input_data.get("Product Name", ""),
            "description": output_data.get("description", ""),
            "content": output_data.get("description", ""),
            "product_type": 0,
            "net_weight": 0,
            "volumetric_weight": 0,
            "length": 0,
            "breadth": 0,
            "height": 0,
            "sku": input_data.get("SKU", ""),
            "upc": "",
            "ean": "",
            "mpn": "",
            "packaging_type": 0,
            "brand_id": 0,
            "manufacturer_id": 0,
            "group_fk": 0,
            "group_description": {},
            "category_fk": 0
        }

        final_output.append(product_output)

        return final_output
    except json.JSONDecodeError:
        print("Error parsing AI response into JSON.")
        return []

# Function to save the output data into a JSON file
def save_output_to_json(output_data, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
    print(f"Output data saved to {output_file}")

# Main execution
if __name__ == "__main__":
    # Example input data (this could be any form of data, including description, key features, etc.)
    input_data = {
        "Product Name": "ilearnngrowDIY Unicorn Lantern",
        "HSN": 95069990,
        "GSt": 0.12,
        "des": "Introducing Our Magical Fun Art & Craft Kits. Unlock a world of enchantment with our Magical Fun Art & Craft Kits, a perfect blend of unicorn magic and fairy wonder for kids aged 3-12 years old.",
        "key_features": "A Dream Come True: This fairy garden STEM toy and unicorn activity set make dreams come alive! The included fairy lights transform any room into a magical wonderland.",
        "how_to_use": "Choose Your Design: Let your imagination run free! Select from an array of enchanting elements to customize your dreamy jar.",
        "box_contains": "1 Glass jar, LED lights, fairy figure, gold stars, magical wand, butterfly, glitter, glue, pearls, unicorn lid decoration, glowing in the dark stars.",
        "SKU": "ILGDIYFRUC",
        "Remarks": None,
        "Main Menu Taging": "Gifting and Return Gifts",
        "Age": "3-5 Years",
        "Shop By Skill": "Creative Skills",
        "Category": "DIY Kits",
        "Sub Category": None,
        "Image/Video Link": "https://drive.google.com/drive/u/0/folders/1xKvJT49Sn3_2iAPmJOGogI2HHdXia2Ya"
    }

    # Convert data to the required output format
    output_data = convert_to_output_format(input_data)

    # Save the output to a new JSON file
    output_file = 'res.json'
    save_output_to_json(output_data, output_file)
