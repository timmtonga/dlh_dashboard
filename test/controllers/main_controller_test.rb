require 'test_helper'

class MainControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get notification" do
    get :notification
    assert_response :success
  end

  test "should get kpis" do
    get :kpis
    assert_response :success
  end

end
