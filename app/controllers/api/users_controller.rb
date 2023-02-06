class Api::UsersController < ApplicationController

    wrap_parameters include: User.attribute_names + ['password']

    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:show]
    
    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show # will likely want to render the session show page
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end

end
