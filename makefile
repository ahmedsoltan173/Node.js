.PHONY: run test install

# Run the server
run:
	@echo "Starting server..."
	@node server.js

# Install dependencies
install:
	@echo "Installing dependencies..."
	@npm install

# Run tests
test:
	@echo "Running tests..."
	@npm test