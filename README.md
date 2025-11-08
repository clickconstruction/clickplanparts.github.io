# PlanHub Procurement Calculator

A static website for GitHub Pages that serves as a procurement calculator for Click Plumbing Supply, partnering with PlanHub.com. The site allows users to select from three templates (Rough In, Top Out, and Trim Set), input quantities for materials from the provided CSV matrix, and get an instant quote with total price and estimated delivery date.

## Features

- **Template Selection**: Choose from three pre-configured templates:
  - **Rough In**: Basic rough-in materials for plumbing installation
  - **Top Out**: Top-out materials for vertical plumbing connections
  - **Trim Set**: Trim set materials for fixture connections

- **Material Search**: Search through 600+ materials by:
  - Part ID
  - Detail/Description
  - Size
  - Make/Manufacturer
  - Model

- **Real-time Quote Calculation**:
  - Instant price calculation using Best Price from the CSV matrix
  - Total item count
  - Estimated delivery date (3-5 business days, adjusted by order size)

- **Fully Client-Side**: No server required - all processing happens in the browser

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern, responsive design with gradients and animations
- **Vanilla JavaScript**: No frameworks or dependencies
- **Hardcoded Data**: CSV data parsed and embedded as JavaScript arrays for fast loading

## File Structure

```
plumbing_supply_planhub/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript with parsed CSV data and calculator logic
├── README.md           # This file
└── 2025_11_04_Click Plumbing Supply Master Matrix - MASTER (USE).csv  # Source data
```

## Deployment to GitHub Pages

### Option 1: Deploy from Repository Root

1. **Push to GitHub**:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial commit: PlanHub Procurement Calculator"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Deploy from `docs` folder

If you prefer to keep the source files separate:

1. Create a `docs` folder:
   ```bash
   mkdir docs
   cp index.html styles.css script.js docs/
   ```

2. Update GitHub Pages settings to use **/docs** folder instead of root

3. Push the changes:
   ```bash
   git add docs/
   git commit -m "Add docs folder for GitHub Pages"
   git push
   ```

## Local Development

To test the site locally:

1. **Using Python** (if installed):
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

2. **Using Node.js** (if installed):
   ```bash
   npx http-server
   ```
   Then open the URL shown in the terminal

3. **Using VS Code Live Server**:
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## Updating Materials Data

If you need to update the materials data from a new CSV file:

1. **Parse the CSV**:
   ```bash
   python3 -c "
   import csv
   import re
   
   materials = []
   with open('YOUR_CSV_FILE.csv', 'r', encoding='utf-8') as f:
       reader = csv.reader(f)
       header = next(reader)
       for row in reader:
           if len(row) < 7:
               continue
           best_price_str = row[0].strip() if row[0] else ''
           if not best_price_str or best_price_str == '\$0.00' or best_price_str == '#N/A':
               continue
           price_match = re.search(r'[\d.]+', best_price_str.replace(',', ''))
           if price_match:
               price = float(price_match.group())
           else:
               continue
           
           def escape(s):
               return s.replace('\\'', '\\\\\\'').replace('\\n', '\\\\n').replace('\\r', '\\\\r')
           
           materials.append({
               'price': price,
               'bestHouse': escape(row[1].strip() if len(row) > 1 and row[1] else ''),
               'make': escape(row[2].strip() if len(row) > 2 and row[2] else ''),
               'model': escape(row[3].strip() if len(row) > 3 and row[3] else ''),
               'detail': escape(row[4].strip() if len(row) > 4 and row[4] else ''),
               'size': escape(row[5].strip() if len(row) > 5 and row[5] else ''),
               'partId': escape(row[6].strip() if len(row) > 6 and row[6] else '')
           })
   
   print('const MATERIALS_DATA = [')
   for i, m in enumerate(materials):
       comma = ',' if i < len(materials) - 1 else ''
       print(f\"  {{price: {m['price']}, bestHouse: '{m['bestHouse']}', make: '{m['make']}', model: '{m['model']}', detail: '{m['detail']}', size: '{m['size']}', partId: '{m['partId']}'}}{comma}\")
   print('];')
   " > script_data.js
   ```

2. **Replace the MATERIALS_DATA array** in `script.js` with the new data

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Search Functionality
- Real-time search as you type
- Searches across multiple fields (Part ID, Detail, Size, Make, Model)
- Case-insensitive matching

### Quantity Management
- Input quantities directly in the materials list
- View selected items with individual totals
- Remove items individually or clear all at once

### Price Calculation
- Uses "Best Price" from the CSV matrix
- Calculates total based on quantity × unit price
- Updates in real-time as quantities change

### Delivery Estimation
- Base delivery: 3 business days
- Additional days based on order complexity (1 day per 10 items)
- Displays formatted date with weekday

## Customization

### Changing Templates
Edit the `TEMPLATES` object in `script.js` to modify template definitions or add new templates.

### Styling
Modify `styles.css` to change colors, fonts, or layout. The design uses:
- Primary color: `#667eea` (purple-blue gradient)
- Secondary color: `#764ba2` (purple)
- Accent color: `#dc3545` (red for remove buttons)

### Delivery Calculation
Modify the `updateQuote()` function in `script.js` to adjust delivery date calculation logic.

## License

This project is proprietary software for Click Plumbing Supply and PlanHub.com partnership.

## Support

For issues or questions, please contact the development team or create an issue in the repository.
