#!/bin/sh

# Setup wordpress intallation
#   User: wordpress
#   Pass: wordpress

sleep 15;
wp core install --admin_user=wordpress --admin_password=wordpress --admin_email=example@example.com --path="/var/www/html" --url="http://localhost:7000" --title="Wordpress Development Environment";
wp theme activate wp-dev-env-theme
