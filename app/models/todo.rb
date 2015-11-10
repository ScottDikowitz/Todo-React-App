class Todo < ActiveRecord::Base
  validates :title, :body, presence: true;
  validates_inclusion_of :done, :in => [true, false]

  has_many :todo_steps
end
