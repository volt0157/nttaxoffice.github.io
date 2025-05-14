# Font Importation and Alternatives Guide

## Font Importation in the Website

Looking at the HTML and CSS files, the website uses Google Fonts to import two font families: Poppins and Roboto.

The font importation is done in the `<head>` section of the HTML file through these elements:

1. First, there are preconnect links to improve performance:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

2. Then, the actual font import:
```html
<link 
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" 
  rel="stylesheet"
>
```

This import loads:
- **Poppins** with weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), and 700 (bold)
- **Roboto** with weights: 300 (light), 400 (regular), 500 (medium), and 700 (bold)

These fonts are then applied in the CSS:
```css
body {
    font-family: 'Roboto', sans-serif;
    /* other styles */
}

h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    /* other styles */
}
```

Roboto is used for the general body text, while Poppins is used for headings.

## Where to Find Alternative Fonts

Here are several places where you can find alternative fonts:

1. **Google Fonts** (https://fonts.google.com)
   - The original source used in this project
   - Free for commercial use
   - Easy integration similar to what's already in the code
   - Can filter by font properties, styles, languages, etc.

2. **Adobe Fonts** (https://fonts.adobe.com)
   - High-quality fonts
   - Requires Adobe Creative Cloud subscription
   - Good for professional design work

3. **Font Squirrel** (https://www.fontsquirrel.com)
   - Free fonts for commercial use
   - Hand-selected quality fonts
   - Offers a webfont generator tool

4. **DaFont** (https://www.dafont.com)
   - Large collection of free fonts
   - Check licenses carefully as they vary

5. **Fontspring** (https://www.fontspring.com)
   - Commercial fonts with clear licensing
   - High-quality options

6. **Open Font Library** (https://fontlibrary.org)
   - Open-source fonts

7. **Typekit** (part of Adobe Fonts)
   - Premium font service

## How to Replace the Fonts

If you want to replace the current fonts with alternatives, follow these steps:

1. Choose your new fonts from one of the sources above
2. Replace the Google Fonts link in the HTML `<head>` section with your new font link
3. Update the font-family references in the CSS

For example, if you wanted to use "Montserrat" instead of "Poppins" and "Open Sans" instead of "Roboto", you would:

1. Replace the Google Fonts link with:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

2. Update the CSS:
```css
body {
    font-family: 'Open Sans', sans-serif;
    /* other styles */
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    /* other styles */
}
```

## Recommended Font Pairs for Accounting/Tax Office Website

Here are some professional font pairings that would work well for this accounting/tax office website:

### 1. Professional & Modern
- Headings: Montserrat
- Body: Open Sans
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

### 2. Classic & Trustworthy
- Headings: Playfair Display
- Body: Source Sans Pro
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### 3. Clean & Corporate
- Headings: Raleway
- Body: Lato
```html
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

### 4. Traditional & Established
- Headings: Merriweather
- Body: Roboto
```html
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

### 5. Modern & Minimal
- Headings: Work Sans
- Body: Nunito Sans
```html
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### 6. Clean & Greek Friendly (Good for Greek text)
- Headings: Roboto Slab
- Body: Noto Sans
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

Remember that when selecting fonts for a multilingual site with Greek text (as seen in this website), you should ensure the fonts support Greek characters and look good in both Latin and Greek alphabets.
