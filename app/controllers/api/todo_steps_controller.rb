class Api::TodoStepsController < ApplicationController

  def index
    @todo_steps = Todo.find(params[:todo_id]).todo_steps
    render json: @todo_steps.to_json
  end

  def create
    @todo_step = TodoStep.create(todo_step_params)
    render json: @todo_step
  end

  private
  def todo_step_params
    params.require(:todo_step).permit(:todo_id, :content, :completed)
  end
end
