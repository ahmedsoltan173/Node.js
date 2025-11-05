.PHONY: run test install

# Run the server
run:
	@echo "Starting server..."
	# @node app.js
	@nodemon app

# Install dependencies
install:
	@echo "Installing dependencies..."
	@npm install

# Run tests
test:
	@echo "Running tests..."
	@npm test