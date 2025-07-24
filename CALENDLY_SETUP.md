# Calendly Integration Guide

## What You Need to Get Started

### 1. **Calendly Account Setup**
- Create a Calendly account at [calendly.com](https://calendly.com)
- Set up your availability and event types
- Get your Calendly link (e.g., `https://calendly.com/your-username/30min`)

### 2. **Package Installation**
The `react-calendly` package has been installed:
```bash
npm install react-calendly
```

### 3. **Environment Variable Setup**
Your Calendly URL is configured in the environment variables. Create a `.env` file in your project root:
```bash
VITE_CALENDLY_URL=https://calendly.com/threeclairs/30min
```

**Note**: In Vite, environment variables must be prefixed with `VITE_` to be accessible in the client-side code.

## Available Components

### 1. **CalendlyBooking Component** (`src/components/CalendlyBooking.tsx`)
An inline widget that embeds the full Calendly booking form directly on your page.

**Usage:**
```tsx
import CalendlyBooking from '@/components/CalendlyBooking';

// Using environment variable (recommended)
<CalendlyBooking 
  title="Book a Session"
  description="Schedule your personalized healing session"
  height={700}
/>

// Or with custom URL
<CalendlyBooking 
  calendlyUrl="https://calendly.com/your-username/30min"
  title="Book a Session"
  description="Schedule your personalized healing session"
  height={700}
/>
```

**Props:**
- `calendlyUrl` (optional): Your Calendly booking link (uses environment variable if not provided)
- `title` (optional): Card title (default: "Schedule a Session")
- `description` (optional): Card description
- `className` (optional): Additional CSS classes
- `height` (optional): Widget height in pixels (default: 700)

### 2. **CalendlyButton Component** (`src/components/CalendlyButton.tsx`)
A button that opens Calendly in a popup window when clicked.

**Usage:**
```tsx
import CalendlyButton from '@/components/CalendlyButton';

<CalendlyButton 
  calendlyUrl="https://calendly.com/your-username/30min"
  variant="default"
  size="lg"
>
  Book Your Session
</CalendlyButton>
```

**Props:**
- `calendlyUrl` (required): Your Calendly booking link
- `children` (optional): Button text (default: "Book a Session")
- `variant` (optional): Button variant (default: "default")
- `size` (optional): Button size (default: "default")
- `className` (optional): Additional CSS classes
- `text` (optional): Popup title (default: "Schedule a Session")
- `color` (optional): Button color (default: healing-violet)

## Integration Examples

### 1. **Add to Contact Section**
Replace the placeholder in `src/components/Contact.tsx`:

```tsx
import CalendlyBooking from './CalendlyBooking';

// In your Contact component
<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
  {/* Newsletter Signup */}
  <div className="max-w-md mx-auto md:mx-0">
    {/* Your existing newsletter form */}
  </div>

  {/* Calendly Booking */}
  <div className="max-w-md mx-auto md:mx-0">
    <CalendlyBooking 
      calendlyUrl="https://calendly.com/your-username/30min"
      title="Book a Session"
      description="Schedule your personalized healing session"
    />
  </div>
</div>
```

### 2. **Add to Hero Section**
Add a booking button to your hero section:

```tsx
import CalendlyButton from '@/components/CalendlyButton';

// In your Hero component
<div className="flex gap-4">
  <CalendlyButton 
    calendlyUrl="https://calendly.com/your-username/30min"
    variant="default"
    size="lg"
    className="bg-healing-violet hover:bg-healing-violet/90"
  >
    Book Your Free Consultation
  </CalendlyButton>
</div>
```

### 3. **Add to Services Section**
Add booking buttons to individual service cards:

```tsx
import CalendlyButton from '@/components/CalendlyButton';

// In your Services component
<Card>
  <CardContent>
    <h3>Energy Healing Session</h3>
    <p>Transform your relationship with stress and trauma.</p>
    <CalendlyButton 
      calendlyUrl="https://calendly.com/your-username/energy-healing"
      variant="outline"
      size="sm"
    >
      Book Session
    </CalendlyButton>
  </CardContent>
</Card>
```

## Configuration Options

### Customizing Colors
Both components use your existing design system colors:
- Primary color: `#8B5CF6` (healing-violet)
- Background: `#ffffff`
- Text color: `#374151`

### UTM Tracking
Both components include UTM parameters for tracking:
- `utmCampaign`: "website"
- `utmSource`: "gentle-hearts-haven"
- `utmMedium`: "inline-widget" or "popup-widget"

### Prefill Options
You can prefill user information if available:
```tsx
prefill={{
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  name: 'John Doe'
}}
```

## Best Practices

1. **Use the Inline Widget** for dedicated booking pages or when you want the full booking experience visible
2. **Use the Button** for CTAs in hero sections, service cards, or when you want to save space
3. **Test on Mobile** - both components are responsive
4. **Set up Event Types** in Calendly with appropriate durations and descriptions
5. **Configure Notifications** in Calendly to receive booking confirmations

## Troubleshooting

### Common Issues:
1. **Widget not loading**: Check your Calendly URL is correct
2. **Styling issues**: Ensure the root element exists in your HTML
3. **Mobile responsiveness**: Test on different screen sizes

### Support:
- [react-calendly GitHub](https://github.com/tcampb/react-calendly)
- [Calendly Help Center](https://help.calendly.com/)

## Next Steps

1. Replace `"https://calendly.com/your-username/30min"` with your actual Calendly URL
2. Customize the styling to match your brand
3. Test the booking flow end-to-end
4. Set up email notifications and calendar integrations 