import re

with open(r'c:\Users\Yashas\Documents\VSC\DSA-Tracker\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all name/url pairs with GFG links
pattern = r'name:\s*"([^"]+)",\s*\n\s*url:\s*"(https?://[^"]*geeksforgeeks[^"]*)"'
matches = re.findall(pattern, content)

print(f"Found {len(matches)} questions with GFG links:\n")
for i, (name, url) in enumerate(matches, 1):
    print(f"{i}. {name}")
    print(f"   {url}\n")
