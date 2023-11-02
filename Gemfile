ruby '~> 3.1'

source "https://rubygems.org"

gem "jekyll", "4.2.2"
gem "sprockets", "~> 4"
gem "autoprefixer-rails"
gem "webrick" # not included in jekyll directly until 4.3.0 https://github.com/jekyll/jekyll/pull/8524

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem 'jekyll-redirect-from'
  gem 'jekyll-paginate-v2', '~> 3.0'
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

gem "html-proofer", "~> 3.19"
gem "kramdown-parser-gfm"