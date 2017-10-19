require_dependency 'addreply'
require_dependency 'addreplyform'

Redmine::Plugin.register :addreply do
  name 'Reply button plugin'
  author 'Chris Jackson'
  description 'Adds a reply button and slimmed-down reply form to issues'
  version '0.0.1'
  url 'https://github.com/c-jack/redmine_reply_button'
  author_url 'https://github.com/c-jack'
end
