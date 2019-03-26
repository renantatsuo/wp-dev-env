#!/bin/sh

# Set permissions
chown -R 33:33 /var/www/html/wp-content
chmod -R g+w /var/www/html/wp-content

# Run Apache
exec "apache2-foreground"
