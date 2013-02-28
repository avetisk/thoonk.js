test:
	@node testall.js
	@./node_modules/mocha/bin/mocha -R dot tests/connection.js

.PHONY: test
