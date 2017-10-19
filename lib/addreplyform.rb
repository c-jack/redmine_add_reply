module Addreplyform
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_issues_show_description_bottom, :partial => 'issues/reply'
  end
end
