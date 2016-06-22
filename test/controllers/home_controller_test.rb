require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get test2" do
    get :test2
    assert_response :success
  end

end
