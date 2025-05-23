#!/bin/bash

# Prompt for a commit message
read -p "Enter commit message: " msg

# Run Git commands
git add .
git commit -m "$msg"
git push

