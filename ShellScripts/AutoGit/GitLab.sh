git add .
git commit -m "Committing changes before pushing to GitHub and GitLab"
git pull origin git@github.com:wodosharlatan/Docker-Node-Server

# Step 2: Add remotes for GitHub and GitLab repositories
git remote add github <github_repository_url>
git remote add gitlab <gitlab_repository_url>

# Step 3: Create a temporary branch
git checkout -b temp_branch

# Step 4: Make desired changes to the code

# Step 5: Add changes to staging area
git add .

# Step 6: Create commit with date-based message
git commit -m "[Auto GIT - $(date "+%d.%m.%Y")]"

# Step 7: Push changes to GitHub
git push github temp_branch:feature

# Step 8: Switch back to original branch
git checkout <original_branch>

# Step 9: Merge changes from temp_branch
git merge temp_branch

# Step 10: Push merged changes to GitLab
git push gitlab <original_branch>:feature

# Step 11: Clean up by deleting the temporary branch
git branch -D temp_branch

echo "Code pushed to GitHub and GitLab successfully."
