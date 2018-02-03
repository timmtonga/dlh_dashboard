class MainController < ApplicationController
  def index
  end

  def notification
  end

  def kpis
  end

  def notices
    #Normally this would be done by a db query or API call but for now we just use sample data
    records = [{'item' => 'Paracetamol 500mg Tablet', 'available' => 500,
                'threshold' => (rand(4)* 1000), 'projected' => "#{rand(25)} Days"}]
    render :text => records.to_json
  end
end
