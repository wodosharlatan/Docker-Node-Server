cd ../../

# Initialize the git repository
git init

# Create a new branch
git branch -m feature

# Add remote origin
git remote add origin git@gitlab.com:wodosharlatan/Docker-Node-Server.git

# checkout the feature branch
git checkout -b feature

# Add all files to the commit
git add .

# Commit the changes
git commit -m "[Auto GIT - $(date "+%d.%m.%Y")]"

# Push the changes to the remote repository
git push origin feature --force
