# Build the docker images for the backend and frontend
cd ..

cd BackEnd

# Build the backend docker image
docker build . -t backend

cd ..

cd FrontEnd


# Build the frontend docker image
docker build . -t frontend
