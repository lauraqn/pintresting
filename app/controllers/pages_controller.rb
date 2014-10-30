class PagesController < ApplicationController
  def home
  end

  def about
  end

def ajax
	render partial: 'ajax', formats: :html #is not going to use the layout, just the ajax part that you're rendering
	end
end
