## Staging Env

The staging environment is linked to Shopify theme staging-the-ideal-sunday via themekit. It uses gulp to compile scss and js files.

### Steps to deploy

1. Run "git checkout staging"
2. Run "gulp watch" - This will watch for changes and compile scss and js then push to Shopify theme
4. Live preview the changes on shopify theme staging-the-ideal-sunday
3. Commit any changes to staging branch


## Production

The production environment is linked to Shopify theme production-the-ideal-sunday using the main branch

### Steps to deploy

1. Run "git checkout main"
2. Run "git pull"
3. Run "git merge staging"
4. Run "git push"



