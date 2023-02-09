# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    has_secure_password

    before_validation :ensure_session_token

    validates :name, :password_digest, presence: true
    validates :email,
        length: { in: 1..255 },
        uniqueness: true,
        format: { with: URI::MailTo::EMAIL_REGEXP,
        message: 'Wrong format' }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    
    has_one :cart,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Cart

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        # has_secure_password gives us the authenticate method
        if user&.authenticate(password) 
            return user
        else
            nil 
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    private

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end

end
