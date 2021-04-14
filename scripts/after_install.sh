#!/bin/bash

chown -hR coinmetro:www-data /home/coinmetro/frontend
su - coinmetro -c 'cd /home/coinmetro/frontend && npm ci --production && pm2 restart frontend'
