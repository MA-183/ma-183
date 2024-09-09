import re

def format_markdown(input_file, output_file):
    # Read the markdown file
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()

    # Step 1: Avoid modifying lines that start with headers or are part of existing callouts
    # This regex skips lines that start with `> `, `#` (headers), or are blank
    def add_block_quote(match):
        line = match.group(0)
        # Skip lines starting with # (headers) or already formatted as block quotes
        if line.startswith("#") or line.startswith(">"):
            return line
        return f"> {line}"
        
    def append_note_callback(match):
        callout = match.group(1)
        # Append the specific note after the callout
        return f"{callout}\n\n> [!note]- Løsning\n>"
        
    # Apply to each line individually
    content = re.sub(r'^.*$', add_block_quote, content, flags=re.MULTILINE)

    # Step 2: Insert a blank line before any new callout that starts with "> [!callout]"
    content = re.sub(r'(?<!\n)\n(> \[!.*?\])', r'\n\n\1', content)

    # Regex to match callouts starting with "> [!abstract]" or any similar pattern
    content = re.sub(r'(> \[!abstract[^\]]*?\]\s*\d*)', append_note_callback, content)

    # Write the formatted content back to a new file
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(content)

# Example usage
input_file = 'Testemappe/test.md'  # Replace with the path to your input markdown file
output_file = 'Testemappe/your_output.md'  # Replace with the path to your output markdown file
format_markdown(input_file, output_file)

print(f"Formatted markdown saved to {output_file}")
