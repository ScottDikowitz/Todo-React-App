class TodoStep < ActiveRecord::Base
  validates :todo_id, :content, presence: true;
  validates_inclusion_of :completed, :in => [true, false]

  belongs_to :todo
end
