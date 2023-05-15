cd ShellScripts

# Build the docker images for the backend and frontend
sh docker-build.sh

# Create a Docker container and run it
sh docker-run.sh