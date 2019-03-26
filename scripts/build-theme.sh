#!/bin/sh

npm install && \
webpack && \
zip -r theme.zip src/theme/ && \
rm -rf theme && \
echo -e "\e[1;32m\n\nTheme builded successfully.\n\n"
