import os

def replace_em_dash(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = content.replace("—", "-")
    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {file_path}")

for root, _, files in os.walk("/Users/amoghakoulapure/main-hinduswad/main-website/src"):
    for file in files:
        if file.endswith((".tsx", ".ts", ".css", ".js")):
            replace_em_dash(os.path.join(root, file))

# Also update text in page.tsx, menu/page.tsx, and Footer.tsx to mention "delivery"
def update_copy():
    # Update page.tsx
    page_path = "/Users/amoghakoulapure/main-hinduswad/main-website/src/app/(public)/page.tsx"
    with open(page_path, "r", encoding="utf-8") as f:
        page_content = f.read()
    page_content = page_content.replace("India's Next Food Discovery Platform", "India's Next Food Delivery & Discovery Platform")
    page_content = page_content.replace("India's Next Food Discovery Platform", "India's Next Food Delivery & Discovery Platform")
    page_content = page_content.replace("Food Discovery Platform.", "Food Delivery Platform.")
    page_content = page_content.replace("food discovery platform", "food delivery platform")
    page_content = page_content.replace("food discovery and restaurant exploration platform", "food delivery and restaurant exploration platform")
    with open(page_path, "w", encoding="utf-8") as f:
        f.write(page_content)
    
    # Update Footer.tsx
    footer_path = "/Users/amoghakoulapure/main-hinduswad/main-website/src/components/layout/Footer.tsx"
    with open(footer_path, "r", encoding="utf-8") as f:
        footer_content = f.read()
    footer_content = footer_content.replace("food discovery platform", "food delivery platform")
    footer_content = footer_content.replace("Sample Menu", "Menu")
    with open(footer_path, "w", encoding="utf-8") as f:
        f.write(footer_content)

    # Update menu/page.tsx
    menu_path = "/Users/amoghakoulapure/main-hinduswad/main-website/src/app/(public)/menu/page.tsx"
    with open(menu_path, "r", encoding="utf-8") as f:
        menu_content = f.read()
    menu_content = menu_content.replace("Sample Menu", "Menu")
    menu_content = menu_content.replace("sample menu", "menu")
    with open(menu_path, "w", encoding="utf-8") as f:
        f.write(menu_content)

update_copy()
print("Done updating copy.")
