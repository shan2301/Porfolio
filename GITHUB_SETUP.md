# GitHub Setup Instructions

## Git Credentials Configured ✅
- Username: shan2301
- Email: sundarshashank@gmail.com

## To Push Your Code:

### Step 1: Create a Personal Access Token

1. Go to GitHub.com and sign in
2. Click your profile picture → **Settings**
3. Scroll down to **Developer settings** (left sidebar)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Give it a name: "Portfolio Project"
7. Select scopes: Check **repo** (this gives full control of private repositories)
8. Click **Generate token**
9. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

### Step 2: Push Your Code

Run this command in your terminal:

```bash
cd "/Users/sunda/Downloads/Shashank's Portfolio"
git push -u origin main
```

When prompted:
- **Username**: shan2301
- **Password**: Paste your Personal Access Token (NOT your GitHub password)

### Alternative: Use GitHub CLI

If you have GitHub CLI installed:

```bash
gh auth login
```

Then push:
```bash
git push -u origin main
```

---

**Note**: Your code is already committed locally. You just need to authenticate to push it to GitHub.

