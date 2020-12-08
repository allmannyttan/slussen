cat ~/token.txt | docker login https://docker.pkg.github.com -u osirisguitar --password-stdin
docker pull docker.pkg.github.com/allmannyttans-digitaliseringsinitiativ/slussen/api:latest
docker-compose build && docker-compose -d up
