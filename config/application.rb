require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    config.generators do |g|
    g.stylesheets false
    g.javascripts false
    g.helper false
    g.test_framework false
    config.i18n.default_locale = :ja
    end
  end
end
