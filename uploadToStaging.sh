#!/usr/bin/env bash

./node_modules/.bin/next build && \
./node_modules/.bin/next export && \
rsync -azP -e "ssh -p 1022 -o StrictHostKeyChecking=no" --delete ./out/ vhost57549ssh@orgo.ee:/www/apache/domains/www.orgo.ee/htdocs/staging/coinmetro
#curl -X POST -H 'Content-type: application/json' --data '{"text":"CoinMetro has been updated [staging]"}' https://hooks.slack.com/services/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
