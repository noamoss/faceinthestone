source "https://rubygems.org"

# Use github-pages 232 as that's the available version
gem "github-pages", "~> 232"

group :jekyll_plugins do
  gem "jekyll-sass-converter", "~> 1.5.2"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock jekyll version to match github-pages 232
gem "jekyll", "~> 3.10.0"