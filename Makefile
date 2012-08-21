
.PHONY: lint

BIN   = ./node_modules/.bin
JSSRC = **/*.js

lint: $(JSSRC)
	@$(BIN)/jshint $^

