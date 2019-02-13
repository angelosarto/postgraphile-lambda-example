rm -f .env && rm -f lambda.zip && cp .env.$1 .env && yarn build && mv lambda.zip lambda-$1.zip
