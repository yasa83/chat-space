# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Association
has_many :members<br>
has_many :groups, through: :group_users<br>
has_many :comments


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Association
has_many :members<br>
has_many :users, through: :group_users<br>
has_many :comments


## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
belongs_to :group<br>
belongs_to :user


## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|body|text| |
|image|string| |
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
belongs_to :user<br>
belongs_to :group



