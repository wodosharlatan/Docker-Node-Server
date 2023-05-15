git add .
git commit -m "Committing changes before pushing to GitHub and GitLab"
git pull origin git@github.com:wodosharlatan/Docker-Node-Server

# Add remotes for GitHub and GitLab repositories
git remote add git@github.com:wodosharlatan/Docker-Node-Server
git remote add git@gitlab.com:wodosharlatan/Docker-Node-Server.git

# Create a temporary branch
git checkout -b temp


git add .

# Create commit with date-based message
git commit -m "[Auto GIT - $(date "+%d.%m.%Y")]"

# Push changes to GitHub
git push github temp:feature

# Switch back to original branch
git checkout feature

# Merge changes from temp
git merge temp

# Push merged changes to GitLab
git push gitlab git@github.com:wodosharlatan/Docker-Node-Server.git:feature

# Clean up by deleting the temporary branch
git branch -D temp

echo "Code pushed to GitHub and GitLab successfully."
