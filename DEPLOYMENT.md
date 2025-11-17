# Deploying Blanced.co.uk to GitHub Pages

This guide walks you through hosting your website on GitHub Pages with your custom domain blanced.co.uk.

## Step-by-Step Guide

### 1. Initialize Git Repository

First, set up Git in your project:

```bash
cd /Users/geeh/www/blanced
git init
git add .
git commit -m "Initial commit: Blanced Health and Safety website"
```

### 2. Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `blanced.co.uk` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (you already have files)
6. Click **Create repository**

### 3. Push Your Code to GitHub

After creating the repo, GitHub will show you commands. Run these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/blanced.co.uk.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Enable GitHub Pages

1. In your GitHub repository, click **Settings** (top right)
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes - GitHub will build your site

### 5. Configure Custom Domain (blanced.co.uk)

#### In GitHub:
1. Still in **Settings** → **Pages**
2. Under **Custom domain**, enter: `blanced.co.uk`
3. Click **Save**
4. Check the box **Enforce HTTPS** (wait until DNS is configured first)

#### At Your Domain Registrar:
You need to configure DNS records where you bought blanced.co.uk:

**Option A: Using A Records + CNAME (Recommended)**

Add these records in your domain registrar's DNS settings:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**Option B: Just www subdomain**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 6. Create CNAME File

GitHub Pages needs a CNAME file in your repository root:

```bash
echo "blanced.co.uk" > CNAME
git add CNAME
git commit -m "Add CNAME for custom domain"
git push
```

### 7. Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours (usually ~1 hour)
- Check status: [whatsmydns.net](https://www.whatsmydns.net)
- Enter `blanced.co.uk` and check CNAME/A records

### 8. Enable HTTPS

Once DNS has propagated:

1. Go back to **Settings** → **Pages** in your GitHub repository
2. Check the box **Enforce HTTPS**
3. Wait 5-10 minutes for the SSL certificate to be issued

## Common Issues & Solutions

### Issue: "Domain is improperly configured"
**Solution**: Wait for DNS propagation, ensure CNAME file exists in repository

### Issue: "Certificate error" or "Not secure"
**Solution**: Wait 5-10 minutes after DNS propagates, then enable "Enforce HTTPS" in GitHub Pages settings

### Issue: Site shows 404
**Solution**: Ensure `index.html` is in the root directory and GitHub Pages is enabled on the correct branch

### Issue: Changes not appearing
**Solution**:
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Wait 2-3 minutes for GitHub Pages to rebuild
- Check the Actions tab in GitHub to see build status

## Making Updates

After initial deployment, to update your website:

```bash
# Make your changes to files
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy your site within 1-2 minutes.

## Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Checker](https://www.whatsmydns.net)
- [GitHub Pages Status](https://www.githubstatus.com)

## Need Help?

If you encounter issues:
1. Check the repository **Actions** tab for build errors
2. Verify DNS settings with your domain registrar
3. Ensure CNAME file contains only `blanced.co.uk`
4. Check GitHub Pages is enabled in Settings
