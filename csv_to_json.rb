# csv_to_json.rb
#
# usage:
# csv_to_json.rb my_csv_file.csv > my_json_file.js

require 'csv'
require 'pp'
require 'json'

PAGE_H = ENV['PAGE_H'] || 1000;
PAGE_W = ENV['PAGE_W'] || 1200;

INNER_EDGES = {
  'Adopt' => 100,
  'Trial' => 200,
  'Assess' => 300,
  'Hold' => 400
}

QUADRANT_SEEDS = {
  'Platforms' => { 
    color: "#B70062",
    left: 34,
    top:  18
  },
  'Languages & Frameworks' => {
    left: PAGE_W-200+30,
    top: 18,
    color: "#587486"
  },
  'Techniques' => {
    left: 45,
    top: (PAGE_H/2 + 18),
    color: "#DC6F1D"
  },
  'Tools' => {
    color: "#B70062",
    left: (PAGE_W-200+30),
    top:   (PAGE_H/2 + 18)
  }
}

def document_title(date=Time.now)
  "MoJ DS's Technology Radar (#{date.strftime('%B %g')})"
end

class Row
  attr_accessor :ring, :prev_ring, :theta, :r, :movement, :name

  def initialize(args={})
    @name = args['Thing']
    @prev_ring = args['Prev Ring']
    @ring = args['Ring']
    @r = args['r'].to_i
    @theta = args['theta']
    @movement = args['movement']
  end

  def moving_in?
    INNER_EDGES[prev_ring].to_i > INNER_EDGES[ring]
  end

  def moving_out?
    INNER_EDGES[prev_ring].to_i > INNER_EDGES[ring]
  end

  def moved?
    prev_ring != ring
  end

  def inner_edge
    INNER_EDGES[ring]
  end

  def radius
    inner_edge + 50 + movement_delta + jitter
  end

  def jitter
    (20 * rand) - 10
  end

  def movement_delta
    25 * ( (moving_in? && 1) || (moving_out? && -1) || 0 )
  end

  def to_item
    {
      name: name,
      pc: { r: radius, t: theta},
      movement: movement
    }
  end
end


class Quadrant
  attr_accessor :name, :items

  def initialize(name, items)
    @name = name
    @items = items
  end

  def to_h
    QUADRANT_SEEDS[name].merge(
      {
        'quadrant': name,
        'items': items
      }
    )  
  end
end

def radar_arcs
  output = []
  INNER_EDGES.each do |name, r|
    output << {r: r + 100, name: name}
  end
  output
end


csv_data = CSV.read(ARGV[0], headers: :first_line).map(&:to_h)
quadrants = csv_data.group_by{|h| h['Quadrant'] }
radar_data = []
quadrant_number = 0


quadrants.each do |name, rows|
  items = []
  spacing = 70 / rows.size
  start = (quadrant_number * 90) + 10

  rows.each_with_index do |row, index|
    line = Row.new(row)
    # have to calculate theta in this context rather than the
    # Row object, as we need the index & display dimensions
    line.theta = (start + (index * spacing)).to_i
    items << line.to_item
  end

  radar_data << Quadrant.new(name, items).to_h
  quadrant_number += 1
end

output = <<-END
  document.title = "#{document_title}";

  var radar_arcs = #{JSON.pretty_generate(radar_arcs)};

  var h = #{PAGE_H};
  var w = #{PAGE_W};

  var radar_data = #{JSON.pretty_generate(radar_data)};
END

puts output
exit 0