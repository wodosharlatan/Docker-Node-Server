git add .
git commit -m "[Auto GIT - $(date "+%d.%m.%Y")]"

# Add remotes for GitHub and GitLab repositories
git remote add gitlab git@gitlab.com:wodosharlatan/Docker-Node-Server
git remote add github git@github.com:wodosharlatan/Docker-Node-Server


# Create a temporary branch
git checkout -b temp

git add .

# Create commit with date-based message
git commit -m "[Auto GIT - $(date "+%d.%m.%Y")]"


# Push merged changes to GitLab
git push gitlab temp:feature --force

# Push changes to GitHub
git push github temp:feature --force

# Merge changes from temp
git merge temp

git checkout main

# Clean up by deleting the temporary branch
git branch -D temp

echo "Code pushed to GitHub and GitLab successfully."
