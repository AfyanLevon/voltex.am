# Continue Work Prompt - Voltex.am Hero Section & Services

## Project Overview
This is a React-based website for Voltex LLC, a construction and energy solutions company. The project uses:
- **React** with Vite
- **Tailwind CSS** for styling
- **Internationalization (i18n)** with English and Armenian translations
- **GitHub** for version control and PR workflow

## Current Branch
- **Active Branch**: `fix/hero-left-scale`
- **Base Branch**: `main`
- **Repository**: `https://github.com/AfyanLevon/voltex.am`

## Critical Workflow Rule
⚠️ **IMPORTANT**: All Pull Requests MUST be created at: `https://github.com/AfyanLevon/voltex.am/pull`
Always use this URL when creating PRs. The user has explicitly stated this multiple times.

## Recent Work Completed

### 1. Half-Key SVG/Image Fix (Hero Section)
**Problem**: The Half-key SVG was not displaying due to black fill color on dark background.

**Solution History**:
- Initially tried CSS filters (`brightness(0) invert(1)`) - didn't work reliably
- Switched to inline SVG with white fill colors
- Changed to brand green color (#6DB433)
- Eventually replaced with PNG file (`/Half-key.png`) for simplicity
- Fixed deployment issue: PNG file was untracked, added to git
- Increased size by 15% for better visibility

**Current Implementation** (lines 49-57 in `src/App.jsx`):
```jsx
{/* CENTER — Half-key image */}
<div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 relative flex items-center justify-center min-h-[150px] md:min-h-[230px]">
  <img
    src="/Half-key.png"
    alt=""
    className="w-full max-w-[90vw] md:max-w-[276px] lg:max-w-[322px] h-auto opacity-70 select-none pointer-events-none object-contain"
    style={{ display: 'block' }}
  />
</div>
```

**Key Files**:
- `src/App.jsx` - Hero section with Half-key image
- `public/Half-key.png` - The PNG image file (must be tracked in git)

### 2. Restoration Icon Text Update
**Changed**: Security Systems → Renovation service

**Updates Made**:
- **English**: "Security Systems" → "Renovation"
- **Armenian**: "Անվտանգության համակարգեր" → "Վերանորոգում"
- Added new descriptions in both languages
- Updated alt text in `ServiceIcons.jsx`

**Files Changed**:
- `src/translations/index.js` - Updated `securitySystems` and `securitySystemsDesc`
- `src/components/ServiceIcons.jsx` - Updated alt text

**PR**: #150 (merged or pending)

### 3. Keyshandover Icon Text Update (Most Recent)
**Changed**: Other Energy Solutions → THE KEYS / ԲԱՆԱԼԻ

**Updates Made**:
- **English Headline**: "Other Energy Solutions" → **"THE KEYS"** (styled in color #E6990C)
- **Armenian Headline**: "Այլ էներգետիկ լուծումներ" → **"ԲԱՆԱԼԻ"** (styled in color #E6990C)
- **English Description**: "Reach your desired result with the Voltex Team—saving you time and stress."
- **Armenian Description**: "Բաղձալի արդյունք, որին Վոլտեքս թիմի հետ կարող եք հասնել՝ խնայելով ժամանակն ու նյարդերը։"
- Applied gold color (#E6990C) to the headline via conditional inline styling
- Updated alt text in `ServiceIcons.jsx`

**Current Implementation** (lines 88-99 in `src/App.jsx`):
```jsx
{items.map((x, i) => (
  <div key={i} className="card">
    <div className="flex justify-center"><ServiceIcons serviceType={x.icon} className="w-32 h-32" /></div>
    <h3 
      className="mt-3 font-semibold"
      style={x.icon === 'energySolutions' ? { color: '#E6990C' } : {}}
    >
      {x.title}
    </h3>
    <p className="mt-2 text-white/70 text-sm leading-relaxed">{x.desc}</p>
  </div>
))}
```

**Files Changed**:
- `src/translations/index.js` - Updated `energySolutions` and `energySolutionsDesc` for both languages
- `src/App.jsx` - Added conditional styling for gold color
- `src/components/ServiceIcons.jsx` - Updated alt text to "THE KEYS"

**PR**: #151 (created, pending merge)

## Key File Structure

### Core Application Files
- **`src/App.jsx`** - Main application component
  - `Hero()` - Hero section with title, left/right images, and center Half-key image
  - `Services()` - Services section with 4 service cards
  - `Why()` - Why choose Voltex section
  - `Contact()` - Contact section
  - `AppContent()` - Main app layout
  - `App()` - Root component with LanguageProvider

### Translation System
- **`src/translations/index.js`** - All translations (English and Armenian)
  - Structure: `translations.en` and `translations.am`
  - Service translations:
    - `bess` / `bessDesc` - Planning and Design
    - `smartHome` / `smartHomeDesc` - Construction
    - `securitySystems` / `securitySystemsDesc` - Renovation
    - `energySolutions` / `energySolutionsDesc` - THE KEYS / ԲԱՆԱԼԻ

### Components
- **`src/components/ServiceIcons.jsx`** - Renders service icons based on `serviceType`
  - Cases: `'bess'`, `'smartHome'`, `'securitySystems'`, `'energySolutions'`
  - Returns `<img>` tags with appropriate icons from `/icons/` directory

### Context
- **`src/contexts/LanguageContext.jsx`** - Language switching context (English/Armenian)

### Public Assets
- **`public/Half-key.png`** - Half-key image (must be tracked in git)
- **`public/icons/`** - Service icons:
  - `Blueprint-icon.png` - Planning and Design
  - `Construction-icon.png` - Construction
  - `Restoration-icon.png` - Renovation
  - `Keyshandover-icon.png` - THE KEYS

## Service Cards Structure

The Services section displays 4 cards:
1. **Planning and Design** (`bess`) - Blueprint icon
2. **Construction** (`smartHome`) - Construction icon
3. **Renovation** (`securitySystems`) - Restoration icon
4. **THE KEYS** (`energySolutions`) - Keyshandover icon (with gold headline color)

Each card has:
- Icon (rendered via `ServiceIcons` component)
- Headline (h3, font-semibold)
- Description (paragraph, text-white/70)

Special styling:
- `energySolutions` headline has inline style: `{ color: '#E6990C' }`

## Git Workflow

### Standard PR Process
1. Make changes to files
2. Stage changes: `git add <files>`
3. Commit with descriptive message: `git commit -m "Description"`
4. Push to branch: `git push origin fix/hero-left-scale`
5. Create PR: `gh pr create --title "..." --body "..." --base main --head fix/hero-left-scale`
6. **Always use**: `https://github.com/AfyanLevon/voltex.am/pull` for PR creation

### Recent Commits (from `git log`)
- `5a67756` - Update keyshandover icon text to THE KEYS with gold color
- `9ae1799` - Update restoration icon text to Renovation service
- `72c5d5a` - Increase Half-key image size by 15% for better visibility
- `1d2efae` - Increase Half-key image size for better visibility
- `512552e` - Fix: Use PNG file for Half-key image instead of SVG component

## Common Issues & Solutions

### Issue: Image not displaying after deployment
**Cause**: Image file not tracked in git
**Solution**: 
```bash
git add public/<image-file>
git commit -m "Add image file"
git push origin fix/hero-left-scale
```

### Issue: Translations not updating
**Check**:
1. Both `en` and `am` objects in `src/translations/index.js`
2. Translation keys match what's used in components
3. Component is using `useLanguage()` hook correctly

### Issue: Styling not applying
**Check**:
1. Tailwind classes are correct
2. Inline styles are properly formatted
3. Conditional styling logic is correct (e.g., `x.icon === 'energySolutions'`)

## Next Steps / Potential Tasks

1. **Review pending PRs**: Check status of PR #151 and any others
2. **Test translations**: Verify all service cards display correctly in both languages
3. **Image optimization**: Consider optimizing PNG files if file sizes are large
4. **Accessibility**: Add proper alt text to images (currently some are empty)
5. **Responsive design**: Verify all changes work on mobile/tablet/desktop

## Important Notes

- **Always create PRs at**: `https://github.com/AfyanLevon/voltex.am/pull`
- **Current branch**: `fix/hero-left-scale`
- **Base branch**: `main`
- **Image files must be tracked in git** to appear in deployments
- **Both languages must be updated** when changing service text
- **Gold color for THE KEYS**: `#E6990C` (applied via inline style)

## Color Reference
- **Brand Green**: `#6DB433`
- **Gold/Orange**: `#E6990C` (used for THE KEYS headline)
- **Text colors**: White, white/70 opacity for descriptions

## Testing Checklist
- [ ] Hero section displays correctly with Half-key image
- [ ] All 4 service cards render properly
- [ ] THE KEYS card has gold headline color (#E6990C)
- [ ] Translations switch correctly between EN/AM
- [ ] All service descriptions are correct in both languages
- [ ] Images load correctly (no broken image icons)
- [ ] Responsive design works on all screen sizes

---

**Last Updated**: After PR #151 creation (keyshandover icon text update)
**Status**: Active development on `fix/hero-left-scale` branch
