# Database Setup Instructions

## Events Table Setup

To use the CMS functionality, you need to create an `events` table in your Supabase database.

### SQL Script

Run this SQL script in your Supabase SQL editor:

```sql
-- Create events table
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_events_updated_at 
    BEFORE UPDATE ON events 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Set up Row Level Security (RLS)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Allow public read access to events
CREATE POLICY "Allow public read access" ON events
    FOR SELECT USING (true);

-- Allow authenticated users to manage events
CREATE POLICY "Allow authenticated users to insert" ON events
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update" ON events
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete" ON events
    FOR DELETE USING (auth.role() = 'authenticated');
```

### Storage Bucket Setup

For image uploads, create a storage bucket called `event-images`:

1. Go to Storage in your Supabase dashboard
2. Create a new bucket named `event-images`
3. Set it to public
4. Add the following RLS policies:

```sql
-- Allow public read access to event images
CREATE POLICY "Allow public read access" ON storage.objects
    FOR SELECT USING (bucket_id = 'event-images');

-- Allow authenticated users to upload event images
CREATE POLICY "Allow authenticated users to upload" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'event-images' AND 
        auth.role() = 'authenticated'
    );

-- Allow authenticated users to update event images
CREATE POLICY "Allow authenticated users to update" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'event-images' AND 
        auth.role() = 'authenticated'
    );

-- Allow authenticated users to delete event images
CREATE POLICY "Allow authenticated users to delete" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'event-images' AND 
        auth.role() = 'authenticated'
    );
```

### Admin User Setup

Create an admin user account:

1. Go to Authentication > Users in your Supabase dashboard
2. Click "Add user"
3. Add an email and password for your admin account
4. Use these credentials to log in at `/admin-login-secure`

### Important Security Notes

- The admin login is at the hidden URL `/admin-login-secure`
- Only authenticated users can create, update, or delete events
- All users can view events publicly
- Images are stored in Supabase Storage with proper permissions

### Usage

1. Navigate to `/admin-login-secure` to access the admin login
2. Log in with your admin credentials
3. Use the dashboard to create, edit, and delete events
4. Public users can view events at `/events`

The system includes:
- ✅ Event creation and editing with forms
- ✅ Image upload functionality
- ✅ Date and location management
- ✅ Responsive design
- ✅ Authentication protection
- ✅ Toast notifications
- ✅ Loading states