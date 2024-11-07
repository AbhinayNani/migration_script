import pandas as pd
import json

# Load the Excel file
file_path = './toy_trunk.xlsx'  # Update with your Excel file path
data = pd.read_excel(file_path)

# Convert DataFrame to list of dictionaries, where each dictionary is a row
data_json = data.to_dict(orient='records')

# Write list of dictionaries to JSON file
with open('output.json', 'w') as json_file:
    json.dump(data_json, json_file, indent=4)

print("JSON file generated successfully.")
