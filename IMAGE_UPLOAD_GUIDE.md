# Image Upload Guide for RynVarkh Website

## 📁 Image Upload Locations

### 1. Profile Picture

**Location:** `assets/profile.jpg`

- **Size:** 400x400px minimum (recommended: 800x800px)
- **Format:** JPG, PNG, or WebP
- **Purpose:** Main profile image displayed in the hero section
- **Current:** Replace the existing `profile.jpg` in the `assets/` folder

### 2. Favicon

**Location:** `assets/favicon.ico`

- **Size:** 32x32px, 16x16px, and 48x48px (ICO format supports multiple sizes)
- **Format:** ICO (recommended) or PNG
- **Purpose:** Browser tab icon
- **Current:** Replace the existing `favicon.ico` in the `assets/` folder

### 3. Gaming Section Images

**Location:** `src/assets/games/` (create this folder)

- **Recommended files:**
  - `valorant.jpg` - Valorant gameplay screenshot
  - `lol.jpg` - League of Legends screenshot
  - `minecraft.jpg` - Minecraft build or gameplay
  - `among-us.jpg` - Among Us gameplay
- **Size:** 600x400px (3:2 aspect ratio)
- **Format:** JPG or PNG
- **Purpose:** Game thumbnails in the gaming section

### 4. Corn Content Images

**Location:** `src/assets/corn/` (create this folder)

- **Recommended files:**
  - `farming.jpg` - Corn farming/field image
  - `recipes.jpg` - Corn-based food dishes
  - `facts.jpg` - Educational corn content
  - `art.jpg` - Corn-themed artwork
- **Size:** 600x400px (3:2 aspect ratio)
- **Format:** JPG or PNG
- **Purpose:** Corn content thumbnails

### 5. Social Media Icons (Optional)

**Location:** `src/assets/social/` (create this folder)

- **Files:** Custom social media icons if you want to replace the default ones
- **Size:** 64x64px
- **Format:** SVG (recommended) or PNG
- **Purpose:** Custom social media platform icons

## 🎨 Image Guidelines

### Quality Requirements

- **Resolution:** High quality, at least 72 DPI for web
- **File Size:** Optimize for web (under 500KB per image)
- **Format:** Use WebP for best compression, JPG for photos, PNG for graphics with transparency

### Content Guidelines

- **Profile Picture:** Professional but approachable, good lighting, clear face
- **Gaming Images:** High-quality screenshots or gameplay moments
- **Corn Images:** High-quality photos of corn, farming, recipes, or educational content
- **Branding:** Consistent with your personal brand and color scheme

## 📝 How to Update Images

### 1. Profile Picture

```bash
# Replace the existing file
cp your-new-profile.jpg assets/profile.jpg
```

### 2. Gaming Images

```bash
# Create the games folder
mkdir -p src/assets/games

# Add your gaming images
cp valorant-screenshot.jpg src/assets/games/valorant.jpg
cp lol-screenshot.jpg src/assets/games/lol.jpg
# ... etc
```

### 3. Corn Images

```bash
# Create the corn folder
mkdir -p src/assets/corn

# Add your corn content images
cp corn-farming.jpg src/assets/corn/farming.jpg
cp corn-recipe.jpg src/assets/corn/recipes.jpg
# ... etc
```

## 🔧 Code Updates Needed

After uploading images, you'll need to update the component files:

### 1. Update GamesSection.jsx

```jsx
// Replace placeholder URLs with actual image imports
import valorantImg from "../assets/games/valorant.jpg";
import lolImg from "../assets/games/lol.jpg";
// ... etc

// Update the games array
const games = [
  {
    title: "Valorant",
    image: valorantImg,
    // ... other properties
  },
  // ... other games
];
```

### 2. Update CornSection.jsx

```jsx
// Replace placeholder URLs with actual image imports
import farmingImg from "../assets/corn/farming.jpg";
import recipesImg from "../assets/corn/recipes.jpg";
// ... etc

// Update the cornContent array
const cornContent = [
  {
    title: "Corn Farming Guide",
    image: farmingImg,
    // ... other properties
  },
  // ... other content
];
```

## 🚀 Image Optimization Tips

1. **Compress Images:** Use tools like TinyPNG or ImageOptim
2. **Responsive Images:** Consider providing multiple sizes for different screen sizes
3. **Lazy Loading:** Images will load as users scroll (already implemented)
4. **Alt Text:** Always provide descriptive alt text for accessibility

## 📱 Mobile Considerations

- Ensure images look good on mobile devices
- Test the website on different screen sizes
- Consider using responsive images for better performance

## 🎯 Quick Start Checklist

- [ ] Upload profile picture to `assets/profile.jpg`
- [ ] Upload favicon to `assets/favicon.ico`
- [ ] Create `src/assets/games/` folder and add gaming images
- [ ] Create `src/assets/corn/` folder and add corn content images
- [ ] Update component files to import and use the new images
- [ ] Test the website to ensure all images display correctly
- [ ] Optimize images for web performance

## 💡 Pro Tips

1. **Consistent Style:** Keep all images consistent with your brand aesthetic
2. **High Quality:** Always use high-resolution images that look crisp on all devices
3. **Fast Loading:** Optimize file sizes for better website performance
4. **Backup:** Keep original high-resolution versions of all images
5. **Testing:** Test the website on different devices and browsers after updating images
